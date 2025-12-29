/*
  Task 1: 
    Hello User

    Requirements:
      - Ask for the user's name
      - Greet them with "Hello, [name]!"
*/
const readlineSync = require("readline-sync");

const userName = readlineSync.question("Enter your name: ");
console.log(`Hello ${userName}!`);
