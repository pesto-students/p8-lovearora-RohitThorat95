"use strict";

const maxSubArray = (arr) => {
  let sum = 0;
  let maxSum = -Infinity;

  if (arr.length === 1) {
    return arr[0];
  }

  for (let eachNum of arr) {
    sum += eachNum;
    maxSum = Math.max(maxSum, sum);

    if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
};

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(arr));
