import React, { Component } from 'react';
import { createSelector } from 'reselect';

import TraceView, {
  HOVER_SPAN,
  HOVER_PROCESSOR,
  update,
  initialState,
  TraceViewState,
  Action,
} from "./TraceView";
import { visitNodes } from "./tree";
import { TraceNode, processorIDForSpanID, getSpanIDForProcessorID } from './trace';
import { formatNanos } from "./format";
import { QueryPlan } from './planView/model';
import { QueryPlanGraph } from './planView/QueryPlanGraph';

function indexById(trace: TraceNode) {
  const output: { [id: string]: TraceNode } = {};
  visitNodes(trace, (node: TraceNode) => {
    output[node.spanID] = node;
  });
  return output;
}

const indexByIdSelector = createSelector((t: TraceNode) => t, indexById);

interface TraceAndSidebarProps {
  query: string,
  explain: string,
  trace: TraceNode;
  plan: QueryPlan;
  onClear: () => void;
}

interface TraceAndSidebarState {
  traceState: TraceViewState;
  hoveredProcessorID: number | null;
}

class TraceAndSidebar extends Component<TraceAndSidebarProps, TraceAndSidebarState> {

  constructor(props: TraceAndSidebarProps) {
    super(props);
    this.state = {
      traceState: initialState,
      hoveredProcessorID: null,
    };
  }

  onAction = (action: Action) => {
    const traceState = update(this.state.traceState, action);
    switch (action.type) {
      case HOVER_SPAN: {
        const processorID = processorIDForSpanID(this.props.trace, action.spanID);
        if (processorID !== null) {
          this.setState({
            hoveredProcessorID: processorID,
          });
        }
        break;
      }
      case HOVER_PROCESSOR:
        const spanID = getSpanIDForProcessorID(this.props.trace, action.processorID);
        traceState.hoveredSpanID = spanID;
        break;
    }
    this.setState({
      traceState,
    });
  }

  handleHoverProcessor = (processorID: number) => {
    this.onAction({
      type: HOVER_PROCESSOR,
      processorID,
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
            <tr>
              <th>Tag:</th>
              <td>{span.tag}</td>
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
                <td style={{ fontFamily: "monospace", whiteSpace: "pre" }}>{message.message}</td>
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
      <Layout
        title={
          <React.Fragment>
            <span style={{ paddingRight: 5 }}>
              <strong>Query:</strong> <code>{this.props.query}</code>
            </span>
            <button onClick={this.props.onClear} className="btn btn-secondary btn-sm">Clear</button>
          </React.Fragment>
        }
        left={
          <React.Fragment>
            <pre style={{ borderBottom: "1px solid lightgrey", margin: 5 }}>
              {this.props.explain}
            </pre>
            <QueryPlanGraph
              plan={this.props.plan}
              hoveredProcessorID={this.state.hoveredProcessorID}
              onHoverProcessor={this.handleHoverProcessor}
            />
          </React.Fragment>
        }
        middle={
          <TraceView
            trace={this.props.trace}
            traceState={this.state.traceState}
            width={800}
            handleAction={(action) => this.onAction(action)}
          />
        }
        right={
          this.renderSidebar(spansByID[this.state.traceState.hoveredSpanID])
        }
      />
    );
  }
}

function Layout(props: {
  title: React.ReactNode,
  left: React.ReactNode,
  middle: React.ReactNode,
  right: React.ReactNode,
}): JSX.Element {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "30% auto 30%",
      gridTemplateRows: "40px auto",
      height: "100vh",
    }}>
      <div style={{
        gridRow: 1,
        gridColumnStart: 1,
        gridColumnEnd: 4,
        padding: 5,
        backgroundColor: "#dddddd",
        borderBottom: "1px solid #c0c0c0",
      }}>
        {props.title}
      </div>
      <div style={{
        gridRow: 2,
        gridColumn: 1,
        overflow: "scroll",
        borderRight: "1px solid lightgrey",
        backgroundColor: "#f0f0f0",
      }}>
        {props.left}
      </div>
      <div style={{
        gridRow: 2,
        gridColumn: 2,
        overflow: "scroll",
      }}>
        {props.middle}
      </div>
      <div style={{
        gridRow: 2,
        gridColumn: 3,
        borderLeft: "solid 1px lightgrey",
        backgroundColor: "#f0f0f0",
        overflow: "scroll",
      }}>
        {props.right}
      </div>
    </div>
  );
}

export default TraceAndSidebar;
