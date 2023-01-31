"use strict";

const LinkedList = require("./exercise-7.1");

class RotateLinkedList extends LinkedList {
  constructor(head, size) {
    super(head, size);
  }

  rotateList(value) {
    if (value === 0 || value === this.size) {
      console.log("Cannot Rotate");
      return;
    }
    let previousHead = this.head;
    let previous = this.head;
    let current = this.head;

    let i = 1;
    while (current && i <= this.size) {
      if (i == value + 1) {
        this.head = current;
        previous.next = null;
      } else {
        previous = current;
        current = current.next;
      }
      i++;
    }
    current.next = previousHead;
    return this;
  }
}

let newList = new RotateLinkedList(null, 0);

newList.append(2);
newList.append(4);
newList.append(7);
newList.append(8);
newList.append(9);

console.log("Before Rotate");
newList.print();

newList.rotateList(5);
console.log("After Rotate");
newList.print();
