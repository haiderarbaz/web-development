/**
 * create a function to calculate products of numbers
 *
 */

function calculateProduct(min, max) {
  let prod = 1;
  for (let i = min; i <= max; i++) {
    prod = prod * i;
  }
  return prod;
}
console.log(calculateProduct(1, 15));
