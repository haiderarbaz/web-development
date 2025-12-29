/*
  Task 3:
    Function min(a, b)
      
    Write a function min(a,b) which returns the least of two numbers a and b.

      For instance:

      min(2, 5) == 2
      min(3, -1) == -1
      min(1, 1) == 1
*/

const readlineSync = require("readline-sync");

/*
  i. first way
*/
function min(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}

const userInput = readlineSync.question(
  "Enter 2 numbers, a & b separated by space (e.g. 10 30): "
);
const input = userInput.split(" ");
const x = Number(input[0]);
const y = Number(input[1]);

const result = min(x, y);

console.log("The min is: ", result);

/*
  ii. second way using ternary operator
*/
function minNumber(a, b) {
  return a > b ? b : a;
}

const visitorInput = readlineSync.question(
  "Enter 2 numbers, a & b separated by space (e.g. 10 30): "
);
const inputByUser = visitorInput.split(" ");
const m = Number(inputByUser[0]);
const n = Number(inputByUser[1]);

const minimum = minNumber(m, n);

console.log("The min is: ", minimum);

/*
  iii. third way using built-in math function
*/
function minNum(a, b) {
  return Math.min(a, b);
}

const Input = readlineSync.question(
  "Enter 2 numbers, a & b separated by space (e.g. 10 30): "
);
const userinput = Input.split(" ");
const j = Number(userinput[0]);
const k = Number(userinput[1]);

const finalResult = minNum(j, k);

console.log("The min is: ", finalResult);
