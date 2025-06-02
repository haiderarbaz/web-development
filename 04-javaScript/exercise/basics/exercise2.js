/** Logical Operators */

const readLineSync = require("readline-sync");

const userName = readLineSync.question("Enter your Name: ");
const userAge = readLineSync.question("Enter your Age: ");

const game = readLineSync
  .question("What you want to play? CRICKET or FOOTBALL or BADMINTON: ")
  .toUpperCase();

if (game === "CRICKET")
  if (userAge >= 14 && userAge <= 40) {
    console.log(`Hey ${userName}, You're eligible for CRICKET`);
  } else {
    console.log(`Hey ${userName}, You're Not eligible CRICKET`);
  }
else if (game === "FOOTBALL") {
  if (userAge >= 18 && userAge <= 45) {
    console.log(`Hey ${userName}, You're eligible for FOOTBALL`);
  } else {
    console.log(`Hey ${userName}, You're not eligible for FOOTBALL`);
  }
} else if (game === "BADMINTON") {
  if (userAge >= 14 && userAge <= 33) {
    console.log(`Hey ${userName}, You're eligible for BADMINTON`);
  } else {
    console.log(`Hey ${userName}, You're not eligible for BADMINTON`);
  }
} else {
  console.log(
    "Invaid entry, please enter either CRICKET or FOORTBALL or BADMINTON"
  );
}
