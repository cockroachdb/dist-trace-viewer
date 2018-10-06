import React from "react";
import TraceAndSidebar from "./TraceAndSidebar";

import "./csvToTrace";
import exampleTraceCSV from "./exampleTraceCSV";
import { parseTrace } from "./csvToTrace";

// function parseTrace(text) {
//   return JSON.parse(text);
// }

// function serializeTrace(trace) {
//   return JSON.stringify(trace, null, 2);
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      parseError: null,
      traceText: exampleTraceCSV,
      trace: null,
    };
  }

  handleChangeTraceText = (evt) => {
    this.setState({
      traceText: evt.target.value,
    });
  }

  handleSubmit = () => {
    try {
      const trace = parseTrace(this.state.traceText);
      this.setState({
        trace,
      });
    } catch (e) {
      this.setState({
        parseError: e,
      });
    }
  }

  handleExample = () => {
    this.setState({
      traceText: exampleTraceCSV,
    });
  }

  handleClearTrace = () => {
    this.setState({
      trace: null,
    });
  }

  render() {
    if (this.state.trace === null) {
      return (
        <div>
          <textarea
            value={this.state.traceText}
            onChange={this.handleChangeTraceText}
            style={{ fontFamily: "monospace" }}
            cols="80"
            rows="30"
          />
          <br />
          <button onClick={this.handleSubmit}>Visualize</button>
          <br />
          {this.state.parseError ? <pre>Parse error: {this.state.parseError}</pre> : null}
          <br />
          <button onClick={this.handleExample}>Example</button>
        </div>
      )
    }

    return (
      <div>
        <button onClick={this.handleClearTrace}>Clear Trace</button>
        <TraceAndSidebar trace={this.state.trace} />
      </div>
    );
  }
}

export default App;
