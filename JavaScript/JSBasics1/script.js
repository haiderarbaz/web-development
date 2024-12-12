//"use strict";
//treat all JS code as newer version

//line below is used to print on the console window
console.log("Assallamo Alaikum");
console.log("Hello World");
console.log("Assallamo Alaikum Version 2");
console.log("Hello Jee Version 1");
console.log("Arbaz");

//other ways to print
process.stdout.write("Hey!");
process.stdout.write("Hi!");
//issue: it doesn't give a new line

//other ways to print
console.table({ city: "Siwan" });
//it will create a table.

//The console.log() is a function in JavaScript that is used to print any kind of variables defined before it or to print any message that needs to be displayed to the user.

// Syntax:

// console.log(" ");
// Parameters: It accepts a parameter that can be an array, an object, or any message.
// Return value: It outputs the value of the given parameter to the console.

//If the message is passed to the function console.log(), then the function will display the given message.

//JavaScript is a Dynamically Typed language. This means that variable types are determined at runtime rather than at compile time. You don't have to explicitly declare the type of a variable when you define it, and the type can change as the program executes.

//Variable
//Named memory location is called varibale.
//Technically it's like a placeholder which can hold some data or information.
//A variable is a named placeholder that holds data or information. In simpler terms, variables are used to store values that can be used and manipulated throughout your code. Think of variables as containers that hold different types of data, such as text, numbers, or even more complex structures.

//Why Use Variables?
//Let's consider an e-commerce application where you need to add products to a wishlist or a cart. JavaScript needs to store the information about these products to manage them effectively. This is where variables come into play. By storing data in variables, you can easily reference and manipulate that data later in your code.

//JavaScript Variables
//Creating a variable in JavaScript is called "declaring" a variable. You declare a JavaScript variable with the const, var or the let keyword.

//Constants
//A value that cannot be change is called constants.
//The const keyword is used to declare variables that are meant to be constants, meaning their values should not change once assigned.
//const num = 12;
//num = 13;

//Var
//The var keyword is used to declare a variable.

//let
//The let keyword is a more modern way to declare variables and is generally preferred over var due to its block-scoping feature.

//How to create/declare constants?
//1.) By using const keyword we can create/declare contstants.
const userId = 234675;
console.log(userId);

const accountUserName = "sheikharbaz";
console.log(accountUserName);

//With const, you must assign a value at the time of declaration, and this value cannot be changed later in your code.

//2.) By using let & var keyword we can create variable.
let text; //Creating or Declaring variable
text = "Javascript is a language!!!"; //Assigning a value to a variable.
console.log(text);

let z = 2;
console.log(z);

var message; ////Creating or Declaring variable
message = "Hello Arbaz!"; ////Assigning a value to a variable.
console.log(message);

var y = 9;
console.log(y);

/*
prefer not to use var 
beacuse of issue in block scope and functional scope
*/

//Variable Assignment and Re-assignment:
//Variables declared with var and let can be reassigned new values, while variables declared with const cannot.

var textMessage = "Hello, There!";
message = "Hello, How You Doing!";
console.log(textMessage); // Outputs: Hello, How You Doing!

let textMessages = "JavaScript is the best!";
text = "JavaScript is awesome!";
console.log(textMessages); // Outputs: JavaScript is awesome!

const number = 10;
//number = 20; // Error: Assignment to constant variable.

const accountId = 28202;
let accountEmail = "arbazhaider.java@gmail.com";
var accountPassword = "123@456%789";
let isLoggedOut = false;
let accountState;
personCity = "Siwan"; //The reason you will see an error that personCity is not defined is because personCity was never explicitly declared using var, let, or const. In strict mode, this would throw an error. However, in non-strict mode, assigning a value to an undeclared variable (like personCity) creates a property on the global object (in browsers, this is the window object).

//try to change the variable

/* accountId = 2; */ //not allowed
accountEmail = "haiderarbaz803@gmail.com";
accountPassword = "123321456";
personCity = "Bengaluru";

// console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  personCity,
  accountState,
]);

//By using let keyword we can store any type of data.
let a = 5;
console.log(a);

