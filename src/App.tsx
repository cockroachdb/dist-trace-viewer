import React from "react";
import TraceAndSidebar from "./TraceAndSidebar";

import "./trace";
import exampleTraceCSV from "./exampleTraceCSV";
import { parseCSV, TraceNode } from "./trace";

interface AppState {
  parseError: Error | null;
  traceText: string;
  trace: TraceNode | null;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      parseError: null,
      traceText: exampleTraceCSV,
      trace: null,
    };
  }

  handleChangeTraceText = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    this.setState({
      traceText: evt.currentTarget.value,
    });
  }

  handleSubmit = () => {
    try {
      const trace = parseCSV(this.state.traceText);
      console.log("trace:", trace);
      this.setState({
        trace,
      });
    } catch (e) {
      console.error("parse error:", e);
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
        <div style={{ paddingLeft: 50, paddingTop: 10 }}>
          <h1>Paste A Trace as CSV</h1>
          <textarea
            value={this.state.traceText}
            onChange={this.handleChangeTraceText}
            style={{ fontFamily: "monospace" }}
            cols={80}
            rows={30}
            spellCheck={false}
          />
          <br />
          <button onClick={this.handleSubmit} className="btn btn-primary">Visualize</button>
          <br />
          {this.state.parseError
            ? <pre style={{ whiteSpace: "pre-wrap", color: "red" }}>Parse error: {this.state.parseError.message}</pre>
            : null}
          <br />
          <button onClick={this.handleExample} className="btn btn-secondary">Example</button>
          <h3>How to get a trace as CSV</h3>
          <p>In the SQL prompt:</p>
          <pre>
            SET tracing = on;<br />
            ...your statement here...;<br />
            SET tracing = off;<br />
            \set display_format = csv;<br />
            SELECT * FROM crdb_internal.session_trace;
          </pre>
        </div>
      );
    }

    return (
      <TraceAndSidebar trace={this.state.trace} onClear={this.handleClearTrace} />
    );
  }
}

export default App;
