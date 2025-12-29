/*
  Changing the case:
    Methods toLowerCase() and toUpperCase() change the case:
*/
let str = "JavaScript";
const lowerCase = str.toLowerCase();
const upperCase = str.toUpperCase();

console.log(`After applying lower case: ${lowerCase}`); // Output: After applying lower case: "javascript"
console.log(`After applying upper case: ${upperCase}`); // Output: After applying upper case: "JAVASCRIPT"
console.log(str); // Output: still "JavaScript"

let word = "Hello";

let upperWord = word.toUpperCase();
let lowerWord = word.toLowerCase();

console.log(upperWord); // Output: "HELLO"
console.log(lowerWord); // Output: "hello"
console.log(word); // Output: still "Hello"

/* 
  Methods toLowerCase() and toUpperCase() return a new string, they do not modify the original string.

  When you call word.toUpperCase():

    - JavaScript goes through each character.

    - Converts it to uppercase.

    - Returns a brand-new string with those characters.

    - The original string remains untouched.
*/

/* 
  You can reassign it, if you want
*/
word = word.toUpperCase(); // Reassigning the new string
console.log(word); // "HELLO"
