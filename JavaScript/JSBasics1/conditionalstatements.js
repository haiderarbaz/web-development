//Control Statements or Conditional Statements:

//if-else

//Syntax:
// if (condition) (use single time)
// {
//   //code--------
// }
// elseif () (we can use this multiple time)
// {
//   //code--------
// }
// else (use single time)
// {
//   code--------
// }

//Eg:

// if (true) {
//   console.log("Hey ! I'm arbaz and i am from Siwan, Bihar");
// }
// //When condition is true then it will get executed.

// if (false) {
//   console.log("Hey ! I'm arbaz and i am from Siwan, Bihar");
// }
// //When condition is true then it will not get executed.

// const isSignUp = true;
// if (isSignUp) {
//   console.log("Welcome To Homepage !");
// }

// const userInputAge = require("readline-sync");
// const userAge1 = userInputAge.question("May, i know your Age? ");
// {
//   if (userAge1 > 15) {
//     console.log("You're an adult !");
//   } else console.log("You're not an adult.");
// }

// const readlinesync = require("readline-sync");
// const illegibleAge = readlinesync.question("Please type your age. ");
// {
//   if (illegibleAge >= 18) console.log("You're eligible to Vote !");
//   else console.log("Youy're not eligible.");
// }

// const readLineSync = require("readline-sync");
// const number = readLineSync.question("Enter a number: ");
// if (number % 3 === 0) {
//   console.log("Fizzz");
// } else if (number % 5 === 0) {
//   console.log("Buzzz");
// }

// const readLineSync0 = require("readline-sync");
// const num = readLineSync0.question("Enter a number: ");
// if (num % 3 === 0 && num % 5 === 0) {
//   console.log("Fizzz");
// } else if (num % 3 === 0 || num % 5 === 0) {
//   console.log("Buzzz");
// }

// const readLineSync1 = require("readline-sync");
// const num1 = readLineSync1.question("Enter a number: ");
// if (num1 % 3 === 0 && num1 % 5 === 0) {
//   console.log("Fizzz");
// }
// if (num1 % 3 === 0 || num1 % 5 === 0) {
//   console.log("Buzzz");
// }

// const readLineSync2 = require("readline-sync");
// const num2 = readLineSync2.question("Enter a number: ");
// if (num2 % 3 === 0 && num2 % 5 === 0) console.log("Fizzz");
// else if (num2 % 3 === 0 || num2 % 5 === 0) console.log("Buzzz");
// else if (num2 % 7 === 0) console.log("BuzzzBuzzz");
// else console.log("Number is not divisible by 3,5 and 7");

// const readLineSync3 = require("readline-sync");
// const num3 = readLineSync3.question("Enter a number: ");
// if (num3 % 3 === 0 && num3 % 5 === 0) console.log("Fizzz");
// if (num3 % 3 === 0 || num3 % 5 === 0) console.log("Buzzz");
// if (num3 % 7 === 0) console.log("BuzzzBuzzz");

// let marks = 98;
// if (marks >= 90) {
//   console.log("A");
// } else if (marks >= 80) {
//   console.log("B");
// } else if (marks >= 70) {
//   console.log("C");
// } else if (marks >= 60) {
//   console.log("D");
// } else {
//   console.log("E");
// }

//Nested Control Statements or Nested Conditional Statements:

const readLineSync4 = require("readline-sync");
const num4 = Number(readLineSync4.question("Enter a Number: "));
if (num4 % 2 === 0) {
  console.log(`${num4} is an Even Number.`);
  if (num4 % 4 === 0) {
    console.log(`${num4} is divisible by 4`);
  } else {
    console.log(`${num4} is not divisible by 4`);
  }
} else {
  console.log(`${num4} is an Odd Number.`);
  if (num4 % 5 === 0) {
    console.log(`${num4} is divisible by 5.`);
  } else {
    console.log(`${num4} is not divisible by 5`);
  }
}
