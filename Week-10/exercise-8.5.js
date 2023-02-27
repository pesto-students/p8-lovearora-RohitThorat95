"use strict";

let n = 3;
let trust = [
  [1, 3],
  [2, 3],
];

let townJudge = (n, trust) => {
  const trusted = new Array(n + 1).fill(0);

  for (let [i, j] of trust) {
    trusted[i]--;
    trusted[j]++;
  }

  for (let i = 1; i < trusted.length; i++) {
    if (n - 1 === trusted[i]) {
      return i;
    }
  }
  return -1;
};

let res = townJudge(n, trust);
console.log("res", res);
