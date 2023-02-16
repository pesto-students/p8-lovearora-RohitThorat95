"use strict";

let arr = [1, 3, 2, 4];

let stack = [];
let ans = [];

for (let i = arr.length - 1; i >= 0; i--) {
  if (stack.length === 0) {
    ans.push(-1);
    stack.push(arr[i]);
  } else if (arr[i] < stack[stack.length - 1]) {
    ans.push(stack[stack.length - 1]);
    stack.push(arr[i]);
  } else {
    stack.pop();
    i++;
  }
}

console.log(ans.reverse());