let b = "true";
console.log(b);

let nickName = "Arbuu";
console.log(nickName);

/* alert (3 +3) */
//this will run in browser not in node
//we are using nodejs, not browser

/* Note: Code redability should be high */
//Ex:
console.log(3 + 3);
console.log("Arbaz");
// good way to write

//Rules for naming variable
//A variable name can consist of letters (both uppercase and lowercase), numbers, the dollar sign ($), and the underscore (_).
//can start with $ or _.
//cannot be a reserved keyword
//cannot start with a number but can end with one.
//Avoid special characters such as @, #, -, brackets or space.
//Use of Camelcase eg:- firstName, arbazHaider, ageOfStudent.
//When a variable name consists of multiple words, you should not separate them with spaces. Instead, use camelCase or underscores.

let username;
let userName;
let Age;
let _isValid;
let $price;
let number1;
let number_2;

//Variable Name Conventions
//1. Single Word Variables: Use descriptive names for single-word variables.
let Age1 = 25;

//2. Multiple Words Variables: Use camelCase or underscores.
let homeAddress = "123 Main St"; // camelCase
let home_address = "123 Main St"; // using underscore

//3. Case Sensitivity: Remember that variable names are case-sensitive.
let userAge = 25;
let UserAge = 30; // Different variable

//Avoid Unnecessary Symbols
//While $ and _ are allowed, avoid using them unnecessarily, as they can make the code look cluttered and unprofessional. Only use these symbols if they enhance the clarity of your code.

let $prices = 100;
let _isValids = true;

//Why Use let and const over var?
//Block Scoping: let and const are block-scoped, meaning they are only accessible within the block they are defined. var is function-scoped, which can lead to unexpected behavior.
//Re-assignment: const ensures that variables cannot be reassigned, which helps prevent accidental changes to important values.

let myText = "Hello, Raj";
console.log(message); // Outputs: Hello, Raj!
message = "Hello, Saahil";
console.log(message); // Outputs: Hello, Saahil!

const year = 2024;
console.log(year); // Outputs: 2024
// year = 2025; // Error: Assignment to constant variable.

//In the example above, we first declare and log the message variable. We then update message and log the new value. We also declare a const variable year and attempt to change its value, resulting in an error.

//what is difference between let, var & const?
//var is global scope and let is local scope.

//Scope:
//var is function-scoped. It is accessible throughout the function it is declared in, even before the declaration due to hoisting.
//let and const are block-scoped. They are only accessible within the block they are declared in, like inside loops or conditionals.

//Hoisting:
//var is hoisted to the top of its scope and initialized as undefined, meaning you can use it before the declaration (though this may lead to unexpected results).
//let and const are also hoisted but are not initialized, so using them before declaration will result in a ReferenceError.

//Reassignment:
//var and let can be reassigned, meaning you can change their value after declaration.
//const cannot be reassigned. Once a value is assigned to a const, it cannot be changed (though for objects and arrays, the content can still be modified).

let gameName = "pubG";
gameName = "FreeFire";
console.log(gameName);

// const username = "sheikkh.sahab";
// username = "arbazhaider";
// console.log(username);

//Redeclaration:
//var can be redeclared in the same scope without an error.
//let and const cannot be redeclared in the same scope, leading to a syntax error.

//Temporal Dead Zone:
//let and const have a "temporal dead zone" from the start of the block until they are declared, meaning they cannot be accessed before the declaration.
//var does not have this limitation and can be accessed before declaration (due to hoisting).

//Use Case:
//var: Outdated, avoid using.
//let: Use for variables that will change.
//const: Use for constants or when reassignment is not needed.

//What is hoisting?
/* Hoisting is a JavaScript mechanism where variable and function declarations are moved (or "hoisted") to the top of their containing scope (function or global scope) during the compile phase, before the code is executed. This means that you can use functions and variables before they are declared in the code.*/

//How Hoisting Works:

//Variable Hoisting:
//When a variable is declared using var, JavaScript hoists the declaration to the top of the function or global scope, but not the assignment. This means the variable is initialized with undefined before the actual code runs.
//For let and const, the declarations are hoisted but not initialized. They remain in a Temporal Dead Zone until the interpreter reaches the actual line where they are declared.

