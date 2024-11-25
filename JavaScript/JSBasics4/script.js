// 'use strict'

console.log("This is functions");

//Function:
//A function in JavaScript is a reusable block of code that performs a specific task. You define it once, and then you can run (or “call”) it whenever you need that task done in your program.
//A JavaScript function runs when it is “called” by some part of your code.

//Syntax:
//function functionName(Parameter1, Parameter2,)
// {
// Function body
// }

//To Create a function in javascript:
//We have to first use the keyword function, separated by the name of the function and parameters within parenthesis. The part of the function inside the curly braces {} is the body of the function.

//In javascript, functions can be used in the same way as variables for assignments, or calculations.

//Why we use function?
//Functions can be used multiple times, reducing redundancy.
//Break down complex problems into manageable pieces.
//Manage complexity by hiding implementation details.
//Can call themselves to solve problems recursively.

//Function Invocation
//The function code you have written will be executed whenever it is called.
//Triggered by an event (e.g., a button click by a user).
//When explicitly called from JavaScript code.
//Automatically executed, such as in self-invoking functions.

//There are three ways of writing a function in JavaScript:

// 1.) Function Declaration OR Function Definition OR Function Statement---------------------------------------------------------------
//Before, using a user-defined function in JavaScript we have to create one.
//Below are the rules for creating a function in JavaScript:
//Every function should begin with the keyword function followed by,
//A user-defined function name that should be unique,
//A list of parameters enclosed within parentheses and separated by commas,
//A list of statements composing the body of the function enclosed within curly braces {}.

//Examples:
function calcAddition(number1, number2) {
  return number1 + number2;
}
console.log(calcAddition(6, 9)); //15
//In the above example if we try to Accessing the function with just the function name without () will return the function object instead of the function result.

function run() {
  console.log("running");
}
run(); //running //without calling the function or invoking it will not give o/p

// 2.)Function Assignment
//It is similar to a function declaration without the function name. Function expressions can be stored in a variable assignment.

const square = function (number) {
  return number * number;
};
const z = square(4); // x gets the value 16
console.log(z); //16

//Named function assignment\
let stand = function walk() {
  console.log("walking");
};
stand(); //Walking

let jump = stand;
jump(); //Walking

//Anonymous function assignment
let stands = function () {
  console.log("walking");
};
stands(); //Walking

//JavaScript is a dynamioc language---------------------------------
let x = 3;
x = "a";
console.log(x); //a

//This function will give correct output for two parameters.
function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4)); //7
console.log(sum(1)); //NaN
console.log(sum()); //NaN
console.log(sum(2, 3, 5, 1, 7, 4, 6, 9)); //5 //in this case function will run but it will give wrong output.

//Arguments(Special Objects)
//This will create objects not array.
function sum1(a, b) {
  console.log(arguments);
  return a + b;
}
let ans = sum1(1, 2);

function sum1(a, b) {
  console.log(arguments);
  return a + b;
}
let ans1 = sum1(1, 2, 3, 4, 5, 6, 7, 8);
//Above example will create objects and key value pairs.

//Dynamic sort of fumctions
//Use this when you have more than two parameters.
function sum2(a, b) {
  let total = 0;
  for (let value of arguments) total = total + value;
  return total;
}
let ans2 = sum2(1, 2, 3, 4, 5, 6);
console.log(ans2);

//Rest Operator
//This will create an Array.
function sum3(...args) {
  console.log(args);
}
sum3(1, 2, 3, 4, 5, 6);

function sum4(num, ...args) {
  console.log(args);
}
sum4(1, 2, 3, 4, 5, 6);

function sum5(num, value, ...args) {
  console.log(args);
}
sum5(1, 2, 3, 4, 5, 6);
// Note: Rest parameter must be last formal parameter. We can't write anything after rest variable (...args) & if you're writing anything after rest operator you will get error.

//Default Parameters---------------------------------------
function interest(p, r, y) {
  return (p * r * y) / 100;
}
console.log(interest(10000, 10, 5));

function interest(p, r = 6, y = 10) {
  return (p * r * y) / 100;
}
console.log(interest(10000));

//Getter and Setters-----------------------------------------------
//Getter: To get the value
//Setter: To fetch the value
//Getter: Access properties
//Setter: Change or mutate properties

let person = {
  fName: "Arbaz",
  lName: "Haider",
};
console.log(person);

function fullName() {
  return `${person.fName}       ${person.lName}`; //When we use back tick (tempelate literal) jitna space hum dengey utna space output mein aayega.
}
//issue ---> it's a read only function we will not able to change the name
console.log(fullName());

//if we want to use getter and setter
//first we have to access the object then we have to define OR create the getter & setter inside the object
let person1 = {
  fName: "Nasim",
  lName: "Haider",
  get fullName() {
    return `${person1.fName} ${person1.lName}`;
  },
  set fullName(value) {
    //To set we have to give some value
    let parts = value.split(" "); //We use split method to give space between the value
    this.fName = parts[0]; //This represnt first name of current object.
    this.lName = parts[1]; //This represnt first name of current object.
  },
};
person1.fullName = "Arbaz Haider";
console.log(person1.fullName);

//Scopes
{
  let p = 5;
  console.log(5);
}

// {
//   let q = 7;
// }
// console.log(q); //Error

{
  var r = 9;
}
console.log(r);

// function talk(){
//   var s = 2
// }
// console.log(s); //Error

// for(let i=10; i<10; i++){

// }
// console.log(i); //Error

//Loop
for (var i = 10; i < 10; i++) {}
console.log(i);

// if (true){
//   let t = 4;
// }
// console.log(t); //Error

//Statements
if (true) {
  var t = 4;
}
console.log(t);

//Function
function a() {
  const d = 5;
}

function b() {
  const d = 5;
}

function a() {
  const cd = 5;
}
const cd = 5;
function b() {
  const cd = 5;
}

//Try and Catch <------ Error Handling----------------------------------------
let items = {
  fName: "iPhone",
  lName: "6s",
  get fullName() {
    return `${items.fName} ${items.lName}`;
  },
  set fullName(value) {
    if (typeof value !== String) {
      throw new Error("You have not sent a string");
    }
    let parts = value.split(" ");
    this.fName = parts[0];
    this.lName = parts[1];
  },
};
try {
  items.fullName = true;
} catch (e) {
  alert(e);
}
console.log(items.fullName);
