"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.left.left = new Node(null);
root.left.right = new Node(null);
root.right.left = new Node(15);
root.right.right = new Node(7);

const queue = [];
queue.push(root);

while (queue.length) {
  let curr = queue.shift();
  if (curr.value) {
    console.log(curr.value);
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }
}