//Function Hoisting:
//Function declarations (created with the function keyword) are fully hoisted, meaning both the declaration and the definition can be used before the line where they are written.
//Function expressions (where functions are assigned to variables) are treated like variables. Only the variable declaration is hoisted, not the function assignment.

//Datatypes
// 1.) Primitive Datatypes
// 2.) Reference Types(Non-primitive)

// 1.) Primitive Datatypes
//Primitives (like number, string, boolean, etc.) store the actual value in memory. When a primitive is assigned to another variable, it creates a new copy of the value.

//String
//A sequence of characters enclosed in quotes. These can be single quotes ('), double quotes ("), or backticks (`).

let myName = "Arbaz";
console.log(myName);
console.log(typeof myName);
console.log(typeof "Haider");

let nickname = `Arbuu`;
console.log(nickname);
console.log(typeof nickname);

//To determine the type of a variable, we can use the typeof operator:

//Number
//Numbers in JavaScript can be integers or floating-point numbers.

//1,2,3; 1.23, 12.05
let myAge = 26;
console.log(myAge);
console.log(typeof myAge);

let saahilAge = 26.5;
console.log(saahilAge);
console.log(typeof saahilAge); //output: number

let numberString = "123";
console.log(typeof numberString); //output: string
//If you enclose numbers in quotes, they become strings.

//Bigint
//BigInt is a built-in object in JavaScript that provides a way to represent whole numbers larger than the safe integer limit for numbers in JavaScript.
//BigInt allows you to work with integers that are arbitrarily large, which can be useful in certain applications like cryptography, high-precision calculations, or financial applications.
//To create a BigInt, you can either append an n to the end of an integer literal or use the BigInt constructor.
//Example:
let bigInt1 = 1234567890123456789012345678901234567890n; // using 'n' suffix
let bigInt2 = BigInt(1234567890123456789012345678901234567890); // using BigInt constructor

console.log(bigInt1); // 1234567890123456789012345678901234567890n
console.log(bigInt2); // 1234567890123456789012345678901234567890n

//Boolean
//True or False
//Booleans represent true/false values and are commonly used in conditional statements.

let isLogIn = false;
console.log(isLogIn);
console.log(typeof isLogIn);

let isProductInCart = false;
console.log(isProductInCart);
console.log(typeof isProductInCart);

let isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);

//Undefined
//A variable that is declared but not assigned/defined a value has the type undefined.
//A variable that is not defined it will give the output undefined

let candidateName;
console.log(candidateName);
console.log(typeof candidateName);

//Null
//Empty Variable
//It's a standalone value
//It is a representaion of empty value.
//null represents the intentional absence of any object value. It's used to indicate "no value."

let State = null;
console.log(State);
console.log(typeof State);

let user = null;
console.log(user); // Outputs: null
console.log(typeof user); // Outputs: object

//Symbol
//To find uniqueness we use symbol

//Typeof: is used to determine the data type of a variable or expression. It returns a string that represents the type of the operand.
console.log(typeof "Arbaz");
console.log(typeof null);
console.log(typeof undefined);

let score = 33;
console.log(typeof score);

let score0 = "33";
console.log(typeof score0);

let score01 = "33abc";
console.log(typeof score01);

let score02 = null;
console.log(typeof score02);

let score03 = undefined;
console.log(typeof score03);

let score04 = true;
console.log(typeof score04);

let score05 = false;
console.log(typeof score05);

let getScore = score;
console.log(getScore);
console.log(typeof getScore);

//conversion: refers to changing one data type to another, either implicitly (automatic) or explicitly (manual).

// 1.) Implicit Conversion (Type Coercion): JavaScript automatically converts data types when necessary, typically when you perform operations involving different types.

//Example 1: String and Number
//When a string is added to a number, JavaScript automatically converts the number to a string and concatenates them.
let result = "5" + 3;
console.log(result); // "53" (number 3 is coerced to string "3")

//Example 2: Boolean and Number
//When a boolean is involved in arithmetic operations, true is converted to 1, and false to 0.
let result0 = true + 2;
console.log(result0); // 3 (true is coerced to 1)

