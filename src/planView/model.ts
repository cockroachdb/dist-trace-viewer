import cola from "webcola";

// Cola stuff.

export interface QueryNode extends cola.InputNode {
  title: string;
  details: string;
  type: string;
  rx: number;
  ry: number;
  bounds?: cola.Rectangle;
  innerBounds?: cola.Rectangle;
}

interface QueryLink extends cola.Link<QueryNode> {
  invisible?: boolean;
  width?: number;
  route?: {
    sourceIntersection: cola.Point;
    targetIntersection: cola.Point;
    arrowStart: cola.Point;
  };
}

interface QueryGroup extends cola.Group {
  nodeID: string;
  padding: number;
}

interface QueryConstraint {
  type: string;
  axis: string;
  offsets: {
    node: number;
    offset: number;
  }[];
}

interface DataGraph {
  nodes: QueryNode[];
  links: QueryLink[];
  groups: QueryGroup[];
  constraints: QueryConstraint[];
}

// Query plan stuff.

interface ProcessorCore {
  graphNodeIdx: number;
  title: string;
  details: string;
}

interface ProcessorInput {
  graphNodeIdx: number;
  title: string;
  details: string;
}

interface ProcessorOutput {
  graphNodeIdx: number;
  title: string;
  details: string;
}

interface Processor {
  nodeIdx: number;
  core: ProcessorCore,
  inputs: ProcessorInput[],
  outputs: ProcessorOutput[],
}

interface Edge {
  sourceProc: number;
  sourceOutput: number;
  destProc: number;
  destInput: number;
}

export interface QueryPlan {
  processors: Processor[];
  edges: Edge[];
  nodeNames: string[];
}

// buildGraph builds a Cola graph specification from a QueryPlan.
export function buildGraph(data: QueryPlan): DataGraph {
  const graph: DataGraph = {
    nodes: [],
    links: [],
    groups: [],
    constraints: [],
  };
  for (let i = 0; i < data.processors.length; i++) {
    const p = data.processors[i];
    p.core.graphNodeIdx = graph.nodes.length;
    graph.nodes.push({
      title: p.core.title,
      details: p.core.details,
      width: 60,
      height: 40,
      rx: 5,
      ry: 5,
      type: "core",
    });
    for (let j = 0; j < p.inputs.length; j++) {
      p.inputs[j].graphNodeIdx = graph.nodes.length;
      graph.nodes.push({
        title: p.inputs[j].title,
        details: p.inputs[j].details,
        width: 60,
        height: 40,
        rx: 15,
        ry: 15,
        type: "synchronizer",
      });
    }
    for (let j = 0; j < p.outputs.length; j++) {
      p.outputs[j].graphNodeIdx = graph.nodes.length;
      graph.nodes.push({
        title: p.outputs[j].title,
        details: p.outputs[j].details,
        width: 60,
        height: 40,
        rx: 15,
        ry: 15,
        type: "node",
      });
    }
  }

  for (let i = 0; i < data.edges.length; i++) {
    let srcNode, destNode;

    const e = data.edges[i];
    const p1 = data.processors[e.sourceProc];
    let siblings = 1;
    if (e.sourceOutput) {
      srcNode = p1.outputs[e.sourceOutput - 1].graphNodeIdx;
      if (p1.outputs[e.sourceOutput - 1].title === "by hash") {
        for (let j = 0; j < data.edges.length; j++) {
          if (i !== j && data.edges[j].sourceProc === e.sourceProc &&
              data.edges[j].sourceOutput === e.sourceOutput) {
            siblings = siblings + 1;
          }
        }
      }
    } else {
      srcNode = p1.core.graphNodeIdx;
    }
    const p2 = data.processors[e.destProc];
    if (e.destInput) {
      destNode = p2.inputs[e.destInput - 1].graphNodeIdx;
    } else {
      destNode = p2.core.graphNodeIdx;
    }
    let width = 3.0 / siblings;
    if (width < 1) {
      width = 1;
    }
    graph.links.push({
      source: srcNode,
      target: destNode,
      width: width,
    });
  }

  // Generate groups.
  for (let i = 0; i < data.nodeNames.length; i++) {
    graph.groups.push({
      nodeID: data.nodeNames[i],
      leaves: [],
      padding: 15,
    });
  }
  for (let i = 0; i < data.processors.length; i++) {
    const p = data.processors[i];
    const n = p.nodeIdx;
    graph.groups[n].leaves.push(graph.nodes[p.core.graphNodeIdx] as cola.Node);
    for (let j = 0; j < p.inputs.length; j++) {
      graph.groups[n].leaves.push(graph.nodes[p.inputs[j].graphNodeIdx] as cola.Node);
    }
    for (let j = 0; j < p.outputs.length; j++) {
      graph.groups[n].leaves.push(graph.nodes[p.outputs[j].graphNodeIdx] as cola.Node);
    }
  }

  // Generate constraints to align input synchronizers and output
  // synchronizers next to the core.
  for (let i = 0; i < data.processors.length; i++) {
    const p = data.processors[i];
    if (p.inputs.length === 0 && p.outputs.length === 0) {
      continue;
    }
    const xConstr = {
      type: "alignment",
      axis: "x",
      offsets: [
        {
          node: p.core.graphNodeIdx,
          offset: 0,
        }
      ],
    };
    const yConstr = {
      type: "alignment",
      axis: "y",
      offsets: [{node: p.core.graphNodeIdx, offset: 0}],
    };
    const hSpacing = 80, vSpacing = 28 + 10 * graph.nodes[p.core.graphNodeIdx].details.length;
    for (let j = 0; j < p.inputs.length; j++) {
      const n = p.inputs[j].graphNodeIdx;
      xConstr.offsets.push({node: n, offset: hSpacing * (2 * j + 1 - p.inputs.length)});
      yConstr.offsets.push({node: n, offset: -vSpacing});
      // These edges are not visible, but they help with the layout.
      graph.links.push({
        source: graph.nodes[n],
        target: graph.nodes[p.core.graphNodeIdx],
        invisible: true,
      });
    }
    for (let j = 0; j < p.outputs.length; j++) {
      const n = p.outputs[j].graphNodeIdx;
      xConstr.offsets.push({
        node: n,
        offset: hSpacing * (2 * j + 1 - p.outputs.length),
      });
      yConstr.offsets.push({
        node: n,
        offset: +vSpacing,
      });
      // These edges are not visible, but they help with the layout.
      graph.links.push({
        source: graph.nodes[p.core.graphNodeIdx],
        target: graph.nodes[n],
        invisible: true,
      });
    }
    graph.constraints.push(xConstr, yConstr);
  }

  return graph;
}

// parsePlanFromJSON parses JSON into a query plan, doing a bit of validation
// along the way.
export function parsePlanFromJSON(jsonString: string): QueryPlan {
  const data = JSON.parse(jsonString);
  ["edges", "nodeNames", "processors"].forEach(attr => {
    if (!Array.isArray(data[attr])) {
      throw Error("Invalid query plan provided.");
    }
  });
  return data;
}
