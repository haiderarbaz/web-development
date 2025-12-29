/*
    Activity 1: Variable Declaration
        Task 1: Declare a variable using var, assign it a number, and log the value to the console.
        Task 2: Declare a variable using let , assign it a string, and log the value to the console.
*/
var userFirstName = "Arbaz";
console.log(`User first name is: ${userFirstName}`);

let userLastName = "Haider";
console.log(`User last name is: ${userLastName}`);

console.log(`User full name is: ${userFirstName} ${userLastName}`);

/*
    Activity 2: Constant Declaration
        Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
*/
const userRegister = false;
console.log("User is Register:", userRegister);

/*
    Activity 3: Data Types
        Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
*/
let age = 233;
let userAddress = "India";
const userLogedIn = true;
const userScore = {
  html: 30,
  javascript: 20,
  css: 40,
};
const userSubject = ["HTML", "CSS", "JavaScript"];

console.log(typeof age);
console.log(typeof userAddress);
console.log(typeof userLogedIn);
console.log(typeof userScore);
console.log(typeof userSubject);

/*
    Activity 4: Reassigning Variables
        Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
 */
let userSigIn = false;
console.log(userSigIn);

userSigIn = true;
console.log(userSigIn);

/*
    Activity 5: Understanding const
        Task 6: Try reassigning a variable declared with const and observe the error.
*/
const fruit = "Apple";
console.log(fruit);
/*
    fruit = "Banana";
    console.log(fruit);
        TypeError: Assignment to constant variable.

*/
