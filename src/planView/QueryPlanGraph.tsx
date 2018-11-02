import * as React from "react";
import * as d3 from "d3";
import {event as d3Event} from "d3";
import {
  buildGraph,
  QueryNode,
  QueryPlan,
} from "./model";

import * as cola from "webcola";
import "./queryPlanGraph.css";

interface QueryPlanGraphProps {
  plan: QueryPlan;
}

// QueryPlanGraph creates an SVG schematic from a JSON representation of a
// physical query plan.
export class QueryPlanGraph extends React.Component<QueryPlanGraphProps> {
  // SVG Elements in the DOM used to render the graph.
  svg: d3.Selection<SVGElement>;
  vis: d3.Selection<SVGElement>;
  zoomRect: d3.Selection<SVGElement>;

  onResize = () => {
    this.redrawPlan();
  }

  constructor(props: QueryPlanGraphProps) {
    super(props);
  }

  componentDidMount () {
    this.setupPlan();
    this.redrawPlan();
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  componentWillReceiveProps(nextProps: QueryPlanGraphProps) {
    if (nextProps.plan !== this.props.plan) {
      this.redrawPlan();
    }
  }

  setupPlan() {
    const zoom = d3.behavior.zoom()
      .scale(0.2)
      .translate([80, 80])
      .on("zoom", () => {
        const zoomEvent = d3Event as d3.ZoomEvent;
        this.vis.attr("transform", "translate(" + zoomEvent.translate + ")" + " scale(" + zoomEvent.scale + ")");
      });

    // Rectangle spanning entire visualization to capture zoom events
    this.zoomRect = this.svg.append("g")
      .append("rect")
      .attr("fill", "none")
      .attr("pointer-events", "all");

    this.vis = this.svg.append("g");

    this.zoomRect
      .call(zoom)
      .call(zoom.event);
  }

  redrawPlan() {
    console.log("redrawPlan");
    const plan = this.props.plan;
    this.vis.selectAll("*").remove();

    const containerWidth = this.svg.node().parentElement.clientWidth;
    const containerHeight = this.svg.node().parentElement.clientHeight;

    this.svg.attr("viewBox", `0 0 ${Math.min(containerWidth, containerHeight)} ${Math.min(containerWidth, containerHeight)}`);
    this.zoomRect
      .attr("width", Math.min(containerWidth, containerHeight))
      .attr("height", Math.min(containerWidth, containerHeight));

    const groupsLayer = this.vis.append("g");
    const nodesLayer = this.vis.append("g");
    const linksLayer = this.vis.append("g");

    const d3cola = cola.d3adaptor()
      .jaccardLinkLengths(40, 0.7)
      .avoidOverlaps(true)
      .flowLayout("y", 80)
      .size([containerWidth, containerHeight]);

    const graph = buildGraph(plan);

    const color = d3.scale.category20();

    d3cola
      .nodes(graph.nodes as cola.InputNode[])
      .links(graph.links as cola.Link<cola.Node>[])
      .groups(graph.groups as cola.Group[])
      .constraints(graph.constraints)
      .start(10, 10, 10);

    // define arrow markers for graph links
    this.svg.append("svg:defs")
      .append("svg:marker")
        .attr("id", "end-arrow")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 5)
        .attr("markerWidth", 3)
        .attr("markerHeight", 3)
        .attr("orient", "auto")
      .append("svg:path")
        .attr("d", "M0,-5L10,0L0,5L2,0")
        .attr("stroke-width", "0px")
        .attr("fill", "#000");

    const group = groupsLayer.selectAll(".group")
      .data(graph.groups)
      .enter()
        .append("rect")
          .attr("rx", 4).attr("ry", 4)
          .attr("class", "group")
          .style("fill-opacity", 0.2)
          .style("fill", d => color(d.nodeID))
          .call(d3cola.drag);

    const link = linksLayer.selectAll(".link")
      .data(graph.links.filter(d => !d.invisible))
      .enter()
      .append("line")
      .attr("class", "link")
      .style("stroke-width", d => d.width);

    const margin = 10, pad = 12;
    const node = nodesLayer.selectAll(".node")
      .data(graph.nodes)
      .enter().append("rect")
      .attr("class", d => d.type)
      .attr("width", d => d.width + 2 * pad + 2 * margin)
      .attr("height", d => d.height + 2 * pad + 2 * margin)
      .attr("rx", d => d.rx)
      .attr("ry", d => d.rx)
      .call(d3cola.drag);

    const label = nodesLayer.selectAll(".label")
      .data(graph.nodes)
      .enter()
      .append("text")
        .attr("class", "label")
        .call(d3cola.drag);

    const setLabels = function (d: QueryNode) {
      const el = d3.select(this);
      el.text("");
      let size = 0;
      if (d.type === "core") {
        size = 4;
      }

      el.append("tspan")
       .text(d.title)
       .attr("x", 0).attr("dy", 18 + size)
       .attr("font-size", 14 + size)
       .attr("font-weight", "bold");

      if (!d.details) {
        return;
      }
      for (let i = 0; i < d.details.length; i++) {
        el.append("tspan")
          .text(d.details[i])
          .attr("x", 0).attr("dy", 16 + size)
          .attr("font-size", 12 + size);
      }
    };

    label.each(setLabels);

    const groupLabel = this.vis.selectAll(".groupLabel")
      .data(graph.groups)
      .enter().append("text")
      .attr("font-size", "15")
      .text(d => "Node " + d.nodeID);

    let ticks = 0;
    d3cola.on("tick", function () {
      ticks++;
      if (ticks > 100) {
        return;
      }
      node.each(function (d) {
        d.innerBounds = d.bounds.inflate(- margin);
      });
      link.each(function (d) {
        d.route = cola.makeEdgeBetween(d.source.innerBounds, d.target.innerBounds, 1);
        if (isIE()) {
          this.parentNode.insertBefore(this, this);
        }
      });

      link.attr("x1", d => d.route.sourceIntersection.x)
          .attr("y1", d => d.route.sourceIntersection.y)
          .attr("x2", d => d.route.arrowStart.x)
          .attr("y2", d => d.route.arrowStart.y);

      label.each(function (d) {
        const b = this.getBBox();
        d.width = b.width + 4 * margin + 8;
        d.height = b.height + 2 * margin + 8;
      });

      node.attr("x", d => d.innerBounds.x)
          .attr("y", d => d.innerBounds.y)
          .attr("width", d => d.innerBounds.width())
          .attr("height", d => d.innerBounds.height());

      group.attr("x", d => d.bounds.x)
        .attr("y", d => d.bounds.y)
        .attr("width", d => d.bounds.width())
        .attr("height", d => d.bounds.height());

      groupLabel.data(group.data())
        .attr("x", d => d.bounds.x + 5)
        .attr("y", d => d.bounds.y + 15);

      label.attr(
        "transform",
        d => "translate(" + d.x + margin + "," + (d.y + margin - d.height / 2) + ")");
    });
  }

  render() {
    return <svg className="query-plan-graph" ref={(svg) => this.svg = d3.select(svg)} />;
  }
}

function isIE() {
  return ((navigator.appName === "Microsoft Internet Explorer") ||
          ((navigator.appName === "Netscape") &&
           (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null)));
}
