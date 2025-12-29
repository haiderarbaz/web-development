/* 
  How to pass n no. of arguments in function and compute them?
*/

/* First Way using arguments object (old way) */
function sum() {
  if (arguments.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}

const result = sum(10, 20, 30);
console.log(`The sum of n no. of arguments is: ${result}`);

/* Second Way using Spread operator (ES6+ features) */
function sumOfNum(...numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

let answer = sumOfNum(87, 65, 43, 12);
console.log(`The sum of n numbers is: ${answer}`);
