"use strict";

const addNumbersMemoize = () => {
  let cache = {};
  return (num) => {
    if (num in cache) {
      console.log("Fetching from cache");
      return cache[num];
    } else {
      console.log("Calculating result");
      let result = num + 10;
      cache[num] = result;
      return result;
    }
  };
};

const newAdd = addNumbersMemoize();
console.log(newAdd(9)); // calculated
console.log(newAdd(10)); // calculated
console.log(newAdd(9)); // cached
