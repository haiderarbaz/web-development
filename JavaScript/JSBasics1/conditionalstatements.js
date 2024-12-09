//Control Statements or Conditional Statements: Conditional statement will perform some action for a specific condition. If the condition meets then a particular block of action will be executed otherwise it will execute another block of action that satisfies that particular condition.

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

// if
// if-else
// nested-if
// if-else-if ladder

// if-statement: It is a conditional statement used to decide whether a certain statement or block of statements will be executed or not i.e if a certain condition is true then a block of statement is executed otherwise not.

// Syntax:

// if (condition) {
//   // Statements to execute if
//   // condition is true
// }

const i = 10;
if (i > 15) document.write("10 is less than 15");
console.log("I am Not in if");

if (true) {
  console.log("Hey ! I'm arbaz and i am from Siwan, Bihar");
}
//When condition is true then it will get executed.

if (false) {
  console.log("Hey ! I'm arbaz and i am from Siwan, Bihar");
}
//When condition is true then it will not get executed.

const isSignUp = true;
if (isSignUp) {
  console.log("Welcome To Homepage !");
}
// The if statement accepts boolean values - if the value is true then it will execute the block of statements under it. If we do not provide the curly braces '{' and '}' after if( condition ) then by default if statement considers the immediate one statement to be inside its block. For example,

// if(condition)
//    statement1;
//    statement2;

// // Here if the condition is true, if block
// // will consider only statement1 to be inside
// // its block.

// if-else statement: The if statement alone tells us that if a condition is true it will execute a block of statements and if the condition is false it won't. But what if we want to do something else if the condition is false? Here comes the else statement. We can use the else statement with the if statement to execute a block of code when the condition is false.

// Syntax:

// if (condition)
// {
//     // Executes this block if
//     // condition is true
// }
// else
// {
//     // Executes this block if
//     // condition is false
// }

const userInputAge = require("readline-sync");
const userAge1 = userInputAge.question("May, i know your Age? ");
{
  if (userAge1 > 15) {
    console.log("You're an adult !");
  } else console.log("You're not an adult.");
}

const readlinesync = require("readline-sync");
const illegibleAge = readlinesync.question("Please type your age. ");
{
  if (illegibleAge >= 18) console.log("You're eligible to Vote !");
  else console.log("Youy're not eligible.");
}

const readLineSync = require("readline-sync");
const number = readLineSync.question("Enter a number: ");
if (number % 3 === 0) {
  console.log("Fizzz");
} else if (number % 5 === 0) {
  console.log("Buzzz");
}

const readLineSync0 = require("readline-sync");
const num = readLineSync0.question("Enter a number: ");
if (num % 3 === 0 && num % 5 === 0) {
  console.log("Fizzz");
} else if (num % 3 === 0 || num % 5 === 0) {
  console.log("Buzzz");
}

// Nested-if statement: JavaScript allows us to nest if statements within if statements. i.e, we can place an if statement inside another if statement. A nested if is an if statement that is the target of another if or else.

// Syntax:

// if (condition1)
// {
//    // Executes when condition1 is true
//    if (condition2)
//    {
//       // Executes when condition2 is true
//    }
// }

const j = 10;
if (j == 10) {
  // First if statement
  if (j < 15) console.log("j is smaller than 15");
  // Nested - if statement
  // Will only be executed if statement above
  // it is true
  if (j < 12) console.log("j is smaller than 12 too");
  else console.log("j is greater than 15");
}

const readLineSync1 = require("readline-sync");
const num1 = readLineSync1.question("Enter a number: ");
if (num1 % 3 === 0 && num1 % 5 === 0) {
  console.log("Fizzz");
}
if (num1 % 3 === 0 || num1 % 5 === 0) {
  console.log("Buzzz");
}

const readLineSync3 = require("readline-sync");
const num3 = readLineSync3.question("Enter a number: ");
if (num3 % 3 === 0 && num3 % 5 === 0) console.log("Fizzz");
if (num3 % 3 === 0 || num3 % 5 === 0) console.log("Buzzz");
if (num3 % 7 === 0) console.log("BuzzzBuzzz");

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

// if-else-if ladder statement: Here, a user can decide among multiple options. The if statements are executed from the top down. As soon as one of the conditions controlling the if is true, the statement associated with that if is executed, and the rest of the ladder is bypassed. If none of the conditions is true, then the final else statement will be executed.

// Syntax:

// if (condition)
//     statement;
// else if (condition)
//     statement;
// .
// .
// else
//     statement;

const readLineSync2 = require("readline-sync");
const num2 = readLineSync2.question("Enter a number: ");
if (num2 % 3 === 0 && num2 % 5 === 0) console.log("Fizzz");
else if (num2 % 3 === 0 || num2 % 5 === 0) console.log("Buzzz");
else if (num2 % 7 === 0) console.log("BuzzzBuzzz");
else console.log("Number is not divisible by 3,5 and 7");

let marks = 98;
if (marks >= 90) {
  console.log("A");
} else if (marks >= 80) {
  console.log("B");
} else if (marks >= 70) {
  console.log("C");
} else if (marks >= 60) {
  console.log("D");
} else {
  console.log("E");
}
