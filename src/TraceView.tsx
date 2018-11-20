import _ from "lodash";
import React, { Component } from "react";
import { numDescendants } from "./tree";
import { TraceNode } from "./trace";
import { formatNanos } from "./format";
import * as d3scale from "d3-scale";
import * as d3chromatic from "d3-scale-chromatic";

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

export function HashString(s: string) {
  var hash = 0;
  for (var i = 0; i < s.length; i++) {
    hash = (hash << 5) - hash + s.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};


const colors = d3chromatic.schemeSpectral[11];

export function StringToColor(s: string) {
  return colors[HashString(s) % colors.length]
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

function pullNodeIDFromTag(tag: string) {
  if (tag.length === 0) {
    return '';
  }
  // TODO(bram): use a regex for this instead of this by hand ugliness. And move
  // this to the tree building instead of here.
  const firstComma = tag.indexOf(',');
  if (firstComma > 0) {
    return tag.substr(1, firstComma - 1);
  }
  return tag.substr(1, tag.length - 2);
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
    const lastTS = _.max(flattened.map((span) => (span.timestamp.toMillis() + (span.duration / MILLISECOND))));

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
          const timeLabel = formatNanos(span.duration);
          const isLeaf = span.children.length === 0;
          const nodeID = pullNodeIDFromTag(span.tag);
          const nodeIDDisplay = nodeID ? ': ' + nodeID : '';
          const label = isLeaf
            ? `${timeLabel} : ${span.operation} ${nodeIDDisplay}`
            : isCollapsed
              ? `${SIDE_ARROW} ${timeLabel} : ${span.operation} ${nodeIDDisplay} (${numDescendants(span)})`
              : `${DOWN_ARROW} ${timeLabel} : ${span.operation} ${nodeIDDisplay}`;
          const startTS = span.timestamp.toMillis();
          const endTS = span.timestamp.toMillis() + span.duration / MILLISECOND;
          const color = StringToColor(span.operation);
          return (
            <g
              key={span.spanID}
              style={{ cursor: "pointer" }}
              onMouseOver={() => { this.handleAction(hoverSpan(span.spanID)); }}
              onClick={isLeaf ? null : () => { this.handleAction(toggleCollapsed(span.spanID)); }}
            >
              <rect
                fill="white"
                x={0}
                y={idx * HEIGHT_PLUS_SPACE - 5}
                height={HEIGHT}
                width={width}
              />
              <rect
                fill={color}
                y={idx * HEIGHT_PLUS_SPACE - 5}
                x={scale(startTS)}
                height={HEIGHT}
                width={Math.max(scale(endTS) - scale(startTS), 1)}
              />
              <text
                x={scale(startTS) + 5}
                y={idx * HEIGHT_PLUS_SPACE + HEIGHT / 2}
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
