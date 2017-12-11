import React, { Component } from 'react';
import TraceView from "./TraceView";
import _ from "lodash";
import './App.css';

let id = 0;

const TRACE = {
  id: id++,
  name: "query",
  startTS: 0,
  duration: 15,
  children: [
    {
      id: id++,
      name: "tablereader",
      startTS: 1,
      duration: 10,
      children: _.range(10).map((idx) => ({
        id: id++,
        name: "batch",
        startTS: 1.1 + idx,
        duration: 0.1,
      })),
    },
    {
      id: id++,
      name: "tablereader",
      startTS: 1.5,
      duration: 10,
      children: _.range(10).map((idx) => ({
        id: id++,
        name: "batch",
        startTS: 1.6 + idx,
        duration: 0.1,
      }))
    },
    {
      id: id++,
      name: "tablereader",
      startTS: 1.6,
      duration: 10,
      children: _.range(10).map((idx) => ({
        id: id++,
        name: "batch",
        startTS: 1.7 + idx,
        duration: 0.1,
      })),
    },
    {
      id: id++,
      name: "joiner",
      startTS: 2,
      duration: 11,
    },
  ],
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <TraceView trace={TRACE} width={800} />
      </div>
    );
  }
}

export default App;
