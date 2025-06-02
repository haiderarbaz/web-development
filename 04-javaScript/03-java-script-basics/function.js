//instructor hitesh
//about function

function sayMyName() {
  console.log("A");
  console.log("R");
  console.log("B");
  console.log("A");
  console.log("Z");
}

sayMyName();

//sayMyName is function name or you can say it's a refrence
//() execute

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}
addTwoNumbers();
addTwoNumbers(3, 4);
addTwoNumbers(3, "4");
addTwoNumbers(3, "a");
addTwoNumbers(3, null);

const result = addTwoNumbers(3, 5);
console.log(result);
console.log("Result is: ", result);

function addTwoNumbers0(number1, number2) {
  let result0 = number1 + number2;
  return result0;
}
const result0 = addTwoNumbers0(5, 5);
console.log(result0);
console.log("Result0 is: ", result0);

function addTwoNumbers1(number1, number2) {
  return number1 + number2;
}
//after returning the value you can restore it in some variable
//if ther any console below return, so after return statement no further code will execute in that scope
const result1 = addTwoNumbers1(8, 5);
console.log("Result1 is: ", result1);

function logUserMessage(username) {
  return `${username} just logged in`;
}
logUserMessage("arbaz"); //this will only pass the argument
console.log(logUserMessage("arbaz")); // this will pass the argument as well as it will print.
console.log(logUserMessage()); //output will be undefined just logged in

function loginUserMessage(username) {
  //   if (!username) {
  //     console.log("Please enter a username");
  //     return;
  //   }
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage("Arbaz"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());

//back tick is string interpolation

function loginUserMessage(username = "Jack") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage("Arbaz"));

//rest operator(...num1)
function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 400, 500, 200));

function calculateCartPrices(val1, val2, ...num1) {
  return num1;
}
console.log(calculateCartPrices(200, 400, 500, 200));
//here 1st and second value will be going to val1 & val2 and result will be going to rest operator

//how to pass object in function
const userArbaz = {
  username: "Arbaz",
  age: 27,
};
function handleObject(anyobject) {
  console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}
handleObject(userArbaz);
handleObject({
  username: "Sam",
  age: 30,
});

//how to pass array in function
const toArray = [200, 400, 600, 800];
function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(toArray));
console.log(returnSecondValue([40, 50, 90, 80]));

function one() {
  const username = "Arbaz";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //console.log(website);

  two();
}

one();

//child function can access parent element
//but parent can't access child elements

if (true) {
  const username1 = "Arbaz";
  if (username1 === "Arbaz") {
    const website1 = " youtube";
    console.log(username1 + website1);
  }
  //console.log(website1); // first error
}
//console.log(username1); //second error

//hoisting
function addone(num) {
  return num + 1;
}
addone();

console.log(addone1(4));
function addone1(num) {
  return num + 1;
}

const addtwo = function (num) {
  return num + 2;
};
addtwo();

// addtwo1();
// const addtwo1 = function (num) {
//   return num + 2;
// };

//for the above code will get error because we Cannot access 'addtwo1' before initialization

//this keyword
//THIS keyword refers current context

const user = {
  username: "Arbaz",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};
// user.welcomeMessage();
// user.username = "SAM";
// user.welcomeMessage();
console.log(this);

//in node environment this keyword will refer to empty object.

//in browser environment this keyword will refer to window object.

//window is the global object is browser.

function chai() {
  console.log(this);
}
chai();

function chai1() {
  let username = "Arbaz";
  console.log(this.username);
}
chai1();

//Arrow function
const chai2 = () => {
  let username = "Harry";
  console.log(this.username);
};
chai2();

const chai3 = () => {
  let username = "Harry";
  console.log(this);
};
chai3();

//first general way (explitily return)
const addFour = (num1, num2) => {
  return num1 + num2;
};
console.log(addFour(3, 4));
//if there is curly braces then you have to mention return keyword

//2nd way implicit return
const addFive = (num1, num2) => num1 + num2;
console.log(addFive(3, 3));

//3rd way
const addSix = (num1, num2) => num1 + num2;
console.log(addSix(2, 3));

//in case if you want to returnn an object
const addSid = (num1, num2) => ({
  username: "Arbaz",
});
console.log(addSid(2, 3));

//iife (Immediately invoked function expressions)

(function chaii() {
  //NAMED IIFE
  console.log(`DB CONNECTED`);
})();

((NAME) => {
  console.log(`DB CONNECTED TWO ${NAME}`);
})("hITESH");

//EXECUTION CONTEXT & CALL STACK

//EXECUTION CONTEXT
//JAVASCRIPT EXECUTION CONTEXT

//1.)GLOBAL EXECUTION CONTEXT: whenever a global execution context will create it will refer to this keyword.

//2.)FUNCTION EXECUTION CONTEXT

//in mongose there is one more execution context
//EVAL EXECUTION CONTEXT: it is a property of global object

//javascript run program in two phases

//How a javascript code execute
//1.)Memory creation phase:it will allocate the memory or varibale
//2.)Execution phase
