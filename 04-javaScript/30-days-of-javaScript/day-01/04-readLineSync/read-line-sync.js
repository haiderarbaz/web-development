/* 
  readline-sync,
   
    It is a Node.js package for getting synchronous user input from the command line!

  What is readline-sync?
    readline-sync is a popular npm package that allows you to:
    - Get user input synchronously (blocking) in Node.js
    - Ask questions and wait for answers
    - Create interactive command-line applications
*/

/*
  Installation:
    npm install readline-sync
      OR
    npm i readline-sync
*/

/* 
  Basic Usage:
*/
const readlineSync = require("readline-sync");

// Simple input
let userName = readlineSync.question("What is your name? ");
console.log(`Hello, ${userName}!`);

// Number input
let userAge = readlineSync.questionInt("How old are you? ");
console.log(`You are ${userAge} years old.`);

/*
  Common Methods:
/*
/*
  1. question() - Get string input:
*/
let answer = readlineSync.question("How you doing today? ");
console.log(answer);

/*
  2. questionInt() - Get integer input:
*/
let number = readlineSync.questionInt(
  "How many years of experience do you have? "
);
console.log(number);

/*
  3. questionFloat() - Get float input:
*/
let salary = readlineSync.questionFloat("How much salary you are expecting? ");
console.log(salary + " LPA");

/*
  4. keyInYN() - Yes/No question:
*/
if (readlineSync.keyInYN("If you get the offer will you join immediately?")) {
  console.log(`${userName} is available to join Immediately.`);
} else {
  console.log(`${userName} is not available to join Immediately.`);
}
/*
  5. keyInSelect() - Menu selection:
*/
let domain = ["Backend", "Frontend", "FullStack"];
let index = readlineSync.keyInSelect(domain, "Choose a domain:");
console.log(`You chose ${domain[index]}`);
