const readlineSync = require("readline-sync");
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return readlineSync.keyInYN("Do you have permission from your parents? ");
    // let userReply = readlineSync.question(
    //   "Do you have permission from your parents?"
    // );
    // if (userReply == "Yes") {
    //   return true;
    // } else {
    //   return false;
    // }
  }
}

let age = readlineSync.questionInt("How old are you? ");
let hasAccess = checkAge(age);

if (hasAccess) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

function showMovie(hasAccess) {
  if (!hasAccess) {
    console.log("Cannot show movie - access denied");
    return;
  }

  console.log("Showing you the movie");
}
showMovie(hasAccess);
