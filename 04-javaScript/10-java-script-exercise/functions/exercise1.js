/**
 * create a function to calculate sum of numbers
 */

function calculateSum(min, max) {
  let sum = 1;
  for (let i = min; i <= max; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(calculateSum(1, 20));
