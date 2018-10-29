import _ from "lodash";
import React, { Component } from "react";
import { numDescendants } from "./tree";
import { TraceNode } from "./trace";
import { formatNanos } from "./format";
import * as d3scale from "d3-scale";

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

const MICROSECOND = 1000;
const MILLISECOND = 1000 * MICROSECOND;

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
    const firstTS = trace.timestamp.toMillis();
    const lastTS = _.max(flattened.map((span) => (span.timestamp.toMillis() + (span.duration/MILLISECOND))));

    const scale = d3scale
      .scaleLinear()
      .domain([firstTS, lastTS])
      .range([0, width]);

    return (
      <svg
        height={flattened.length * HEIGHT_PLUS_SPACE}
        style={{ width: "100%", minWidth: width }}
      >
        {flattened.map((span, idx) => {
          const isHovered = hoveredSpanID === span.spanID;
          const isCollapsed = _.includes(collapsedSpanIDs, span.spanID);
          const timeLabel = `${formatNanos(span.duration)} (${span.duration}ns)`;
          const isLeaf = !!span.children;
          const label = !isLeaf
            ? `${timeLabel} : ${span.operation}`
            : isCollapsed
              ? `${SIDE_ARROW} ${timeLabel} : ${span.operation} (${numDescendants(span)})`
              : `${DOWN_ARROW} ${timeLabel} : ${span.operation}`;
          const startTS = span.timestamp.toMillis();
          const endTS = span.timestamp.toMillis() + span.duration / MILLISECOND;
          return (
            <g
              key={span.spanID}
              style={{ cursor: "pointer" }}
              onMouseOver={() => { this.handleAction(hoverSpan(span.spanID)); }}
              onClick={() => { this.handleAction(toggleCollapsed(span.spanID)); }}
            >
              <rect
                fill="lightblue"
                y={idx * HEIGHT_PLUS_SPACE - 5}
                x={scale(startTS)}
                height={HEIGHT}
                width={Math.max(scale(endTS) - scale(startTS), 1)}
              />
              <text
                x={scale(startTS) + 5}
                y={idx * HEIGHT_PLUS_SPACE + HEIGHT/2}
                style={{ textDecoration: isHovered ? "underline" : "none" }}
              >
                {label}
              </text>
              <g>
                {span.messages.map((logEntry, logIdx) => (
                  <circle
                    key={logIdx}
                    cx={scale(logEntry.age / MILLISECOND + firstTS)}
                    cy={idx * HEIGHT_PLUS_SPACE + 20}
                    r={3}
                    fill={"white"}
                    stroke={"black"}
                  />
                ))}
              </g>
            </g>
          );
        })}
      </svg>
    );
  }

}

export default TraceView;
