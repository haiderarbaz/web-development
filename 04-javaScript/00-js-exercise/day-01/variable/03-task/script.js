// Declare a variable using var, assign it a number, and log the value to the console.
var num = 97;
console.log("Number is: ", num);

// Declare a variable using let , assign it a string, and log the value to the console.
let currentUserName = "John Doe";
console.log("Current User Is: ", currentUserName);

// Declare a variable using const, assign it a boolean value, and log the value to the console.
const finaleResult = true;
console.log("Finale Result is: ", finaleResult);

// Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let currentPlayerName = "Alice";
console.log("Current Player is: ", currentPlayerName);

currentPlayerName = "Amna";
console.log("New Current Player is: ", currentPlayerName);

// Try reassigning a variable declared with const and observe the error.
const admin = "Abdullah";
console.log("Admin Name is: ", admin);

admin = "Faiz"; // This line will give --> TypeError: Assignment to constant variable.
console.log("Admin Name is: ", admin);
