/*
  Task 2:
    Rewrite the function using '?' or '||'

    The following function returns true if the parameter age is greater than 18.

    Otherwise it asks for a confirmation and returns its result.

      function checkAge(age) {
        if (age > 18) {
          return true;
        } else {
          return confirm('Did parents allow you?');
        }
      }

    Rewrite it, to perform the same, but without if, in a single line.

    Make two variants of checkAge:

      i. Using a question mark operator ?
      ii. Using OR ||

*/

/* 
  i. Using a question mark operator ?
*/
const readlineSync = require("readline-sync");
function checkAge(age) {
  return age > 18 ? true : readlineSync.keyInYN("Did parents allow you?");
}
const userAge = readlineSync.questionInt("Can you verify your age? ");

const showMessage = checkAge(userAge);

console.log(showMessage);

/* 
  ii. Using OR ||
*/

function verifyAge(age) {
  return age > 18 || readlineSync.keyInYN("Did parents allow you?");
}
const visitorAge = readlineSync.questionInt("Can you verify your age? ");

const printMessage = verifyAge(visitorAge);

console.log(printMessage);
