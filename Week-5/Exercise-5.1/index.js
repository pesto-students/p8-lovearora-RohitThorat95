const doTask1 = (ms) => {
  return new Promise((resolve) => setTimeout(resolve("TASK 1 DONE"), ms));
};

const doTask2 = (ms) => {
  return new Promise((resolve) => setTimeout(resolve("TASK 2 DONE"), ms));
};

const doTask3 = (ms) => {
  return new Promise((resolve) => setTimeout(resolve("TASK 3 DONE"), ms));
};

const syncCallUsingAsyncAwait = async () => {
  let task1 = await doTask1(3000);
  console.log(task1);
  let task2 = await doTask2(1000);
  console.log(task2);
  let task3 = await doTask3(2000);
  console.log(task3);
};

function* syncCallUsingGenerators() {
  yield doTask1(3000);
  yield doTask2(1000);
  yield doTask3(2000);
}

let gen = syncCallUsingGenerators();

console.log("1", gen.next().value);
console.log("2", gen.next().value);
console.log("3", gen.next().value);
