"use strict";

let arr = [0, 2, 1, 2, 0];
let zeroes = 0;
let ones = 0;
let twos = 0;
let index = 0;

for (let eachNum of arr) {
  if (eachNum === 0) {
    zeroes++;
  }
  if (eachNum === 1) {
    ones++;
  }
  if (eachNum === 2) {
    twos++;
  }
}

while (zeroes > 0) {
  arr[index] = 0;
  index++;
  zeroes--;
}

while (ones > 0) {
  arr[index] = 1;
  index++;
  ones--;
}

while (twos > 0) {
  arr[index] = 2;
  index++;
  twos--;
}

console.log("Sorted array", arr);
