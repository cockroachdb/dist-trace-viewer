import React, { Component } from 'react';
import { createSelector } from 'reselect';

import TraceView, { update, initialState, TraceViewState, Action } from "./TraceView";
import { visitNodes } from "./tree";
import { TraceNode } from './trace';
import { formatNanos } from "./format";

function indexById(trace: TraceNode) {
  const output: { [id: string]: TraceNode } = {};
  visitNodes(trace, (node: TraceNode) => {
    output[node.spanID] = node;
  });
  return output;
}

const indexByIdSelector = createSelector((t: TraceNode) => t, indexById);

interface TraceAndSidebarProps {
  trace: TraceNode;
}

interface TraceAndSidebarState {
  traceState: TraceViewState;
}

class TraceAndSidebar extends Component<TraceAndSidebarProps, TraceAndSidebarState> {

  constructor(props: TraceAndSidebarProps) {
    super(props);
    this.state = {
      traceState: initialState,
    };
  }

  onAction = (action: Action) => {
    this.setState({
      traceState: update(this.state.traceState, action),
    });
  }

  renderSidebar(span: TraceNode) {
    if (!span) {
      return null;
    }

    return (
      <div style={{ padding: 10 }}>
        <table>
          <tbody style={{ textAlign: "left" }}>
            <tr>
              <th>Operation:</th>
              <td>{span.operation}</td>
            </tr>
            <tr>
              <th>Start:</th>
              <td>{span.timestamp.toString()}</td>
            </tr>
            <tr>
              <th>Duration:</th>
              <td>{formatNanos(span.duration)}</td>
            </tr>
          </tbody>
        </table>
        <h3>Log Messages</h3>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Age</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {span.messages.map((message) => (
              <tr key={message.age}>
                <td>{formatNanos(message.age)}</td>
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
          {this.renderSidebar(spansByID[this.state.traceState.hoveredSpanID])}
        </div>
      </div>
    );
  }
}

export default TraceAndSidebar;
