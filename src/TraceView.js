import _ from "lodash";
import React, { Component } from "react";
import { numDescendants } from "./tree";

const HEIGHT = 30;
const HEIGHT_PLUS_SPACE = HEIGHT + 5;

const DOWN_ARROW = '▼';
const SIDE_ARROW = '▶';

const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED';
const toggleCollapsed = (spanID) => ({
  type: TOGGLE_COLLAPSED,
  spanID,
});

const HOVER_SPAN = 'HOVER_SPAN';
const hoverSpan = (spanID) => ({
  type: HOVER_SPAN,
  spanID,
});

const UN_HOVER_SPAN = 'UN_HOVER_SPAN';
const unHoverSpan = {
  type: UN_HOVER_SPAN,
};

export const initialState = {
  hoveredSpan: null,
  collapsedSpans: [],
};

export function update(state, action) {
  switch (action.type) {
    case TOGGLE_COLLAPSED: {
      const isCollapsed = state.collapsedSpans.includes(action.spanID);
      return {
        ...state,
        collapsedSpans: isCollapsed
          ? state.collapsedSpans.filter((spanID) => (spanID !== action.spanID))
          : [...state.collapsedSpans, action.spanID],
      };
    }
    case HOVER_SPAN:
      return {
        ...state,
        hoveredSpan: action.spanID,
      };
    case UN_HOVER_SPAN:
      return {
        ...state,
        hoveredSpan: null,
      };
    default:
      return state;
  }
}

function flatten(tree, collapsed) {
  const output = [];
  function recur(node) {
    output.push(node);
    if (collapsed.includes(node.id)) {
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

function lerp(omin, omax, imin, imax) {
  return (input) => {
    return omin + (omax - omin) * (input - imin) / (imax - imin);
  }
}

class TraceView extends Component {

  handleAction = (action) => {
    this.props.handleAction(action);
  }

  render() {
    const {
      trace,
      width,
      traceState,
    } = this.props;
    const {
      collapsedSpans,
      hoveredSpan,
    } = traceState;
    const flattened = flatten(trace, collapsedSpans);
    // TODO: don't compute this every frame
    const lastTS = _.max(flattened.map((span) => (span.startTS + span.duration)));
    const scale = lerp(0, width, 0, lastTS);

    return (
      <svg width={width} height="2000" style={{ border: "1px solid black" }}>
        {flattened.map((span, idx) => {
          const isHovered = hoveredSpan === span.id;
          const isCollapsed = collapsedSpans.includes(span.id);
          const timeLabel = `${span.duration * 13}ms`;
          const isLeaf = !!span.children;
          const label = !isLeaf
            ? `${timeLabel} : ${span.name}`
            : isCollapsed
              ? `${SIDE_ARROW} ${timeLabel} : ${span.name} (${numDescendants(span)})`
              : `${DOWN_ARROW} ${timeLabel} : ${span.name}`;
          return (
            <g
              key={span.id}
              style={{ cursor: "pointer" }}
              onMouseOver={() => { this.handleAction(hoverSpan(span.id)); }}
              onMouseOut={() => { this.handleAction(unHoverSpan); }}
              onClick={() => { this.handleAction(toggleCollapsed(span.id)); }}
            >
              <rect
                fill={isHovered ? "blue" : "lightblue"}
                y={idx * HEIGHT_PLUS_SPACE - 5}
                x={scale(span.startTS)}
                height={HEIGHT}
                width={scale(span.duration)}
              />
              <text
                x={scale(span.startTS) + 5}
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
