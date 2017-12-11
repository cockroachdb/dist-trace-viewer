import React, { Component } from 'react';
import TraceView, { update, initialState } from "./TraceView";
import _ from "lodash";
import './App.css';
import { visitNodes } from './tree';

let id = 0;

const TRACE = {
  id: id++,
  name: "query",
  startTS: 0,
  duration: 15,
  props: {
    nodeID: 1,
    rowsProduced: 1000,
    query: "select * from sales join customers"
  },
  children: [
    {
      id: id++,
      name: "tablereader",
      startTS: 1,
      duration: 10,
      props: {
        table: "sales",
        nodeID: 1,
        rowsProduced: 10,
      },
      children: _.range(10).map((idx) => ({
        id: id++,
        name: "batch",
        startTS: 1.1 + idx,
        duration: 0.1,
        props: {
          nodeID: 1,
          rowsProduced: 1,
        },
      })),
    },
    {
      id: id++,
      name: "tablereader",
      startTS: 1.5,
      duration: 10,
      props: {
        table: "sales",
        nodeID: 2,
        rowsProduced: 10,
      },
      children: _.range(10).map((idx) => ({
        id: id++,
        name: "batch",
        startTS: 1.6 + idx,
        duration: 0.1,
        props: {
          nodeID: 2,
          rowsProduced: 1,
        },
      }))
    },
    {
      id: id++,
      name: "tablereader",
      startTS: 1.6,
      duration: 10,
      props: {
        table: "sales",
        nodeID: 3,
        rowsProduced: 10,
      },
      children: _.range(10).map((idx) => ({
        id: id++,
        name: "batch",
        startTS: 1.7 + idx,
        duration: 0.1,
        props: {
          nodeID: 3,
          rowsProduced: 1,
        },
      })),
    },
    {
      id: id++,
      name: "joiner",
      startTS: 2,
      duration: 11,
      props: {
        nodeID: 1,
        rowsProduced: 1000,
      },
    },
  ],
};

function indexById(trace) {
  const output = {};
  visitNodes(trace, (node) => {
    output[node.id] = node;
  });
  return output;
}

const SPANS_BY_ID = indexById(TRACE);

function withoutChildren(span) {
  const output = {...span};
  if (output.children) {
    delete output.children;
  }
  return output;
}

class App extends Component {

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
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <TraceView
                trace={TRACE}
                traceState={this.state.traceState}
                width={800}
                handleAction={(action) => this.onAction(action)}
              />
            </td>
            <td style={{ verticalAlign: "top" }}>
              <pre>
                {JSON.stringify(
                  withoutChildren(SPANS_BY_ID[this.state.traceState.hoveredSpan]),
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

export default App;
