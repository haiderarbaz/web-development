"use strict";

/* Function Declaration */
sayHi("Arbaz");

function sayHi(userName) {
  console.log(`Hello, ${userName}`);
}

/* Function Expression */
// greetMessage("Arbaz");

// let greetMessage = function (visitorName) {
//   console.log(`Hello, ${visitorName}`);
// };

/* 
  The above code will give an error:
    ReferenceError: Cannot access 'greetMessage' before initialization
*/

const readlineSync = require("readline-sync");
let age = readlineSync.question("What is your age? ");

// /*  conditionally declare a function */
// if (age < 18) {
//   function welcome() {
//     console.log("Hello!");
//   }
// } else {
//   function welcome() {
//     console.log("Greetings!");
//   }
// }

// welcome();
/* 
  The above code will give an error:
    ReferenceError: welcome is not defined

  Because In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

  But without strict mode it will print Hello! & Greetings! according to conditions given
  To verify it Run the code without "use strict" (but unreliable!)
*/

/* Another Example */
// if (age < 18) {
//   welcome();
//   function welcome() {
//     console.log("Hello!");
//   }
//   welcome();
// } else {
//   function welcome() {
//     console.log("Greetings!");
//   }
// }

// welcome();
/* 
  In the above code (in strict mode):

    Hello! will print two times,
      Because Function Declaration is available everywhere in the block where it's declared, OR you can say
      Function Declarations are hoisted to the top of their block
      and are available everywhere WITHIN that block

    but Greetings! will not get print,
      because Function Declarations are block-scoped and not available OUTSIDE the block where they're declared.

    The final welcome() call is OUTSIDE both the if and else blocks, so it cannot access the welcome() function declared inside either block.
*/

/*
  What can we do to make welcome visible outside of if?

    The correct approach would be to use a Function Expression and assign welcome to the variable that is declared outside of if and has the proper visibility.
*/
let welcome;

if (age < 18) {
  welcome = function () {
    console.log("Hello!");
  };
} else {
  welcome = function () {
    console.log("Greetings!");
  };
}

welcome();

/* 
  Or simplify it even further using a question mark operator ? or ternary operator:
*/

let userWelcome =
  age < 18
    ? function () {
        console.log("Hello!");
      }
    : function () {
        console.log("Greetings!");
      };

userWelcome();
