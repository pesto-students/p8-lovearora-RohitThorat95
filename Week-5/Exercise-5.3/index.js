let hasDuplicate = (arr) => {
  return new Set(arr).size !== arr.length;
};

let arr = [1, 2, 3, 4, 5];
console.log(hasDuplicate(arr));
