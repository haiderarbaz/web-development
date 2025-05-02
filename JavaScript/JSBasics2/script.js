// "use strict";

/**
 * Functions
 * Functions are fundamental building blocks in JavaScript and any programming language.
 * They allow you to write reusable code, which can be executed whenever needed.
 * This reduces redundancy and improves code organization
 *
 * What are Functions?
 * A function is a block of code designed to perform a particular task.
 * You can think of functions as a way to encapsulate code that you might want to reuse multiple times throughout your program.
 * Instead of writing the same code repeatedly, you can call the function whenever you need it.
 *
 * Basic Function Syntax:
 *
 * The basic syntax of a function includes:
 *
 * The function keyword.
 * A name for the function.
 * Parentheses () which can contain parameters.
 * Curly braces {} that enclose the function body.
 *
 * 1. Function Statement/Function Declaration
 *
 *
 */

// Function Declaration or Function Statement

function greetMessage(name, city) {
  console.log(`Hi ${name}, how you're doing?`);
  console.log(`Thanks for joining us from ${city}`);
}

// calling the function
greetMessage("Raj", "Delhi");
greetMessage("Saahil", "Gurgaon");
greetMessage("Faizan", "Bangalore");
greetMessage("Akram");

// In the above example name and city are parameters.
// "Arbaz Haider" & "Banagalore" is an argumnet for the parameters

// Handling Missing Arguments:
// If you call a function without passing all the required arguments, the missing arguments will be undefined.

/**
 * Function Parameters and Arguments
 * Functions can accept inputs, known as parameters. OR
 * Parameter is when you declared a function whatever variables you write in the paranthesis those are the parameter of that function.
 * When you call a function, you provide values for these parameters, known as arguments. OR
 * Argument is what you passed when you called the function and these are the value for the parameters.
 *
 */

/**
 * 2. Anonymous Function & function expressions
 *
 * What are Anonymous Functions?
 * An anonymous function is simply a function that does not have a name.
 * This can be useful in various scenarios, such as callbacks, event handlers, or immediately invoked function expressions (IIFE).
 *
 */

let anonymousFunction = function () {
  console.log("Hello There !");
};
anonymousFunction();

// Type of Anonymous Function
// To confirm that the variable holding the anonymous function is indeed a function, you can use the typeof operator:
console.log(typeof anonymousFunction);

/**
 *
 * What are Function Expression?
 * When you assign an anonymous function to a variable, it is known as a function expression.
 * This makes the variable a function, not just a simple variable.
 *
 */

let anonymousFunction1 = function () {
  console.log("Hello There !");
};
anonymousFunction1();

// Hoisting and Anonymous Functions
// Unlike function declarations, anonymous functions assigned to variables do not get hoisted in the same way. This means you cannot call them before they are defined.

//greet(); // Error: Cannot access 'greet' before initialization
let greet = function () {
  console.log("Hello from Arbaz Haider!");
};
greet();

/**
 *
 * Named Function Expressions:
 * A named function expression is an anonymous function with a name.
 * This name is local to the function's scope and can be useful for recursion or debugging.
 *
 */
let greet1 = function greetMessage() {
  console.log("Hello from Arbaz Haider!");
};
greet1(); // Output: Hello from Arbaz Haider!

// Calling the Named Function
// While you can call the named function using the variable it is assigned to, trying to call the function by its name outside of its scope will result in an error.

// greetMessage(); // Error: greetMessage is not defined

// Inside the function, however, the name can be used for recursive calls:

let factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};

console.log(factorial(5)); // Output: 120

/**
 *
 * Practical Use Cases of Anonymous Functions:
 * Callback Functions
 * Immediately Invoked Function Expressions (IIFE)
 * Event Handlers
 *
 */

// Callback Functions
// Anonymous functions are commonly used as callback functions, especially in asynchronous operations like event handling, timers, or AJAX requests.
setTimeout(function () {
  console.log("This is a callback function!");
}, 1000);

// Immediately Invoked Function Expressions (IIFE)
// An IIFE is a function that is executed immediately after it is defined. This is often used to create a new scope to avoid polluting the global scope.
(function () {
  console.log("IIFE executed immediately!");
})();

// Event Handlers
// Anonymous functions are frequently used in event handling for adding interactivity to web pages.

// document.getElementById("myButton").addEventListener("click", function () {
//   alert("Button was clicked!");
// });

// Summary
// Anonymous Functions: Functions without a name, often used as function expressions.
// Function Expressions: Assigning functions to variables to be used as needed.
// Named Function Expressions: Anonymous functions with a local name for recursion or debugging.
// Use Cases: Callbacks, IIFEs, event handlers, and more.

