import _ from "lodash";
import React, { Component } from "react";
import { numDescendants } from "./tree";
import { TraceNode } from "./trace";

const HEIGHT = 30;
const HEIGHT_PLUS_SPACE = HEIGHT + 5;

const DOWN_ARROW = '▼';
const SIDE_ARROW = '▶';

const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED';
const toggleCollapsed = (spanID: number) => ({
  type: TOGGLE_COLLAPSED,
  spanID,
});

const HOVER_SPAN = 'HOVER_SPAN';
const hoverSpan = (spanID: number) => ({
  type: HOVER_SPAN,
  spanID,
});

const UN_HOVER_SPAN = 'UN_HOVER_SPAN';
const unHoverSpan = {
  type: UN_HOVER_SPAN,
};

interface TraceViewProps {
  trace: TraceNode;
  width: number;
  traceState: TraceViewState;
  handleAction: (action: any) => void;
}

export interface TraceViewState {
  hoveredSpanID: number;
  collapsedSpanIDs: number[];
}

export const initialState: TraceViewState = {
  hoveredSpanID: null,
  collapsedSpanIDs: [],
};

export interface Action {
  type: string;
  spanID?: number;
}

export function update(state: TraceViewState, action: Action): TraceViewState {
  switch (action.type) {
    case TOGGLE_COLLAPSED: {
      const isCollapsed = _.includes(state.collapsedSpanIDs, action.spanID);
      return {
        ...state,
        collapsedSpanIDs: isCollapsed
          ? state.collapsedSpanIDs.filter((spanID) => (spanID !== action.spanID))
          : [...state.collapsedSpanIDs, action.spanID],
      };
    }
    case HOVER_SPAN:
      return {
        ...state,
        hoveredSpanID: action.spanID,
      };
    case UN_HOVER_SPAN:
      return {
        ...state,
        hoveredSpanID: null,
      };
    default:
      return state;
  }
}

function flatten(tree: TraceNode, collapsed: number[]) {
  const output: TraceNode[] = [];
  function recur(node: TraceNode) {
    output.push(node);
    if (_.includes(collapsed, node.spanID)) {
      return;
    }
    if (node.children) {
      node.children.forEach((child) => {
        recur(child);
      });
    }
  }
  recur(tree);
  return output;
}

function lerp(omin: number, omax: number, imin: number, imax: number): (val: number) => number {
  return (input: number): number => {
    return omin + (omax - omin) * (input - imin) / (imax - imin);
  }
}

class TraceView extends Component<TraceViewProps> {

  handleAction = (action: Action) => {
    this.props.handleAction(action);
  }

  render() {
    const {
      trace,
      width,
      traceState,
    } = this.props;
    const {
      collapsedSpanIDs,
      hoveredSpanID,
    } = traceState;
    const flattened = flatten(trace, collapsedSpanIDs);
    // TODO(vilterp): convert to age
    const lastTS = _.max(flattened.map((span) => (span.timestamp.toMillis() + span.duration)));
    const scale = lerp(0, width, 0, lastTS);

    return (
      <svg width={width} height="2000" style={{ border: "1px solid black" }}>
        {flattened.map((span, idx) => {
          const isHovered = hoveredSpanID === span.spanID;
          const isCollapsed = _.includes(collapsedSpanIDs, span.spanID);
          const timeLabel = `${span.duration}ns`;
          const isLeaf = !!span.children;
          const label = !isLeaf
            ? `${timeLabel} : ${span.operation}`
            : isCollapsed
              ? `${SIDE_ARROW} ${timeLabel} : ${span.operation} (${numDescendants(span)})`
              : `${DOWN_ARROW} ${timeLabel} : ${span.operation}`;
          return (
            <g
              key={span.spanID}
              style={{ cursor: "pointer" }}
              onMouseOver={() => { this.handleAction(hoverSpan(span.spanID)); }}
              // onMouseOut={() => { this.handleAction(unHoverSpan); }}
              onClick={() => { this.handleAction(toggleCollapsed(span.spanID)); }}
            >
              <rect
                fill={isHovered ? "blue" : "lightblue"}
                y={idx * HEIGHT_PLUS_SPACE - 5}
                x={scale(span.timestamp.toMillis())}
                height={HEIGHT}
                width={scale(span.duration)}
              />
              <text
                x={scale(span.timestamp.toMillis()) + 5}
                y={idx * HEIGHT_PLUS_SPACE + HEIGHT/2}
                fill={isHovered ? "white" : "black"}
              >
                {label}
              </text>
            </g>
          );
        })}
      </svg>
    );
  }

}

export default TraceView;
