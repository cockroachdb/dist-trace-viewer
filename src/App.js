import React from "react";
import TraceAndSidebar from "./TraceAndSidebar";
import exampleTrace from "./exampleTrace";

class App extends React.Component {
  render() {
    return <TraceAndSidebar trace={exampleTrace} />
  }
}

export default App;
