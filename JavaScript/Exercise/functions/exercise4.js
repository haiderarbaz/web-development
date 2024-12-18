/**
 *
 * create a function to calculate product of numbers by taking input from users
 */

const readLineSync = require("readline-sync");

const min = Number(readLineSync.question("Enter a min value: "));
const max = Number(readLineSync.question("Enter a max value: "));

function calculateProduct(min, max) {
  let prod = 1;
  for (let i = min; i <= max; i++) {
    prod = prod * i;
  }
  return prod;
}
console.log(calculateProduct(min, max));
