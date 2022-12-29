"use strict";

function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }

  let message = `Count is ${count}`;

  function log() {
    console.log(message);
  }

  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

// The above code will log Count is 0 .
// because when createIncrement() function is called the message variable is created and the value of count is stored as 0 at that time
// After all the increment() functions are called the count is incremented but when we are logging the mesaage - the count was already stored as 0
