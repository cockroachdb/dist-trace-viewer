import React, { Component } from 'react';
import { createSelector } from 'reselect';

import TraceView, { update, initialState } from "./TraceView";
import { visitNodes } from "./tree";
import './TraceAndSidebar.css';

function withoutChildren(span) {
  const output = {...span};
  if (output.children) {
    delete output.children;
  }
  return output;
}

function indexById(trace) {
  const output = {};
  visitNodes(trace, (node) => {
    output[node.id] = node;
  });
  return output;
}

const indexByIdSelector = createSelector(t => t, indexById);

class TraceAndSidebar extends Component {

  constructor() {
    super();
    this.state = {
      traceState: initialState,
    };
  }

  onAction = (action) => {
    this.setState({
      traceState: update(this.state.traceState, action),
    });
  }

  render() {
    const spansByID = indexByIdSelector(this.props.trace)

    return (
      <table>
        <tbody>
          <tr>
            <td>
              <TraceView
                trace={this.props.trace}
                traceState={this.state.traceState}
                width={800}
                handleAction={(action) => this.onAction(action)}
              />
            </td>
            <td style={{ verticalAlign: "top" }}>
              <pre>
                {JSON.stringify(
                  withoutChildren(spansByID[this.state.traceState.hoveredSpan]),
                  null, 2
                )}
              </pre>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TraceAndSidebar;
