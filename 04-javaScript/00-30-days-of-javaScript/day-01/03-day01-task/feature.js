/*
    Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
*/
let currentUserName = "Wali";
let currentUserAge = 27;
const userRegister = true;
let userSubject = ["html", "css", "javascript"];
let userScore = { html: 40, css: 40, javascript: 30 };
let userAttendence = null;
let userLocation;

console.log("User name: ", currentUserName, "| Type: ", typeof currentUserName);
console.log("User age: ", currentUserAge, "| Type: ", typeof currentUserAge);
console.log("User register: ", userRegister, "| Type: ", typeof userRegister);
console.log("User subject: ", userSubject, "| Type: ", typeof userSubject);
console.log(
  "User score in html: ",
  userScore.html,
  "User score in css: ",
  userScore.css,
  "User score in javascript: ",
  userScore.javascript,
  "| Type: ",
  typeof userScore
);
console.log(
  "User attendence: ",
  userAttendence,
  "| Type: ",
  typeof userAttendence
);
console.log("User location: ", userLocation, "| Type: ", typeof userLocation);

/*
    Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
 */

console.log("\n ----Let Demonstrations----");
let userMarks = 30;
console.log(`Intial score of user is: ${userMarks}`);
userMarks = 50;
console.log(`Final score of user is: ${userMarks}`);

console.log("\n ----Const Demonstrations----");
const userMarksInHtml = 28;
console.log(`Intial score of user in html is: ${userMarksInHtml}`);

try {
  userMarksInHtml = 42;
} catch (error) {
  console.error(
    "Error when attempting to reassign user html marks: ",
    error.message
  );
}
console.log(
  `Final score of user in html after failed reaasignment attempt: ${userMarksInHtml}`
);
