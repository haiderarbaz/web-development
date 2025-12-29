/**
 * Logical Operator with Conditional Statement
 * 1. OR || :- Any single condition is true then OR will return true, if all condition is false then OR will return false.
 * 2. AND && :- All condition have to be true then AND will return true otherwise AND will return false.
 * 3. NOT ! :- The NOT operator reverses the Boolean value of the operand. If the operand is true, it returns false, and if the operand is false, it returns true.
 *
 *
 */

/**
 * Note: We only use OR operator for short circuiting and we don't use AND opertor for "SHORT CIRCUITING".
 */

//Exercise Example:

/** AND && */

const readLineSync = require("readline-sync");
const userName = readLineSync.question("Enter your Name: ");
const background = readLineSync
  .question("Enter your background: PCB or PCM: ")
  .toUpperCase();

if (background === "PCM") {
  const chemistryMarks = parseInt(
    readLineSync.question("Enter your Chemistry marks: ")
  );
  const physicsMarks = parseInt(
    readLineSync.question("Enter your Physics marks: ")
  );
  const mathsMarks = parseInt(
    readLineSync.question("Enter your Maths marks: ")
  );
  if (chemistryMarks > 80 && physicsMarks > 80 && mathsMarks > 80) {
    console.log(`Hey ${userName}, You're eligible for Engineering`);
  } else {
    console.log(`Hey ${userName}, You're not eligible for Engineering`);
  }
} else if (background === "PCB") {
  const chemistryMarks = parseInt(
    readLineSync.question("Enter your Chemistry marks: ")
  );
  const physicsMarks = parseInt(
    readLineSync.question("Enter your Physics marks: ")
  );
  const biologyMarks = parseInt(
    readLineSync.question("Enetr your Biology marks: ")
  );
  if (chemistryMarks > 80 && physicsMarks > 80 && biologyMarks > 80) {
    console.log(`Hey ${userName}, Hey, You're eligible for Medical.`);
  } else {
    console.log(`Hey ${userName}, You're not eligible for medicals.`);
  }
} else {
  console.log("Invalid entry. Please enter either 'PCM' or 'PCB'.");
}

//Truthy & Falsy

//And will always search for the first falsy value, it doesn't search for truthy value and it will return the first falsy value and if there is no falsy vaue then it will return the last truthy value.

const firstName = "Arbaz";
const lastName = "Haider";
const nickNaam = "Arbu";
let officialNaam;
const petName = null;

const userNaam = firstName && lastName;
console.log(`Name - ${userNaam}`);

const userNaam1 = firstName && nickNaam;
console.log(`Name - ${userNaam1}`);

const userNaam2 = firstName && officialNaam;
console.log(`Name - ${userNaam2}`);

const userNaam3 = firstName && petName;
console.log(`Name - ${userNaam3}`);

const userNaam4 = firstName && lastName && "Siwan"; //Short circuiting
console.log(`Name - ${userNaam4}`);

/** OR || */

if (background === "PCM") {
  const chemistryMarks = parseInt(
    readLineSync.question("Enter your Chemistry marks: ")
  );
  const physicsMarks = parseInt(
    readLineSync.question("Enter your Physics marks: ")
  );
  const mathsMarks = parseInt(
    readLineSync.question("Enter your Maths marks: ")
  );
  if (chemistryMarks > 80 || physicsMarks > 80 || mathsMarks > 80) {
    console.log(`Hey ${userName}, You're eligible for Engineering`);
  } else {
    console.log(`Hey ${userName}, You're not eligible for Engineering`);
  }
} else if (background === "PCB") {
  const chemistryMarks = parseInt(
    readLineSync.question("Enter your Chemistry marks: ")
  );
  const physicsMarks = parseInt(
    readLineSync.question("Enter your Physics marks: ")
  );
  const biologyMarks = parseInt(
    readLineSync.question("Enetr your Biology marks: ")
  );
  if (chemistryMarks > 80 || physicsMarks > 80 || biologyMarks > 80) {
    console.log(`Hey ${userName}, Hey, You're eligible for Medical.`);
  } else {
    console.log(`Hey ${userName}, You're not eligible for medicals.`);
  }
} else {
  console.log("Invalid entry. Please enter either 'PCM' or 'PCB'.");
}

//Truthy & Falsy

//In expression OR will search for first truthy value if it gets first truthy value it will return that value to the variable or it will log that value.
//If it doesn't find the first truthy value if all the values are falsy values it will return the last falsy values.

//Example:
//1.)
const fName0 = "Arbaz";
const lName0 = "Haider";
const nickName0 = "Arbu";
const userName0 = fName0 || lName0 || nickName0;
console.log(`Name - ${userName0}`);

//2.)
const fName1 = "";
const lName1 = "";
const nickName1 = "Arbu";
const userName1 = fName1 || lName1 || nickName1;
console.log(`Name - ${userName1}`);

//3.)
const fName2 = null;
const lName2 = undefined;
const nickName2 = "";
const userName2 = fName2 || lName2 || nickName2;
console.log(`Name - ${userName2}`);

//4.)
const fName3 = "";
const lName3 = undefined;
const nickName3 = null;
const userName3 = fName3 || lName3 || nickName3;
console.log(`Name - ${userName3}`);

//5.)
const fName4 = "";
const lName4 = null;
const nickName4 = undefined;
const userName4 = fName4 || lName4 || nickName4;
console.log(`Name - ${userName4}`);

//6.)
const fName5 = null;
const lName5 = "";
const nickName5 = undefined;
const userName5 = fName5 || lName5 || nickName5 || "Siwan";
console.log(`Name - ${userName5}`);

let a = 12;
let b;
let c = 3;
let d = null;
let e = "";

console.log(a + b); //NaN
console.log(a + (b || 0)); //12
console.log(a + d); //12
console.log(a + (d || 0)); //12
console.log(a + e); //12
console.log(a + (e || 0)); //12
console.log(a + (c || 0)); //15

/** NOT ! */

const isStudentEligible = false;
if (!isStudentEligible) {
  console.log(isStudentEligible);
  console.log("You're eligible");
} else {
  console.log("You're not eligible");
}

//Bitwise
//Bitwise AND
//Bitwise OR
