// Var

var firstName = "Arbu";
console.log(firstName);
firstName = "Arbaz";
console.log(firstName);

console.log(lastName);
var lastName = "Haider";
console.log(lastName);

{
  var userAge = 20;
}
console.log(userAge);

var fruit = "Apple";
console.log(fruit);

var fruit = "Banana";
console.log(fruit);

// let

let userFirstName = "Babban";
console.log(userFirstName);

/* 
    let userFirstName = "Babban";
    console.log(userFirstName);

    Error Messages:
        Uncaught SyntaxError: Identifier 'userFirstName' has already been declared
        Cannot redeclare block-scoped variable 'userFirstName'
*/

userFirstName = "Afreen";
console.log(userFirstName);

/*
    console.log(userLastName);
    let userLastName = "Haider";

    Error Message:
        Uncaught ReferenceError: Cannot access 'userLastName' before initialization
*/

let userLastName = "Haider";
console.log(userLastName);

{
  let userAge = 30;
  console.log(userAge);
}
console.log(userAge);
// This log will not print anything because let is block or local scope and we can't access it outside the block.

// Const
const userLocation = "Siwan";
console.log(userLocation);
// userLocation = "Bihar";
// the above line will give an error message: uncaught TypeError: Assignment to constant variable. at script.js:61:14

const fruitName = "Apple";

const obj = {};
obj.a = 1;
console.log(obj);

obj.userName = "Arbu";
console.log(obj);
