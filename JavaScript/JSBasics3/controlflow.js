//if statemment
// if(condition){

// }

// if(true){
//if the condition is true the code will execute
// }
// if(false){
//if the condition is false the code will not execute
// }

//comparision operator

//<:less than, >:greater than, <=less than equalto, >=greater than equalto, ==:doubleequalto(checks only value), !=:not equal to, ===:triple equal to (it checks value as well as data type)

if (2 == "2") {
  console.log("executed");
}

if (2 === "2") {
  console.log("executed");
} else {
  console.log(false);
}

if (2 != 3) {
  console.log("executed");
} else {
  console.log(false);
}

const isUserLoggedIn = true;

if (isUserLoggedIn) {
}

const temperature = 41;
if (temperature < 50) {
  console.log("Less than 50");
}
console.log("Temperature is greater than 50");

if (temperature === 41) {
  console.log("Less than 50");
}
console.log("Temperature is greater than 50");

if (temperature === 41) {
  console.log("Less than 50");
} else {
  console.log("Temperature is greater than 50");
}

const score = 200;
if (score > 100) {
  const power = "fly";
  console.log(`User Power: ${power}`);
}

//short-hand notation

const balance = 1000;
// if (balance>500) console.log("test"), console.log("test2");
//not a good practice

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const LoggedInFromGoogle = false;
const LoggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy course");
}
if (LoggedInFromGoogle || LoggedInFromEmail) {
  console.log("User logged in");
}

//switch case

//Syntax
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = 3;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;

  default:
    console.log("default case match");
    break;
}

const month1 = "March";
switch (month1) {
  case "January":
    console.log("January");
    break;
  case "February":
    console.log("February");
    break;
  case "March":
    console.log("March");
    break;
  case "April":
    console.log("April");
    break;
  case "May":
    console.log("May");
    break;

  default:
    console.log("default case match");
    break;
}

//truthy or falsy

//falsy values:
//false, 0, -0, BigInt 0n, "", null, undefined, Nan

//truthy values:
//"0", 'false', "false", " ", [], {}, function(){} (empty function)

//how to detect array & object is empty or not.

const userEmail = [];
if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;
let val2;
val2 = null ?? 10;
let val3;
val3 = undefined ?? 10;
let val4;
val4 = null ?? 10 ?? 20;

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

//ternary operator
//condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

//loops

//for loop
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is best number");
  }
  console.log(element);
}

//Nested loops (loop insode a loop)
for (let i = 0; i <= 10; i++) {
  console.log(`Outer loop value: ${i}`);

  for (let j = 0; j < 10; j++) {
    const element = j;
    //console.log(`Inner loop value ${j} and Inner loop ${i}`);
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(`Outer loop value: ${i}`);

  for (let j = 1; j < 10; j++) {
    const element = j;
    console.log(i + "*" + j + " = " + i * j);
  }
}

//array
let myArray = ["Flash", "Batman", "Superman"];
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

//keywords
//break and continue

//break
for (let index = 1; index <= 20; index++) {
  const element = index;
  if (index == 5) {
    console.log(`Detected 5`);
    break;
  }
  console.log(`Value of index is ${index}`);
}

//continue
for (let index = 1; index <= 20; index++) {
  const element = index;
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of index is ${index}`);
}

//while loop
let index = 0;
while (index <= 20) {
  console.log(`Value of index is ${index}`);
  index = index + 2;
}

let urArray = ["Batman", "Ironman", "Thor"];
let arr = 0;
while (arr < urArray.length) {
  console.log(`Value is ${urArray[arr]}`);
  arr = arr + 1;
}

//do-while loop

let run = 1;
do {
  console.log(`run is ${run}`);
  run++;
} while (run <= 10);

let runn = 11;
do {
  console.log(`runn is ${runn}`);
  runn++;
} while (runn <= 10);
