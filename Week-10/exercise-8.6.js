"use strict";

let graph = [[1, 2], [3], [3], []];

let pathFromSourceToTarget = (graph) => {
  const n = graph.length - 1;
  const result = [];
  const path = [];

  let dfs = (position) => {
    path.push(position);

    if (position === n) {
      result.push([...path]);
    }

    const nextnodes = graph[position];
    for (let i = 0; i < nextnodes.length; i++) {
      dfs(nextnodes[i]);
    }

    path.pop();
  };

  dfs(0);
  return result;
};

let res = pathFromSourceToTarget(graph);
console.log("res", res);
