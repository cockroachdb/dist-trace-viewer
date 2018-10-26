import _ from "lodash";

let id = 0;

const exampleTrace = {
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

export default exampleTrace;
