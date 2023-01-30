"use strict";

const pairSum = (arr, value) => {
  //sort the array
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = 1;

  while (i < arr.length && j < arr.length) {
    if (i != j && arr[j] - arr[i] === value) {
      return 1;
    } else if (arr[j] - arr[i] < value) {
      j++;
    } else {
      i++;
    }
  }

  return 0;
};

let arr = [5, 10, 3, 2, 50, 80];
let value = 78;

console.log(pairSum(arr, value));