// 2.) Explicit Conversion: You can manually convert data types using various methods.

//2.1. Convert to String
//Using String() function:
let num0 = 123;
let str = String(num0);
console.log(str); // "123"

//Using .toString() method:
let bool = true;
let str0 = bool.toString();
console.log(str0); // "true"

//2.2. Convert to Number
//Using Number() function:
let str01 = "456";
let num1 = Number(str01);
console.log(num1); // 456

//Using parseInt() or parseFloat(): Converts strings to integers or floating-point numbers.
let str02 = "123.45";
let intNum = parseInt(str02);
let floatNum = parseFloat(str02);
console.log(intNum); // 123
console.log(floatNum); // 123.45

//2.3. Convert to Boolean
//Using Boolean() function:
let value0 = 0;
let bool1 = Boolean(value0);
console.log(bool1); // false (0 is considered falsy)

// Truthy vs Falsy Values: JavaScript considers the following values as falsy (converted to false in a boolean context):
// 0
// "" (empty string)
// null
// undefined
// NaN
// false Everything else is truthy.

// Convert string to number
let str03 = "100";
let num03 = Number(str03); // 100

// Convert number to string
let numToStr = String(99); // "99"

// Convert boolean to string
let boolToStr = String(true); // "true"

// Convert string to boolean
let strToBool = Boolean("Hello"); // true

// Convert number to boolean
let numToBool = Boolean(0); // false

//Summary of conversion functions
// String(): Converts any value to a string.
// Number(): Converts any value to a number.
// Boolean(): Converts any value to a boolean.
// parseInt(): Converts a string to an integer.
// parseFloat(): Converts a string to a floating-point number.

let valueInNumber = Number(score0); //it will convert score 0 in number
console.log(typeof valueInNumber);
console.log(valueInNumber);

let valueInNumber01 = Number(score01); //it will convert score 01 in number
console.log(typeof valueInNumber01); //string
console.log(valueInNumber01); //NaN

let valueInNumber02 = Number(score02); //it will convert score 02 in number
console.log(typeof valueInNumber02); //object
console.log(valueInNumber02); //0

let valueInNumber03 = Number(score03); //it will convert score 03 in number
console.log(typeof valueInNumber02); //undefined
console.log(valueInNumber03); //0

let valueInNumber04 = Number(score04); //it will convert score 04 in number
console.log(typeof valueInNumber04); //boolean
console.log(valueInNumber04); //1

let valueInNumber05 = Number(score05); //it will convert score 04 in number
console.log(typeof valueInNumber05); //boolean
console.log(valueInNumber05); //0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

//Dynamic Typing

let lastName = "Haider";
console.log(lastName);

lastName = 3;
console.log(lastName);

let firstName = "Arbaz";
console.log(firstName);

firstName = 5;
console.log(firstName);

// 2.) Reference Types(Non-primitive)
//Stored by reference: When you assign or pass a reference type, you are passing a reference to the memory location where the value is stored, not the actual value itself.
//Mutable: The contents of reference types can be modified, even if the reference (e.g., a variable pointing to an object) is const.

//Objects
//If multiple variables are linked in together then we call it's a objects.
//Objects are non-primitive data types that allow you to store collections of data. Objects are created using curly braces {}.
//Objects have properties & behaviours
//Eg:- fisrtName = Arbaz; age = 24; then we create an object called person, & it will have property.
//Syntax
let person = {
  officialName: "Arbaz",
  age: 24,
  education: "Engineer",
};
console.log(person);
console.log(typeof person);

let biryaniTypes = ["chicken biryani", "mutton biryani", "fish biryani"];
console.log(typeof biryaniTypes);

//How to access these properties
// 1: Dot Notations
person.age;
// 2: Bracket Notations
person["age"];

//Arrays
//A data structures which is used to contain a list of items.
//Arrays are a type of object used to store multiple values in a single variable, created using square brackets [].
//Declarization:
let names = ["love", "hate", "dhoka"];
//How to access elements on array?
//By using index values
names[1], names[0], names[2];

