/*
  Task 1:
    Rewrite with arrow functions

    Replace Function Expressions with arrow functions in the code below:

      function ask(question, yes, no) {
      if (confirm(question)) yes();
      else no();
      }

      ask(
        "Do you agree?",
        function() { alert("You agreed."); },
        function() { alert("You canceled the execution."); }
      );

*/
// const readlineSync = require("readline-sync");
const ask = (question, yes, no) => {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
};
ask(
  "Do you agree? ",
  () => console.log("You Agreed!"),
  () => console.log("You canceled the execution.")
);
