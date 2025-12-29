/*
  Task 4:
    
    Function pow(x,n)

      Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

        pow(3, 2) = 3 * 3 = 9
        pow(3, 3) = 3 * 3 * 3 = 27
        pow(1, 100) = 1 * 1 * ...* 1 = 1
        Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

      P.S. In this task the function should support only natural values of n: integers up from 1.
*/

/*
  i
*/
const readlineSync = require("readline-sync");

function pow(a, b) {
  return Math.pow(a, b);
}

const userInput = readlineSync.question(
  "Enter two number separated by space (e.g. 2 4): "
);

const input = userInput.split(" ");

const x = Number(input[0]);
const y = Number(input[1]);

const result = pow(x, y);
console.log(`Power of x & y is: ${result}`);

/*
  ii.
*/
function power(a, b) {
  let result = b;
  for (let i = 1; i < b; i++) {
    result *= a;
  }
  return result;
}
const userinput = readlineSync.question(
  "Enter two number separated by space (e.g. 2 4): "
);

const Input = userinput.split(" ");

const m = Number(Input[0]);
const n = Number(Input[1]);

if (n < 1) {
  console.log(`Power ${n} is not supported, use a positive integer`);
} else {
  console.log(`Power of m, n is: ${power(m, n)}`);
}
