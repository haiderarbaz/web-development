/**
 *
 * create a function to calculate sum of numbers by taking input from users
 */

const readLineSync = require("readline-sync");

const min = Number(readLineSync.question("Enter a min number: "));
const max = Number(readLineSync.question("Enter a max number: "));

function calculateSum(min, max) {
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(calculateSum(min, max));
