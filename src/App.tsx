import React from "react";
import TraceAndSidebar from "./TraceAndSidebar";

import "./trace";
import { parseCSV, TraceNode } from "./trace";

import { decode } from "./planView/decode";
import { QueryPlan } from "./planView/model";
import examples from "./examples";

interface AppState {
  queryText: string;
  // Trace stuff.
  traceText: string;
  traceParseError: Error | null;
  trace: TraceNode | null;
  // Plan stuff.
  planURLText: string;
  planParseError: Error | null;
  queryPlan: QueryPlan | null;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      queryText: examples[0].query,
      traceText: examples[0].trace,
      traceParseError: null,
      trace: null,
      planURLText: examples[0].explain,
      planParseError: null,
      queryPlan: null,
    };
  }

  handleChangeTraceText = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    this.setState({
      traceText: evt.currentTarget.value,
    });
  }

  handleChangePlanURLText = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    this.setState({
      planURLText: evt.currentTarget.value,
    });
  }

  handleChangeQueryText = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    this.setState({
      queryText: evt.currentTarget.value,
    });
  }

  handleSubmit = () => {
    // Parse trace.
    try {
      const trace = parseCSV(this.state.traceText);
      console.log("trace:", trace);
      this.setState({
        trace,
      });
    } catch (e) {
      console.error("parse error in trace:", e);
      this.setState({
        traceParseError: e,
      });
    }
    // Parse URL.
    try {
      const url = new URL(this.state.planURLText);
      const plan = decode(url.hash.slice(1));
      console.log(plan);
      this.setState({
        queryPlan: plan,
      })
    } catch (e) {
      console.error("parse error in plan:", e);
      this.setState({
        planParseError: e,
      });
    }
  }

  handleExample = () => {
    this.setState({
      queryText: examples[0].query,
      traceText: examples[0].trace,
      planURLText: examples[0].explain,
    });
  }

  handleClearTrace = () => {
    this.setState({
      trace: null,
    });
  }

  render() {
    if (this.state.trace === null || this.state.queryPlan === null) {
      return (
        <div style={{ paddingLeft: 50, paddingTop: 10 }}>
          <h1>Paste A Trace as CSV</h1>
          <textarea
            value={this.state.queryText}
            style={{ fontFamily: "monospace", whiteSpace: "pre" }}
            cols={80}
            onChange={this.handleChangeQueryText}
          />
          <br />
          <textarea
            value={this.state.traceText}
            onChange={this.handleChangeTraceText}
            style={{ fontFamily: "monospace", whiteSpace: "pre" }}
            cols={80}
            rows={30}
            spellCheck={false}
          />
          <br />
          <textarea
            value={this.state.planURLText}
            onChange={this.handleChangePlanURLText}
            style={{ fontFamily: "monospace" }}
            cols={80}
            rows={7}
          />
          <br />
          <button onClick={this.handleSubmit} role="submit" className="btn btn-primary">Visualize</button>
          <br />
          {this.state.traceParseError
            ? <pre style={{ whiteSpace: "pre-wrap", color: "red" }}>
                Trace parse error: {this.state.traceParseError.message}
              </pre>
            : null}
          {this.state.planParseError
            ? <pre style={{ whiteSpace: "pre-wrap", color: "red" }}>
                Plan parse error: {this.state.planParseError.message}
              </pre>
            : null}
          <br />
          <button onClick={this.handleExample} className="btn btn-secondary">Example</button>
          <h3>How to get a trace as CSV</h3>
          <p>In the SQL prompt:</p>
          <pre>
            SET tracing = on;<br />
            ...your statement here...;<br />
            SET tracing = off;<br />
            \set display_format csv;<br />
            SELECT * FROM crdb_internal.session_trace;
          </pre>
        </div>
      );
    }

    return (
      <TraceAndSidebar
        query={this.state.queryText}
        trace={this.state.trace}
        plan={this.state.queryPlan}
        onClear={this.handleClearTrace}
      />
    );
  }
}

export default App;
