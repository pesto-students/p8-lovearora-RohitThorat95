"use strict";

let n = 6;
let edges = [
  [0, 1],
  [1, 2],
  [2, 0],
];
let source = 0;
let destination = 2;

let hasPath = (n, edges, source, destination) => {
  let adjList = {};
  let visited = [];

  for (let edge of edges) {
    adjList[edge[0]]
      ? adjList[edge[0]].push(edge[1])
      : (adjList[edge[0]] = [edge[1]]);

    adjList[edge[1]]
      ? adjList[edge[1]].push(edge[0])
      : (adjList[edge[1]] = [edge[0]]);
  }

  console.log("adjList", adjList);
  const stack = [source];
  visited[source] = true;
  while (stack.length) {
    const current = stack.pop();
    if (current === destination) {
      return true;
    }
    for (let neighbour of adjList[current]) {
      if (!visited[neighbour]) {
        stack.push(neighbour);
        visited[neighbour] = true;
      }
    }
  }

  return false;
};

let res = hasPath(n, edges, source, destination);

console.log(res);
