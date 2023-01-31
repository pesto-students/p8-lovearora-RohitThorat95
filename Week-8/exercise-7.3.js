"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.flag = 0;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Empty List");
    } else {
      let current = this.head;
      let listValues = "";
      while (current) {
        listValues += `${current.value} `;
        current = current.next;
      }
      console.log(listValues);
    }
  }

  detectLoop() {
    let currHead = this.head;
    //create false loop condition
    // currHead.next.next.next = currHead;
    while (currHead.next) {
      if (currHead.flag === 1) {
        return true;
      }

      currHead.flag = 1;
      currHead = currHead.next;
    }
    return false;
  }
}

let newList = new LinkedList();

newList.append(1);
newList.append(2);
newList.append(3);
newList.append(4);
newList.append(5);
newList.print();
console.log(newList.detectLoop());