// Summary of Data Types
// Here are the primary data types we discussed:

// String: Text enclosed in quotes.
// Number: Integers or floating-point numbers.
// Boolean: True or false values.
// Undefined: Variables declared but not assigned a value.
// Null: Represents "no value."
// Object: Non-primitive type for storing collections of data.
// Array: A special type of object for storing lists of values.

//Concatenation: //old way
//String concatenation is the process of joining two or more strings together using the + operator. This method has been around since the early days of JavaScript.
let $userName = "Raj";
let $userAge = 54;
let diplayMessage =
  "User name is " + $userName + ", and User age is " + $userAge;

console.log(diplayMessage);

// Explanation:
// Variable Declaration: We declare and initialize the variables username and age.
// String Concatenation: We use the + operator to concatenate the strings and variables into a complete message.
// Console Output: We log the message to the console.

//However, string concatenation can become cumbersome and less readable, especially with longer strings and multiple variables.

//And We can achieve the same result as above using template literals:

//Template String OR Template String: //new way
//Template literals provide a more readable and convenient way to include variables in strings. They are enclosed by backticks (`) and allow embedded expressions using ${}.
//
let $gameName = "Saahil";
let $gameScore = 670;
let textMessageDisplay = `User name is ${$gameName}, and User score is ${$gameScore}`;

console.log(textMessageDisplay);
// Explanation:
// Backticks: We use backticks to define a template literal.
// Embedded Expressions: We embed the variables username and age directly within the string using ${}.

// Advantages of Template Literals
// Readability: Template literals improve the readability of your code by avoiding the clutter of multiple + operators.
// Multiline Strings: Template literals allow for multiline strings without the need for escape sequences.

//Multiline Example:
let multipleLineText = `His Name is ${$userName}
He is ${$userAge} years old.
He loves to do Code.
He eats good amount of protein.`;
console.log(multipleLineText);

//Practice
let hobby = "Travelling";
let concatenationMessage = "My favourite hobby is " + hobby;
let templateLiteralMessage = `My favourite hobby is ${hobby}.`;
console.log(concatenationMessage);
console.log(templateLiteralMessage);

let favouriteCuisine = "Indian Food";
let concatenationMessage0 = "My favourite cuisine is " + favouriteCuisine;
let templateLiteralMessage0 = `My favourite cuisine is ${favouriteCuisine}.`;
console.log(concatenationMessage0);
console.log(templateLiteralMessage0);

//multilinePractice

let hobby0 = "coding";
let multilineMessage = `My favorite hobby is ${hobby0}.
I spend a lot of time practicing ${hobby0}.
It's very rewarding.`;
console.log(multilineMessage);

//Functions
//A function in JavaScript (and in most programming languages) is a block of reusable code designed to perform a specific task.
//A function can take inputs, process them, and return an output.
//Functions help break down large programs into smaller, manageable, and reusable chunks of code.
//Ex:
function sayHello() {
  console.log("Hello, World!");
}
sayHello(); // Output: Hello, World!

//operators
//Arithmetic Opertaors:
//Addition(+), Substraction(-), Multiplication(x), Division(/), Reminder Operator(%), Exponantial Operator(xx)
//If an arithmetic calculation is passed to the console.log() function, then it will display the result of the calculation.
let m = 2;
let n = 4;
let o = m + n;
console.log(o);
console.log(m * n);
console.log(n - m);
console.log(n / m);
console.log(n % m);
console.log(m ** n);
console.log(m ** 2);
console.log(n ** 3);

let q = "12";
let r = "13";
//Adding Strings and Numbers
console.log(q + r);
//When adding a string and a number, JavaScript treats the number as a string and concatenates them.

// Other Operations with Strings and Numbers
// For subtraction, multiplication, and division, JavaScript converts strings to numbers if possible.
console.log(q - r);
console.log(q * r);
console.log(q / r);
console.log(q % r);
console.log(q ** r);

// Mixing Types
// When one operand is a number and the other is a string:
let x = 12;
let y1 = "3";
console.log(x + y1); // Outputs: "123"
console.log(x - y1); // Outputs: 9
console.log(x * y1); // Outputs: 36
console.log(x / y1); // Outputs: 4

