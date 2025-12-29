const readlineSync = require("readline-sync");

function askQuestion(question, callback) {
  let answer = readlineSync.question(question);
  callback(answer);
}

askQuestion("What's your name? ", function (name) {
  console.log(`Hello, ${name}!`);
});
