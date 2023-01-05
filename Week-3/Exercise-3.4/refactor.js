function createStack() {
  const items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop(item) {
      return items.pop();
    },
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
stack.items; // undefined
