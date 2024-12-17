//Read multiple input strings from users and print the smallest string

const readLineSync = require("readline-sync");

const input1 = readLineSync.question("Enter the first String: ");
const input2 = readLineSync.question("Enter the second String: ");
const input3 = readLineSync.question("Enter the third String: ");

if (input1.length < input2.length && input1.length < input3.length) {
  console.log(`${input1} is the smallest string.`);
} else if (input2.length < input1.length && input2.length < input3.length) {
  console.log(`${input2} is the smallest string.`);
} else if (input3.length < input1.length && input3.length < input2.length) {
  console.log(`${input3} is the smallest string.`);
} else {
  console.log("Found 2 or more strings of the same length.");
}
