import _ from "lodash";
import React, { Component } from "react";
import { visitNodes } from "./tree";

const HEIGHT = 30;
const HEIGHT_PLUS_SPACE = HEIGHT + 10;

function flatten(tree) {
  const output = [];
  visitNodes(tree, (n) => {
    output.push(n);
  });
  return output;
}

function lerp(omin, omax, imin, imax) {
  return (input) => {
    return omin + (omax - omin) * (input - imin) / (imax - imin);
  }
}

class TraceView extends Component {

  render() {
    const {
      trace,
      width,
    } = this.props;
    const flattened = flatten(trace);
    // TODO: don't compute this every frame
    const lastTS = _.max(flattened.map((span) => (span.startTS + span.duration)));
    const scale = lerp(0, width, 0, lastTS);

    console.log(flattened.map((span) => ([
      scale(span.startTS),
      scale(span.startTS + span.duration),
    ])));

    return (
      <svg width={width} height="2000" style={{ border: "1px solid black" }}>
        {flattened.map((span, idx) => (
          <g key={span.id}>
            <rect
              fill="blue"
              y={idx * HEIGHT_PLUS_SPACE - 5}
              x={scale(span.startTS)}
              height={HEIGHT}
              width={scale(span.duration)}
            />
            <text
              x={scale(span.startTS) + 10}
              y={idx * HEIGHT_PLUS_SPACE + HEIGHT/2}
              fill="white"
            >
              {span.name}
            </text>
          </g>
        ))}
      </svg>
    );
  }

}

export default TraceView;
