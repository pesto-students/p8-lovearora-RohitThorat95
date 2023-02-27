"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(2);
root.left = new Node(1);
root.right = new Node(3);

function isBST() {
  return checkBST(root, -Infinity, Infinity);
}

function checkBST(root, min, max) {
  if (root === null) {
    return true;
  }

  if (root.value < min || root.value > max) {
    return false;
  }

  return (
    checkBST(root.left, min, root.value - 1) &&
    checkBST(root.right, root.value + 1, max)
  );
}

console.log(isBST());
