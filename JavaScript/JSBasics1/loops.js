//Loops: Loops are fundamental constructs in programming that allow us to execute a block of code repeatedly.

//for loop

//Syntax:

// for (initialization(let i = 0);, condition(i<10);, increament/decreament/updation(i++))
// {
// console.log(i);
// }

for (let i = 0; i < 5; i = i + 1) {
  console.log(i);
  console.log("Hello.....!!!!");
}

// Detailed Explanation:
// Initialization: let i = 0 sets the starting value of i.
// Condition: i < 10 is checked. If true, the loop continues.
// Code Execution: console.log("Hello") is executed.
// Increment: i++ increases i by 1.
// Steps 2-4 are repeated until the condition i < 10 is false.

console.log("loop execution done!!!");

//count and print every characters of name is a separate line using for loop

//first way
const myName = "Arbaz Haider";
//console.log(myName[4]);
for (let i = 0; i < myName.length; i++) {
  let element = myName[i];
  console.log(element);
}

//second way
const hisName = "Faizan Ali";
const stringLength = hisName.length;
for (let i = 0; i < stringLength; i++) {
  console.log(hisName[i]);
}

//nested for loop

//Print atable of 1 to 10

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("----------");
}

//while loop

//Syntax

// initializatio(let i = 0);
// while(condition (i<10);){

// code-----------

// inc/dec/updation(i++);
// }

let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

//Do-while loop: The do while loop is similar to the while loop, but it guarantees that the code inside the loop is executed at least once, even if the condition is false.

//The key difference between the while loop and the do while loop is that the do while loop will execute the code inside the loop at least once, even if the condition is initially false.

//Syntax

// initialization(let i = 0);
// do{

// code---------------

// inc/dec/updation (i++);

// }while (condition (i<10);)

let k = 1;
do {
  console.log(k);
  k++;
} while (k < 10);

//Iterating through object
//for-in loop
let rectangle = {
  length: 1,
  breadth: 4,
};
for (let key in rectangle) {
  //key are reflected through key variable
  //values are reflected through rectangle[key]
  console.log(key, rectangle[key]);
}

//for-of loop
let rectangle1 = {
  length: 1,
  breadth: 4,
};
for (let key of Object.keys(rectangle1)) {
  console.log(key);
}
for (let key of Object.entries(rectangle1)) {
  console.log(key);
}

//How to check any properties is exists in any object or not.
if ("color" in rectangle) {
  console.log("Present");
} else {
  console.log("Absent");
}

if ("length" in rectangle) {
  console.log("Present");
} else {
  console.log("Absent");
}
