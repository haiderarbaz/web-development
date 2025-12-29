/* 
  Task 2:
    Simple Calculator

    Requirements:
    - Ask for two numbers
    - Ask which operation (+, -, \*, /)
    - Display the result
*/
const readlineSync = require("readline-sync");
const num1 = readlineSync.questionInt("Enter the first number: ");
const num2 = readlineSync.questionInt("Enter the second number: ");

const operators = ["+", "-", "*", "/"];
let operatorsIndex = readlineSync.keyInSelect(
  operators,
  "Choose a operators: "
);
let selectedOperator = operators[operatorsIndex];
console.log(`You choose the ${selectedOperator} opeartor`);
if (selectedOperator == "+") {
  console.log(`Sum of ${num1} and ${num2} is: `, num1 + num2);
} else if (selectedOperator == "-") {
  console.log(`Subtraction of ${num1} and ${num2} is: `, num1 - num2);
} else if (selectedOperator == "*") {
  console.log(`Multiplication of ${num1} and ${num2} is: `, num1 * num2);
} else if (selectedOperator == "/") {
  console.log(`Division of ${num1} and ${num2} is: `, num1 / num2);
} else {
  console.log("Invalid Selection");
}
