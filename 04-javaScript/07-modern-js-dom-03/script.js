"use strict";

console.log("Hi ! How you doing?");
console.log("Today Topic is about Peformance & Event Loop");

//Performance
//How to measure speed of code? if we have two snippets of code we have to find out, which snippets of code will run fast.
//How to write efficient and performing code? Best Practice

//standard way to measure how long your code takes to run
//for this we use method performance.now()
//performance.now() method return a time stamp and on the basis of this time stamp we can know how much time the code is taking to run.

//adding 100 para

const t1 = performance.now();
for (let i = 1; i <= 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is para " + i;

  document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("Time took " + (t2 - t1) + " ms");

//optimising a bit

const t3 = performance.now();
let myDiv = document.createElement("div");

for (let i = 1; i <= 100; i++) {
  let newElement1 = document.createElement("p");
  newElement1.textContent = "This is about " + i;

  myDiv.appendChild(newElement1);
}
document.body.appendChild(myDiv); // 100 Reflow & 100 Repaint
const t4 = performance.now();
console.log("Time took " + (t4 - t3) + " ms");

//Reflow
//Reflow happens when a browser recalculates the position and geometry of certain parts of a webpage, such as after an update on an interactive site.
//It is the process of calculating the dimensions and position of page element these are the computationaly intensive task.

//Repaint
//This tends to be followed by repainting, which is when the browser redraws the webpage to show the resulting visual updates.
//It is the process of drawing pixels to the screen up.
//Repaint is faster than reflow.

//Document Fragement
//The DocumentFragment interface represents a minimal document object that has no parent.
//It is used as a lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document. The key difference is due to the fact that the document fragment isn't part of the active document tree structure. Changes made to the fragment don't affect the document.
//There is zero/no reflow and repaint for the addition we do in document fragement.
//When we will add this document fragement in actual document then 1 reflow and 1 repaint will be happen.

//Using Fragement we can enhance the code

const t5 = performance.now();
let fragement = document.createDocumentFragment();
for (let i = 1; i <= 100; i++) {
  let newElement2 = document.createElement("h1");
  newElement2.textContent = "This is heading " + i;

  fragement.appendChild(newElement2);
}
document.body.appendChild(fragement); // 1 Reflow & 1 Repaint

const t6 = performance.now();
console.log("Time Took " + (t6 - t5) + " ms");
//We can use this in case when have to update the DOM multiple time.
//This is the optimal practice & best practice, because here the no. of reflow and no. of repaint has less normal case and nearly in negligible.

//Single-Threading
//A single-threaded language is one that can execute only one task at a time. The program will execute the tasks in sequence, and each task must complete before the next task starts.
//JavaScript is a single threaded langauage. And it process one command at a time.

//What does it mean when we say JavaScript is single-threaded?
//When we say that JavaScript is single-threaded, it means that JavaScript executes code one line at a time, in a sequence. The main thread, where all JavaScript code runs, can only do one task at a time, and there is no way to run multiple pieces of code in parallel on this thread.

//This might sound limiting, but JavaScript’s design is well-suited for handling many tasks efficiently, thanks to the event loop.

function addPara() {
  let para = document.createElement("h2");
  para.textContent = "JS is Single Threaded Language";

  document.body.appendChild(para);
}

function appendNewMessage() {
  let para = document.createElement("h3");
  para.textContent = "Kya haal tussi";

  document.body.appendChild(para);
}

addPara();
appendNewMessage();

//Observation:
//Run-to-complition nature of code.
//JS doesn't execute multiple lines/functions at the same time.

//Call Stack
//A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.
//OR
//It keeps track of the order in which functions are called and manages the context of each function's execution.
//Here's what it does: Remembering where to go back: When a function is called, the call stack remembers where to go back to when that function is done.
//It operates as a Last In, First Out (LIFO) data structure, meaning that the last function called is the first one to be resolved.

//Points:
//When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
//Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
//When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
//If the stack takes up more space than it was assigned, a "stack overflow" error is thrown.

//Example:
function greeting() {
  let hi = document.createElement("h4");
  sayHi();
  hi.textContent = "Hey ! Where Are You?";
}
function sayHi() {
  return "Hi!";
}

// Invoke the `greeting` function
greeting();

//The call stack will be empty at the very beginning, and the code above would be executed like this:
//When the code loads in memory, the global execution context gets pushed in the stack.
//Ignore all functions, until it reaches the greeting() function invocation.
//Add the greeting() function to the call stack list, and we have:
// - greeting
//Execute all lines of code inside the greeting() function.
//Get to the sayHi() function invocation.
//Add the sayHi() function to the call stack list, like:
// - sayHi
// - greeting
//Execute all lines of code inside the sayHi() function, until reaches its end.
//Return execution to the line that invoked sayHi() and continue executing the rest of the greeting() function.
//Delete the sayHi() function from our call stack list. Now the call stack looks like:
// - greeting
//When everything inside the greeting() function has been executed, return to its invoking line to continue executing the rest of the JS code.
//Delete the greeting() function from the call stack list. Once again, the call stack become empty.

//Overall Summary:
//we start with an empty Call Stack. Whenever we invoke a function, it is automatically added to the Call Stack. Once the function has executed all of its code, it is automatically removed from the Call Stack. Ultimately, the Stack is empty again.

function a() {
  console.log("Hi");
}
function b() {
  console.log("Hello");
  a();
}
a();
b();

//Refer image call stack for visual understanding

//Event Loop
//An event loop is something that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty.
//The event loop is the secret by which JavaScript gives us an illusion of being multithreaded even though it is single-threaded.

//For illusion demonstration the functioning of the event loop well; refer to the picture event loop.

//How do Event loops work?
// 1.) Call Stack:
//JavaScript uses a call stack to keep track of the currently executing function (where the program is in its execution).
// 2.) Callback Queue:
//Asynchronous operations, such as I/O operations or timers, are handled by the browser or Node.js runtime. When these operations are complete, corresponding functions (callbacks) are placed in the callback queue.
// 3.) Event Loop:
//The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first function from the callback queue and pushes it onto the call stack for execution.
// 4.) Execution:
//The function on top of the call stack is executed. If this function contains asynchronous code, it might initiate further asynchronous operations.
// 5.) Callback Execution:
//When an asynchronous operation is complete, its callback is placed in the callback queue.
// 6.) Repeat:
//The event loop continues this process, ensuring that the call stack is always empty before taking the next function from the callback queue.

//What is Synchronous And Asynchronous?
//Synchronous is a blocking architecture, so the execution of each operation depends on completing the one before it.
//Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another. Tasks can run simultaneously.

//What is Synchronous JavaScript?
//In synchronous programming, operations are performed one after the other, in sequence. So, basically each line of code waits for the previous one to finish before proceeding to the next. This means that the program executes in a predictable, linear order, with each task being completed before the next one starts.

//Example: In this example, we have shown the synchronous nature of JavaScript.
console.log("Hi");
console.log("Geek");
console.log("How are you?");
//Example:
console.log("Hey! How you doing?");

function sync() {
  console.log("first");
}
sync();

console.log("second");

//What is Asynchronous JavaScript?
//Asynchronous programming, on the other hand, allows multiple tasks to run independently of each other. In asynchronous code, a task can be initiated, and while waiting for it to complete, other tasks can proceed. This non-blocking nature helps improve performance and responsiveness, especially in web applications.

//Example: In this example, we have shown the Asynchronous nature of JavaScript.
console.log("Hi");

setTimeout(() => {
  console.log("Hello");
}, 2000);

console.log("End");
//Example:
setTimeout(function () {
  console.log("third");
}, 5000);

console.log("Hey! How you doing?");

function sync() {
  console.log("first");
}
sync();

console.log("second");
//Features of async code
//Clean and Concise
//Eassier debugging
//Non-blocking OR Independent processes
//Asynchronous code can send multiple requests to a server at once, increasing throughput.
//Asynchronous code allows multiple processes to run independently without blocking each other.
//Better Error handling
//Error handling is important for providing a good user experience. You can use try/catch blocks to catch exceptions thrown by rejected promises. You can also use error-first callbacks, which pass an error object as the first parameter to a callback function.
//Concurrent execution
//Asynchronous code enables programs to execute concurrently, which can maximize system resource utilization.
//Callbacks
//Callbacks are a type of function that can execute a block of code after another function has executed.
//Promises
//Promises allow code to wait for a function to return a value.
//Async-await
//This feature in JavaScript makes asynchronous code easier to write and read. It's built on top of Promises and allows developers to write asynchronous code that behaves like synchronous code.
//Event loop
//The event loop feature measures the progress of tasks and automatically starts the next task once it sees progress.
//However, asynchronous programming can also have some limitations, including:
//Some tasks may fail.
//Using async can be an overhead if a service calls a database that cannot scale.
//Development can be cumbersome due to a lot of callbacks and recursive functions.
//Search engines may have difficulty crawling web apps with asynchronous loading.
//Code can be complex and difficult to understand.

//setTimeOut() Method
//JavaScript setTimeout() method allows you to schedule the execution of a function or the evaluation of a code after a specified delay.
//The setTimeout() method calls a function after several milliseconds. setTimeout() is for executing a function once after a specified delay.

//Syntax:
//setTimeout(function, delay);

//Parameters:
//function: The function or code snippet to be executed after the specified delay.
//delay: The time, in milliseconds, to wait before executing the function.
//Return Value:
//Returns a Number which is the id of the timer. Use this id with clearTimeout(id) to cancel the timer.

//Example:
//Example 1: Here, the greet function will be executed after a delay of 2000 milliseconds (2 seconds).

function greet() {
  console.log("Hello, world!");
}
// Call the greet function after
// 2000 milliseconds (2 seconds)
setTimeout(greet, 2000);

//Example 2: Below is the example of popping an up alert, 2 seconds(2000ms) after the user presses the click me button.
onclick = "setTimeout(home, 2000);" > "Press me";
function home() {
  alert("Welcome to Home");
}

//Exaple 3:
setTimeout(function () {
  console.log("Hey ! How You Doing");
}),
  5000;

//Note: We can stop the execution of the setTimeout() function by using a method called as clearTimeout() or by closing the window.
//Refer GeeksforGeeks for example.

//ZERO DELAYS: Majorly Used, Read about this on MDN, Stack Overflow, Median Article and check Philip Robert talk abou this or not in his 26 mminuets video.

//Zero Delays:
//Zero delay doesn't mean the call back will fire-off after zero milliseconds. Calling setTimeout with a delay of 0 (zero) milliseconds doesn't execute the callback function after the given interval.
//The execution depends on the number of waiting tasks in the queue. In the example below, the message "this is just a message" will be written to the console before the message in the callback gets processed, because the delay is the minimum time required for the runtime to process the request (not a guaranteed time).
//The setTimeout needs to wait for all the code for queued messages to complete even though you specified a particular time limit for your setTimeout.

setTimeout(function () {
  console.log("Hey ! How You Doing");
}),
  0;
//Whenever you're trying to defer something until the stack is clear

(() => {
  console.log("this is the start");

  setTimeout(() => {
    console.log("Callback 1: this is a msg from call back");
  }); // has a default time value of 0

  console.log("this is just a message");

  setTimeout(() => {
    console.log("Callback 2: this is a msg from call back");
  }, 0);

  console.log("this is the end");
})();

// "this is the start"
// "this is just a message"
// "this is the end"
// "Callback 1: this is a msg from call back"
// "Callback 2: this is a msg from call back"

//Memory allocation in JavaScript

//Heap Memory
//This is where JavaScript stores objects and data that are dynamically allocated. Memory in the heap is allocated in an unordered way, which means data can be stored at any available location.
//All Non-Primitive Datatype(Refrence) stored in heap.

//Stack Memory
//Stack memory is used to keep track of function calls. It works in a last-in, first-out (LIFO) manner, meaning the last function that gets pushed onto the stack is the first one to be popped off when it’s done.
//All Primitive Datatype stored in stack

//Ex:
let movieName = "Batman Begins";
let anotherMovie = movieName;
anotherMovie = "Dark Knights";
console.log(movieName);
console.log(anotherMovie);
//Stack

let userOne = {
  userEmail: "haiderarbaz@gmail.com",
  upi: "user@ybl",
};
let userTwo = userOne;
userTwo.email = "arbazhaider@gmail.com";
console.log(userOne);
console.log(userTwo);

//Refer image Memory Allocation for visual understanding
