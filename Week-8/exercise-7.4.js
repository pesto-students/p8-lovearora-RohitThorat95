"use strict";

const isBalanced = (input) => {
  let stack = [];
  for (let eachBracket of input) {
    if (eachBracket == "(" || eachBracket == "[" || eachBracket == "{") {
      stack.push(eachBracket);
      continue;
    }

    if (!stack.length) {
      return false;
    }

    if (eachBracket === ")") {
      let lastItem = stack.pop();
      if (lastItem == "{" || lastItem == "[") {
        return false;
      }
    } else if (eachBracket === "}") {
      let lastItem = stack.pop();
      if (lastItem == "(" || lastItem == "[") {
        return false;
      }
    } else if (eachBracket === "]") {
      let lastItem = stack.pop();
      if (lastItem == "(" || lastItem == "{") {
        return false;
      }
    }
  }
  return true;
};

let input = "{([])}";
console.log("isBalanced", isBalanced(input));
