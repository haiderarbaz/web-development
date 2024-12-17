/** Let's create a scenario where we use logical operators to check the eligibility of a student for different competitions based on their age and grade. */

const readLineSync = require("readline-sync");
const userAge = Number(readLineSync.question("Enter Your Age: "));
const userGrade = readLineSync.question("Enter Your Grade: ");

if (userAge > 20 && userAge < 30) {
  console.log("You can play domestic cricket.");
} else {
  console.log("You cannot play domestic cricket.");
}

if (userGrade >= 8 && userGrade <= 10) {
  console.log("You are eligible for the competition.");
} else {
  console.log("You are not eligible for the competition.");
}

/** Combining with Ternary Operators: */

const ageResult =
  userAge > 20 && userAge < 30
    ? "You can play domestic cricket."
    : "You cannot play domestic cricket.";
const gradeResult =
  userGrade >= 8 && userGrade <= 10
    ? "You are eligible for the competition."
    : "You are not eligible for the competition.";

console.log(ageResult);
console.log(gradeResult);
