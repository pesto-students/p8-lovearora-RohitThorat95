"use strict";

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let ans = [];

let row = matrix.length;
let col = matrix[0].length;
let count = 0;
let total = row * col;

let startingRow = 0;
let startingCol = 0;
let endingRow = row - 1;
let endingCol = col - 1;

while (count < total) {
  //print starting row
  for (let i = startingCol; count < total && i <= endingCol; i++) {
    ans.push(matrix[startingRow][i]);
    count++;
  }
  startingRow++;

  //print ending col
  for (let i = startingRow; count < total && i <= endingRow; i++) {
    ans.push(matrix[i][endingCol]);
    count++;
  }
  endingCol--;

  //print ending row
  for (let i = endingCol; count < total && i >= startingCol; i--) {
    ans.push(matrix[endingRow][i]);
    count++;
  }
  endingRow--;

  //print starting col
  for (let i = endingRow; count < total && i >= startingRow; i--) {
    ans.push(matrix[i][startingCol]);
    count++;
  }
  startingCol++;
}

console.log(ans);
