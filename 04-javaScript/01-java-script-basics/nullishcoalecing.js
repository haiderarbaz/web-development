/** 4. NULLISH COALESCING ?? :-The Nullish Coalescing operator returns the right-hand operand when the left-hand operand is null or undefined; otherwise, it returns the left-hand operand. OR
 This operator returns the right hand value if the left hand value is null or undefined. If not null or undefined then it will return left hand value. 
*/

//NOTE:
// The nullish coalescing operator (??) is a powerful tool in JavaScript, especially useful for dealing with default values and avoiding the pitfalls of the OR (||) operator treating all falsy values equally. This makes your code more robust and intentions clearer when dealing with potential null or undefined values.

// Nullish Coalescing (??) Operator
const score = null;
const defaultScore = 50;
const finalScore = score ?? defaultScore;

console.log(finalScore); // Output: 50

const score0 = undefined;
const defaultScore0 = 50;
const finalScore0 = score0 ?? defaultScore0;

console.log(finalScore0); // Output: 50

const score1 = 60;
const defaultScore1 = 50;
const finalScore1 = score1 ?? defaultScore1;

console.log(finalScore1); // Output:

//Before, setting default values for undefined and null variables required the use of if statement or the Logical OR operator "||" as shown below:
function foo(bar) {
  bar = bar || 42;
  console.log(bar);
}

foo();

function foo1(bar) {
  bar = bar || 42;
  console.log(bar);
}

foo1(0);

//There are values in JavaScript like 0 and an empty string that are logically false by nature. These values may change the expected behavior of the programs written in JavaScript. All the reoccurring problems led to the development of the Nullish Coalescing Operator. The Nullish Coalescing Operator is defined by two adjacent question marks ?? and its use is as follows:

//Syntax:
//variable ?? default_value

//Examples: If the passed variable is either null or undefined and only if it is those two values, the default value would be returned. In all other cases including 0, empty string, or false, the value of the variable is returned and not the default value.

//1:
function foo(bar) {
  bar = bar ?? 42;
  console.log(bar);
}

foo(); // 42
foo(0); // 0

//2: The more common use case is to set default values for JSON objects as follows.

const foo2 = {
  bar: 0,
};

const valueBar = foo.bar ?? 80;
const valueBaz = foo.baz ?? 80;

// Value of bar: 0
console.log("Value of bar: ", valueBar);

// Value of bar: 42
console.log("Value of baz: ", valueBaz);

//Practical Usage of Nullish Coalescing
//Using nullish coalescing is particularly useful in scenarios where you need to assign default values to variables or function parameters when the expected values could be null or undefined, but other falsy values (like 0, false, or "") should be treated as valid values.

//Example: Default Values in Function Parameters

function greet(name) {
  const greeting = name ?? "Stranger";
  console.log(`Hello, ${greeting}!`);
}

greet("Alice"); // Output: Hello, Alice!
greet(null); // Output: Hello, Stranger!
greet(undefined); // Output: Hello, Stranger!
greet(""); // Output: Hello, !
greet(0); // Output: Hello, 0!

//In the above example, null and undefined trigger the default value "Stranger", but other falsy values do not.

// Nullish Coalescing (??) VS OR Operator (||)

const fName6 = "Arbaz";

console.log(fName6 ?? "Arbaz Haider"); //Arbaz

//Nullish Coalescing will will give the value "Arbaz Haider" if the fName6 is either null or undefined.
let fName7;
console.log(fName7 ?? "Arbaz HAider"); //undefined

let fName8 = null;
console.log(fName8 ?? "Arbaz Haider"); //null

let fName9 = "";
console.log(fName9 ?? "Arbaz Haider"); //""

const j = 0;
console.log(j ?? 1); //0
