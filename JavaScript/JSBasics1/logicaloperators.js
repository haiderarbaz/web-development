/**
 * Logical Operator with Conditional Statement
 * 1. OR || :- Any single condition is true then OR will return true, if all condition is false then OR will return false.
 * 2. AND && :- All condition have to be true then AND will return true otherwise AND will return false.
 * 3. NOT !
 * 4. NULLISH COALESCING ??
 *
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
