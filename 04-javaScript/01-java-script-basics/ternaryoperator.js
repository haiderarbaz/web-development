/*
    Ternary operator: condition ? yes : no;
*/

//Ternary Operator or Conditional Operator
let age = 17;
let status = age >= 18 ? "Yes Vote" : "No Vote";
console.log(status);

//Ternary operators offer a compact way to write conditional expressions in JavaScript. They can be used as a shorthand for if-else statements, making your code more concise and readable.

//A ternary operator is a one-liner shorthand for if-else statements.

//It uses the syntax:
//condition ? expressionIfTrue : expressionIfFalse;

// Advantages of Ternary Operators
// Conciseness: Ternary operators make the code shorter.
// Readability: For simple conditions, ternary operators can make the code easier to read.
// Single-line expressions: Ternary operators are useful for inline assignments.

// Drawbacks of Ternary Operators
// Complexity: For multiple or nested conditions, ternary operators can become hard to read and maintain.
// Debugging: Debugging nested ternary operators can be more challenging compared to if-else statements.

//Example 1:

//Convert the below code in ternary operator
let totalMarks = 60;

if (totalMarks < 40) {
  console.log("You need to work hard.");
} else {
  console.log("You cleared the exam.");
}

//Taking input from users:
const readLineSync = require("readline-sync");
const totalMarksScored = readLineSync.question(
  "Please enter the marks you Scored: "
);

//Converting to a Ternary Operator
//const totalMarksScored = 80;

totalMarksScored < 40
  ? console.log("You need to work hard")
  : console.log("You cleared the exam, Great!");

//or
console.log(
  totalMarksScored < 40
    ? "You need to work hard"
    : "You cleared the exam, Great!"
);

//optimize the above code
//Assigning Result to a Variable
const result =
  totalMarksScored < 40
    ? "You need to work hard"
    : "Great, You cleared the exam";
console.log(result);

//Example 2:
const readLineSync0 = require("readline-sync");
const userName = readLineSync0.question("Enter your Name: ");
const totalMarksObtained = readLineSync0.question("Enter your marks: ");

totalMarksObtained > 60
  ? console.log(
      `Cogratulations ${userName}, You're Qualified. You obtained ${totalMarksObtained} out of 100.`
    )
  : console.log(
      `Sorry ${userName}, You are not qualified and you need to work hard. You obtained ${totalMarksObtained} out of 100.`
    );

//Or
console.log(
  totalMarksObtained > 60
    ? `Cogratulations ${userName}, You're Qualified. You obtained ${totalMarksObtained} out of 100.`
    : `Sorry ${userName}, You are not qualified and you need to work hard. You obtained ${totalMarksObtained} out of 100.`
);

//optimize the above code
//Assigning Result to a Variable
const finalResult =
  totalMarksObtained > 60
    ? `Cogratulations ${userName}, You're Qualified. You obtained ${totalMarksObtained} out of 100.`
    : `Sorry ${userName}, You are not qualified and you need to work hard. You obtained ${totalMarksObtained} out of 100.`;
console.log(finalResult);

//Example 3:

const readLineSync1 = require("readline-sync");

const firstString = readLineSync1.question("Enter a string: ");
const secondString = readLineSync1.question("Enter a string: ");
const thirdString = readLineSync1.question("Enter a string: ");

const firstStringLength = firstString.length;
const secondStringLength = secondString.length;
const thirdStringLength = thirdString.length;

const smallestString =
  firstStringLength < secondStringLength &&
  firstStringLength < thirdStringLength
    ? firstString
    : secondStringLength < firstStringLength &&
      secondStringLength < thirdStringLength
    ? secondString
    : thirdStringLength < firstStringLength &&
      thirdStringLength < secondStringLength
    ? thirdString
    : "Two or more string have the same length.";
console.log(`The smallest string is ${smallestString}`);

//Nested Ternary Operators
//You can also use nested ternary operators, but be cautious as it can make the code harder to read:

let totalMarks0 = 60;

if (totalMarks0 < 40) {
  console.log("You need to work hard.");
} else if (totalMarks0 < 60) {
  console.log("B grade");
} else if (totalMarks0 < 75) {
  console.log("A grade");
} else if (totalMarks0 < 85) {
  console.log("A+ grade");
} else {
  console.log("Genius");
}

//Converting to Ternary Operators

const result1 =
  totalMarks0 < 40
    ? "You need to work hard."
    : totalMarks0 < 60
    ? "B grade"
    : totalMarks0 < 75
    ? "A grade"
    : totalMarks0 < 85
    ? "A+ grade"
    : "Genius";

console.log(result1);