//factory function--------------------------------------------------------------------------------------

//Type1--------------------------------
//Method1
function createRectangle(len, bre) {
  const rectangle = {
    length: len,
    breadth: bre,
    draw: function () {
      console.log("drawing rectangle");
    },
  };
  return rectangle;
}
const rectangleObj1 = createRectangle(3, 4);
const rectangle2 = createRectangle(7, 8);
const rectangle3 = createRectangle(6, 7);
let rectangle4 = createRectangle(8, 9);
let rectangleObj2 = createRectangle(3, 3);

//method2
function createRectanglee(length, breadth) {
  const rectangle = {
    length,
    breadth,
    draw: function () {
      console.log("drawing rectangle");
    },
  };
  return rectangle;
}
const rectangleObj3 = createRectanglee(4, 4);
const rectangle5 = createRectanglee(7, 6);
const rectangle6 = createRectanglee(6, 5);
let rectangle7 = createRectanglee(8, 4);
let rectangleObj4 = createRectanglee(2, 2);

//Type2---------------------------

// function createRectangleee(len, bre){
//  return rectangle = {
//      length: len,
//      breadth: bre,
//      draw: function(){
//          console.log('drawing rectangle');
//      }
//  };
// }
//  const rectangleObj5 = createRectangleee(4,4);
//  const rectangle8 = createRectangleee(7,6);
//  const rectangle9 = createRectangleee(6,5);
//  let rectangle10 = createRectangleee(8,4);
//  let rectangleObj6 = createRectangleee(2,2);

//constructor function--------------------------------------------------------------------------------------------
//It is a function which is initialize or defines the properties or methods
//constructor function follows pascal notations -> first letter of every word is capital ->eg; NameOfObject
function Rectangle(leng, bread) {
  this.length = leng;
  this.breadth = bread;
  this.draw = function () {
    console.log("drawing");
  };
}

// Objects: An object is an entity which has many properties. And object have collection of key value pairs.
// E.g: Car[Name, colour, weight];

//objects creation-------------------------------------------
const rectangle = {
  length: 1,
  breadth: 2,

  //first way
  draw() {
    console.log("drawing rectangle");
  },

  //second way
  draw: function () {
    console.log("drawing rectangleeeeee");
  },
};

//object creation using constructor function
let rectangleObject = new Rectangle(2, 4);

//Dynamic nature of object: we can add and delete any property in object.
rectangleObject.color = "yellow";
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);

let Rectangle1 = new Function(
  "length",
  "breadth",
  `this.length = length;
        this.breadth = breadth;
        this.draw = function() {
            console.log('drwaning');
        }`
);
// object creation using Rectangle1
let rect = new Rectangle1(2, 3);
console.log(rect);

//below is how we can call/access/invoke function properties/method by using . (dot operator)------------------------------------
// rectangle.length;
// rectangle.breadth;
// rectangle.draw;
// rectangle.draw();

//Types in JS
//Primitive or Value Types
//Primitive are copied by their values.

//Refrence or Object Types
//Refrences are copied by their address/refrence.

let g = 10;
let h = g;
g++;
console.log(g);
console.log(h);

//  let a = {value:10};
//  let b = a;
//  a.value++;
//  console.log(a.value);
//  console.log(b.value);

//  let e = 10;
//  function inc (e){
//     e++;
//  }
//  inc (e);
//  console.log(e);

let f = { value: 11 };
function inc(f) {
  f.value++;
}
inc(f);
console.log(f.value);

//const rectangle1 = {
//     length: 1,
//     breadth: 2,

//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };

// const rectangle2 = {
//     length: 1,
//     breadth: 2,

//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };

//Object Cloning
// 1 --> iteration
let src = {
  a: 10,
  b: 20,
  c: 30,
};
let dest = {};

for (let key in src) {
  dest[key] = src[key];
}
console.log(dest);

//How to check cloning is done or not?
src.a++; //we will increase source(src) key a with (a++)
console.log(dest); //and we will check that the destination key is getting changed or not, if it's value is not changing then we have successfully clone the src object to dest object.

// 2 --> Assign
let src1 = {
  a: 40,
  b: 50,
  c: 60,
};
let src2 = { value: 25 };

let dest1 = Object.assign({}, src1, src2); //we can copy multiple object properties/multiple src properties in one object/one dest by using assign function.

console.log(dest1);

src1.a++;
console.log(dest1);

// 3 --> Spread
let src3 = {
  a: 70,
  b: 80,
  c: 90,
};
let dest2 = { ...src3 };
console.log(dest2);

src3.a++;
console.log(dest2);