// Handling Non-Numeric Strings
// If the string cannot be converted to a number, JavaScript returns NaN (Not-a-Number).
let e = "apple";
let f = "mango";
console.log(e + f); // Outputs: "applemango"
console.log(e - f); // Outputs: NaN
console.log(e * f); // Outputs: NaN
console.log(e / f); // Outputs: NaN

// Best Practices
// When dealing with user input or any data that might be in string format, it's essential to convert strings to numbers explicitly to avoid unexpected results.

// Example
// Suppose you are taking input from a user and want to perform arithmetic operations:
const userInput = "42"; // Simulating user input
const numberInput = Number(userInput);

if (!isNaN(numberInput)) {
  console.log(numberInput + 8); // Outputs: 50
} else {
  console.log("Invalid input");
}

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2 ** 2);
console.log(2 % 3);

let str1 = "hello";
let str2 = " Arbaz";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

console.log(+true);
console.log(+"");

//Pre/Post Increament/Decreament
//Learn it from mdn or other website
//Increament operator
let h = 3;
const i = h++;
console.log(`h:${h}, i:${i}`);
// Expected output: "x:4, y:3"

let u = 3;
const v = ++a;
console.log(`u:${u}, v:${v}`);
// Expected output: "a:4, b:4"

//post-fix increament
let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

//pre-fix increament
let scoreboard = 100;
++gameCounter;
console.log(scoreboard);

//Type Conversion
//Type conversion is an essential concept in JavaScript that allows us to convert one data type into another. This is particularly useful in situations where data from an HTML input or text area needs to be manipulated as a different type, such as converting a string to a number.

// Why Use Type Conversion?
// Consider an HTML text area that always provides data as a string. If the user enters a number, you might need this number to be treated as a numeric value for calculations. This is where type conversion comes in handy.
// String to Number: Use Number().
// Number to String: Use String().
// To Boolean: Use Boolean().

//String into Number
const a1 = "10";
const a2 = "20";
console.log(Number(a1) + Number(a2));

const c1 = Number(a1);
const c2 = Number(a2);
console.log(typeof a1);
console.log(typeof a2);
console.log(typeof c1);
console.log(typeof c2);

//Number into String
const b1 = 10;
const b2 = 20;
console.log(String(b1) + String(b2));

const d1 = String(b1);
const d2 = String(b2);
console.log(typeof b1);
console.log(typeof b2);
console.log(typeof d1);
console.log(typeof d2);

//Boolean Conversion
// Any non-empty string is true.
// An empty string is false.
// The number 0 is false.
// Any other number is true.

const userNaam = "Raj";
const userUmar = 30;
const userCity = "Patna";
const userPhoneNo = 0;

console.log(Boolean(userNaam));
console.log(Boolean(userUmar));
console.log(Boolean(userCity));
console.log("");
console.log(Boolean(userPhoneNo));

//Example 1: Converting User Input from Text Area
//Consider a scenario where you get user input from a text area and need to perform arithmetic operations:
const input = "42"; // User input as a string
const numberOne = Number(input);

if (!isNaN(numberOne)) {
  console.log(numberOne + 8); // Outputs: 50
} else {
  console.log("Invalid input");
}

//Readline-Sync
//Using readline-sync to read user input from the terminal.

const userInputData = require("readline-sync");

//get user's name
const userNameIs = userInputData.question("May i know your name? ");
//console.log("Welcome " + userNameIs + " to Siwan");
console.log(`Welcome ${userNameIs} to Siwan.`);

//get user's age
const userAgeNumber = userInputData.question("May i know your Age? ");
console.log(typeof userAgeNumber);

// Check if the conversion was successful
if (!isNaN(userAgeNumber)) {
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - userAgeNumber;
  console.log(`You were born in the year ${birthYear}.`);
} else {
  console.log("Please enter a valid number for age.");
}

console.log("Thanks for letting me your age.");

//Exercise
// To reinforce your understanding, try the following:

// Create a script that takes two user inputs as strings and performs all basic arithmetic operations.
// Handle cases where the inputs are non-numeric strings and display appropriate messages.
// Experiment with different types of inputs and observe how JavaScript handles type conversion.

