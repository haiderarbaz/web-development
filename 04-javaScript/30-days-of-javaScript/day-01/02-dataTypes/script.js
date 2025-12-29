// Number
const num = 133;
console.log(num);

const float = 2.44;
console.log(float);

// BigInt
const bigInt = 12345678901234567890n;
console.log(bigInt);

// String
const userName = "Allen";
console.log(userName);

const greetings = `Hi ${userName}, Welcome to JavaScript`;
console.log(greetings);

const userAge = 21;
alert(`Hello ${userName}, ${userAge}`);

alert(`Your result is ${10 + 11}`);

// Boolean
const nameFieldCheck = true;
const ageFieldCheck = false;
const userLogedIn = true;

console.log("Name field check:", nameFieldCheck);
console.log("Age field check:", ageFieldCheck);
console.log("LogedIn:", userLogedIn);

const isGreater = 4 > 1;
console.log("Is Greater:", isGreater);

// Null
const isHireable = null;
console.log(isHireable);

// Undefined
let userQualifications;
console.log(userQualifications);

userQualifications = "B.E";
console.log(`User Qualification is: ${userQualifications}`);

let userCollegeName;
console.log(userCollegeName);

// Object
let userInfo = {
  userName: "Allen",
  userAge: 21,
  userLogedIn: true,
  isHireable: null,
  isQualified: undefined,
};
console.log("User name is: ", userInfo.userName);

// Symbol
const sym1 = Symbol("id");
console.log(sym1);

const sym2 = Symbol("string");
console.log(sym2);

// TypeOf
console.log(typeof Number); // function
console.log(typeof num); // number
console.log(typeof float); // number
console.log(typeof 4); // number
console.log(typeof 6.55); // number

console.log(typeof BigInt); // function
console.log(typeof bigInt); // bigint
console.log(typeof 10n); // bigint

console.log(typeof String); // function
console.log(typeof userName); // string
console.log(typeof "Arbaz"); // string
console.log(typeof "Hey, Welcome to JavaScript"); // string

console.log(typeof Boolean); // function
console.log(typeof isGreater); // boolean
console.log(typeof true); // boolean
console.log(typeof false); // boolean

console.log(typeof null); // object
console.log(typeof isHireable); // object
/* 
    The result of typeof null is "object".
        It's an officially recognized error in typeOf coming from very early days of JavaScript and kept for compatibility.
*/

console.log(typeof undefined); // undefined
console.log(typeof userQualifications); // string
console.log(typeof userCollegeName); // undefined

console.log(Object); // ƒ Object() { [native code] }
/* 
    What it means:
        The f symbol represent a function.
        Object() is the name of function.
        {[native code]} means that the function is implemented in the browser's native code (e.g; c++ or another low level language) and is not written in JavaScript.
        This is common for JavaScript built-in objects and methods like, Object, Array, String, etc.
*/
console.log(typeof Object); // function
console.log(typeof userInfo); // object
console.log(typeof userInfo.userName); // string
console.log(typeof userInfo.userAge); // number

console.log(Symbol); // ƒ Symbol() { [native code] }
console.log(typeof Symbol); // function
console.log(sym1); // symbol
console.log(sym2); // symbol

console.log(typeof Math); // object
/* 
    Math is a built-in object that provides mathematical operations.
*/

console.log(typeof alert); // function
/*
    The result of typeof alert is "function", because alert is a function.
*/
