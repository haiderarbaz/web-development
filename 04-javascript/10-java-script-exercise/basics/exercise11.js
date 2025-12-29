/**
 * users enter's a number if the number is gretaer than 50 ask the user to enter a less than 50 number.
 */

const readlinesync = require("readline-sync");

let number = readlinesync.question("Enter a number less thn 50: ");

while (number >= 50) {
  number = readlinesync.question("Plese enter a number leass than 50.");
}
console.log("Your input is correct.");