//Assignment
//

//Comparision: comparison and equality are different
// GreaterThan(>),
//LessThan(<),
//GreaterThan Equalto(>=),
//LessThan Equalto(<=),
//Loose Equality(==):This operator is used to compare the equality of two operands/values. If equal then the condition is true otherwise false.,
//Strict Equality(===):This operator is used to compare the equality of two operands/values with type. If both value and type are equal then the condition is true otherwise false.,
//Inequality (!=):This operator is used to compare the inequality of two operands. If equal then the condition is false otherwise true,
//Not Equality(!==):This operator is used to compare the inequality of two operands/values with type. If both value and type are not equal then the condition is true otherwise false.
console.log(2 > 3);
console.log(3 < 4);
console.log(3 >= 3);
console.log(5 <= 6);
console.log(4 !== 5);
console.log(null > 0); //false //here null becomes 0
console.log(null == 0); //false //here null is null
console.log(null >= 0); //true //here null becomes 0
console.log(null < 1); //true //here null becomes 0
//when you compare null with any number null is converted to zero so the value becomes 0
//the reson is that an equality check == and comparisons ><>=<= work differently.
//comparisons convert null to a number, treating it as 0.
//that's why (3) null>=0 is true and (1) null>0 is false.

//String
console.log("apple" > "banana"); //false
//here it will check the first character of apple with first character of banana and we all know that a comes before b so it will give false.
console.log("glow" > "glowing"); //false
console.log("glowing" > "glow"); //true
console.log("2" > 1); //true
console.log("2" > 1);
console.log("02" > 1);
//in the 4th case the graeter than operator will convert the string to number then it will comapre.

//ASCII value of A=65 & a=97.

//Equality Operator:
//Loose Equality(==), Value Check
//Strict Equality(===), Data type Check as well as Value Check
console.log("01" == 1); //true
//== doesn't check the type of value
console.log("01" === 1); //false
//=== it check the type of value as well.

console.log(null == undefined); //true
console.log(null === undefined); //false

console.log(3 === 4);
console.log(5 === 5);

//Practice Exercise
console.log(3 <= 5); //true
console.log("mango" > "banana"); //true
console.log("2" > "3"); //false
console.log(undefined == null); //true
console.log(null === undefined); //false
console.log(null < 1); //true

//Switch

//Syntax
//Switch (expression){
//case 1 :
//break;
//case 2 :
//break;
//case 3 :
//break;
//default :
//break;
//}
//Eg:
let num = 2;

switch (num) {
  case 1:
    console.log("A");
    break;
  case 2:
    console.log("B");
    break;
  case 3:
    console.log("C");
    break;
  default:
    console.log(D);
}

//Loops:
//for loop
//Syntax
//for (initialization(let i = 0);, condition(i<10);, increament/decreament/updation(i++))
//{
//console.log(i);
//}

for (let i = 0; i < 5; i = i + 1) {
  console.log(i);
}

//while loop
//Syntax
//initializatio(let i = 0);
//while(condition (i<10);){

//code-----------

//inc/dec/updation(i++);
//}

let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

//Do-while loop
//Syntax
//initialization(let i = 0);
//do{

//code---------------

//inc/dec/updation (i++);

//}while (condition (i<10);)

let k = 1;
do {
  console.log(k);
  k++;
} while (k < 10);

//Iterating through object
//for-in loop
let rectangle = {
  length: 1,
  breadth: 4,
};
for (let key in rectangle) {
  //key are reflected through key variable
  //values are reflected through rectangle[key]
  console.log(key, rectangle[key]);
}

//for-of loop
let rectangle1 = {
  length: 1,
  breadth: 4,
};
for (let key of Object.keys(rectangle1)) {
  console.log(key);
}
for (let key of Object.entries(rectangle1)) {
  console.log(key);
}

//How to check any properties is exists in any object or not.
if ("color" in rectangle) {
  console.log("Present");
} else {
  console.log("Absent");
}

if ("length" in rectangle) {
  console.log("Present");
} else {
  console.log("Absent");
}
