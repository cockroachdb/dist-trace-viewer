import React, { Component } from 'react';
import { createSelector } from 'reselect';

import TraceView, { update, initialState } from "./TraceView";
import { visitNodes } from "./tree";
import './TraceAndSidebar.css';

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

  renderSidebar(span) {
    if (!span) {
      return null;
    }

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Name:</th>
              <td>{span.name}</td>
            </tr>
            <tr>
              <th>Start:</th>
              <td>{span.startTS}</td>
            </tr>
            <tr>
              <th>Duration:</th>
              <td>{span.duration}</td>
            </tr>
            <tr>
              <th>Props:</th>
              <td>{JSON.stringify(span.props)}</td>
            </tr>
          </tbody>
        </table>
        <h3>Log Messages</h3>
        <table>
          <thead>
            <tr>
              <th>Age</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {span.logMessages.map((message) => (
              <tr key={message.age}>
                <td>{message.age}</td>
                <td style={{ fontFamily: "monospace" }}>{message.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const spansByID = indexByIdSelector(this.props.trace)

    return (
      <div style={{ display: "flex" }}>
        <div>
          <TraceView
            trace={this.props.trace}
            traceState={this.state.traceState}
            width={800}
            handleAction={(action) => this.onAction(action)}
          />
        </div>
        <div>
          {this.renderSidebar(spansByID[this.state.traceState.hoveredSpan])}
        </div>
      </div>
    );
  }
}

export default TraceAndSidebar;
