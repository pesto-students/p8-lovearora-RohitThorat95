"use strict";

var maxProfit = function (prices) {
  let maxprofit = 0;
  let left = 0;
  let right = 1;

  while (right < prices.length) {
    let dayProfit = prices[right] - prices[left];

    if (dayProfit < 0) {
      left = right;
    }

    if (dayProfit > maxprofit) {
      maxprofit = dayProfit;
    }

    right++;
  }

  return maxprofit;
};

console.log(maxProfit([1, 2, 5, 3, 6, 4]));
