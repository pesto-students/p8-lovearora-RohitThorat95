"use strict";

class QueueUsingStacks {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enqueue(value) {
    this.s1.push(value);
  }

  dequeue() {
    if (!this.s2.length) {
      if (!this.s1.length) {
        console.log("Empty Queue");
        return;
      }

      while (this.s1.length) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.pop();
  }
}

const queue = new QueueUsingStacks();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue.dequeue());
console.log(queue.dequeue());
