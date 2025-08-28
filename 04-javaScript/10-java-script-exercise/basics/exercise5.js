/** Combining Multiple Conditions

Check eligibility for different grades based on total marks. */

const readLineSync = require("readline-sync");
let totalMarks = readLineSync.question("Enter Your Marks: ");

const result =
  totalMarks < 40
    ? "You need to work hard."
    : totalMarks < 60
    ? "B grade"
    : totalMarks < 75
    ? "A grade"
    : totalMarks < 85
    ? "A+ grade"
    : "Genius";

console.log(result);
