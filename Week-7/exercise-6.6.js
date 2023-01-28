"use strict";

const getClosestSum = (arr, target) => {
  let closestSum = Infinity;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let sum = arr[i] + arr[j] + arr[k];
        let diff = Math.abs(target - closestSum);

        if (diff > Math.abs(sum)) {
          closestSum = sum;
        }
      }
    }
  }

  return closestSum;
};

let arr = [-1, 2, 1, -4];
let target = 1;

console.log(getClosestSum(arr, target));
