"use strict";

console.log("Hey Arbaz");

// In JavaScript, primitive data types include strings, numbers, booleans, undefined, and null. However, non-primitive data types, such as arrays, provide a way to store and manage collections of data efficiently. This guide will explain the use of arrays, their advantages, and practical applications.

// Why Use Non-Primitive Data Types?
// Consider a scenario where you need to store the names of 60 students. Using individual variables for each name would be inefficient and cumbersome

// let student1 = "Yuji";
// let student2 = "Megumi";
// let student3 = "Gojo";
// let student4 = "Sukuna";
// // ... and so on up to 60 students

// Instead, arrays allow us to store multiple items in a single variable, making the code more manageable and reducing memory usage.

// Array
// An array is a collection of different items. OR, An array in JavaScript is a data structure used to store multiple values in a single variable. It can hold various data types and allows for dynamic resizing. Elements are accessed by their index, starting from 0.
// We have two ways to create JavaScript Arrays: using the Array constructor or the shorthand array literal syntax, which is just square brackets. Arrays are flexible in size, so they can grow or shrink as you add or remove elements.

// Array Declaration / Creation

// You can create an array using square brackets [] and separate items with commas:

let numbers = [1, 3, 5, 7];
console.log(numbers);

let studentsName = ["Yuji", "Megumi", "Gojo", "Sukuna"];
console.log(studentsName);

// Adding Different Types of Data
// Arrays can store multiple data types, including numbers, strings, other arrays, and objects:
// We can add array inside an array
// We can add object inside an array

let mixedArray = [
  "Gojo Satoru",
  42,
  [1, 2, 3],
  { schoolName: "Tokyo Jujutsu High" },
];
console.log(mixedArray);

// There are basically two ways to declare an array i.e. Array Literal and Array Constructor.

// 1.) Creating an Array using Array Literal
// Creating an array using array literal involves using square brackets [] to define and initialize the array. This method is concise and widely preferred for its simplicity.
// Syntax:
// let arrayName = [value1, value2, ...];
// Eg:
// Creating an Empty Array
let names = [];
console.log(names);

// Creating an Array and Initializing with Values
let courses = ["HTML", "CSS", "Javascript", "React"];
console.log(courses);

// 2.) Creating an Array using JavaScript new Keyword (Array Constructor)
// The “Array Constructor” refers to a method of creating arrays by invoking the Array constructor function. This approach allows for dynamic initialization and can be used to create arrays with a specified length or elements.
// Syntax:
// let arrayName = new Array();
// Eg:
// Creating and Initializing an array with values
let courses0 = new Array("HTML", "CSS", "Javascript", "React");
console.log(courses0);

// Basic Operations on JavaScript Arrays

// 1.)Accessing Elements of an Array--------------------------
// Any element in the array can be accessed using the index number. The index in the arrays starts with 0.

// Accessing Array Elements

console.log(courses[0]); //'HTML'
console.log(courses[1]); //'CSS'

console.log(studentsName[0]);
console.log(studentsName[1]);
console.log(studentsName[2]);
console.log(studentsName[3]);

// Iterating Over Arrays
// Using a For Loop
// You can iterate over an array using a for loop:
for (let i = 0; i < studentsName.length; i++) {
  console.log(i);
}

// to get element of the array
// for let of
for (let name of studentsName) {
  console.log(name);
}

// Using a For-In Loop
// The for-in loop iterates over the indices of the array:
// to get index number of the element of the array
// for let in

for (let index in studentsName) {
  console.log(index);
}

// Accessing the First Element of an Array
// The array indexing starts from 0, so we can access first element of array using the index number.
let firstItem = courses[0];
console.log("First Item: ", firstItem); //First Itme: HTML

// Accessing the Last Element of an Array
// We can access the last array element using [array.length – 1] index number.
let lastItem = courses[courses.length - 1];
console.log("Last Item: ", lastItem); //Last Item: React

// 2.)Modifying the Array Elements----------------------------
// Elements in an array can be modified by assigning a new value to their corresponding index.
courses[1] = "Bootstrap";
console.log(courses);

// 3.)Adding/Insertion Elements to an array-------------------------
// Elements can be added to the array using methods like unshift(), push(), Splice()

// A.)Adding/Insertion in Begining, unshift();
console.log(numbers.unshift(8));
console.log(numbers);

// B.)Adding/Insertion in End, push(); It will add/insert at the end  and it can take more than one arguments.

studentsName.push("Nobara");
console.log(studentsName);

studentsName.push("Toge", "Tsukumo");
console.log(studentsName);

console.log(numbers.push(9));
console.log(numbers);

let fruits = ["Apple", "Banana", "Carrot"];
console.log("Before Push - ", fruits);

fruits.push("Dragon Fruit");
console.log("After push - ", fruits);

// C.)Adding/Insertion in Middle
console.log(numbers.splice(2, 0, "a", "b", "c"));
console.log(numbers);

// 4.)Searching an element of an array--------------------------

// A.)Primitives

console.log(numbers.indexOf(6)); //-1; if number is not present in array then the output will be -1.
console.log(numbers.indexOf(3)); //1; if number is present in array then the output will be -1.

// if we want to check a number is exists in an array or not
// First Method
if (numbers.indexOf(4) != -1);
console.log("Pesent"); //Present

// Second Method //**Best Practice**
console.log(numbers.includes(7)); //true

// Advanced Method
// 2 is search element and 3 is idicating index number from which we will start searching of 2.
console.log(numbers.indexOf(2, 3)); //-1

// B.)Objects/Refrences

// Call Back Function

// Array of Object
let courses1 = [
  { no: 1, naam: "PCM" },
  { no: 2, naam: "PCB" },
];
console.log(courses1);

// When we are working with object don't use indexOf method, we cannot be able to find out the object is exists or not.
console.log(courses.indexOf({ no: 1, coursename: "PCM" })); //-1

// instead of indexOf method use includes method
console.log(courses.includes({ no: 1, coursename: "PCM" })); //false

// When you're working with Objects types or Refrences types and you want to search an elements from an array then the best practice is to use Call Back Functions.
// Call Back Function:
// A callback is a function that is passed as an argument to another function and is executed after the completion of that main function. In simple terms, a callback function is called at the end of a task to either deliver results or perform an action. You pass this callback function to the main function, and once the main function completes, it invokes the callback to proceed with the next steps.

let courses2 = courses1.find(function (course) {
  return course.naam === "PCB";
});
console.log(courses2);

// Arrow Function:
let course = courses1.find((course) => course.naam === "PCB");
console.log(course);

// 5.) Removing Element from an Array---------------------------

// To remove the elements from an array we have different methods like pop(), shift(), or splice().
let numbers1 = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers1);

let webDevCourse = ["HTML", "CSS", "JavaScript", "Java", "React"];
console.log("Course - ", webDevCourse);

// 1.) pop (), The pop() method removes an element from the last index of the array.
numbers1.pop(); //removing from end
console.log(numbers1);

let removedItem = courses.pop();
console.log("Removed Item -", removedItem);
console.log("Updated Courses - ", webDevCourse);
let removedItem0 = webDevCourse.pop();
console.log("Removed Item Again - ", removedItem0);
console.log("Updated Courses Again - ", webDevCourse);

// 2.) shift (), The shift() method removes the element from the first index of the array.
numbers1.shift(); //removing from beginning

// 3.) splice ()
// Removes element from an array and if necessary add a new element.
// The splice() method removes or replaces the element from the array. It manipulates the original array.

// for removing
numbers1.splice(2, 1); //removing from middle,
// here 2 is index number and 1 is count which indicates no. of elements you want to delete.
console.log(numbers1);

// for adding
numbers1.splice(6, 0, 8, 9);
console.log(numbers1);

// for removing
webDevCourse.splice(2, 1); //it will start from deleting index 2 nd will delete 1 elements from the array
console.log(webDevCourse);

// for adding
webDevCourse.splice(4, 0, "Angular");
console.log(webDevCourse);

// 6.) Empting an Array-------------------------------------

let numbers2 = [1, 2, 3, 4, 5];

// First Way
// numbers2 = [];

// Second Way
let numbers3 = numbers2; // here address will be copy not values because array is a refrences/object and in this case value will will not copied.
// Above is not good practice to empting an array.

// Third Way and this is the best practice***********
// numbers2.length = 0; //Best practice to empting an array.

// Fourth Way
numbers2.splice(0, numbers2.length);

console.log(numbers2);
console.log(numbers3); ////here address will be copy not values because array is a refrences/object and in this case value will will not copied.

// 7.) Combining and Slicing--------------------------------
//Array Concatenation: Combine two or more arrays using the concat() method. It returns new array containing joined arrays elements.

// A.) Combining/Concatenation: combine two or more array and return a new array.

let first = [1, 2, 3];
let second = [4, 5, 6];

let concateArray = first.concat(second); // By using concat method we can combine two arrays.
console.log(concateArray);

let studentsName0 = ["Toji", "Geto", "Yuta", "Maki"];
let newArrayOfStudentsName = studentsName.concat(studentsName0);
console.log(newArrayOfStudentsName);

let studentsName1 = ["Panda", "Miwa", "Mei Mei", "Nanami"];
let newArrayOfStudentsName0 = studentsName.concat(studentsName0, studentsName1);
console.log(newArrayOfStudentsName0);

// B.) Slicing/Slice: It will return a shallow copy.

let webDevCourse0 = ["Java", "DBMS", "OS", "Networking", "SpringBoot"];

let marks = [10, 20, 30, 40, 50, 60, 70, 80];

// First Way
let sliced = marks.slice(2); //Here after index number 2 all number will be slice.
let value = webDevCourse0.slice(2);

// Second Way
let sliced1 = marks.slice(2, 6); //Here 2 & 6 are index number, 2 is starting index 6 is ending index; and the number which is on index 2 will be slice till 5 but the number which is at index number 6 will be excluded.
let value0 = webDevCourse0.slice(3, 4);
let value1 = webDevCourse0.slice(1, 4);

// Third Way
let sliced2 = marks.slice(); //This will create an copy of original array and it's called full slicing.
let value2 = webDevCourse0.slice();

console.log(sliced);
console.log(sliced1);
console.log(sliced2);

console.log(value);
console.log(value0);
console.log(value1);
console.log(value2);
console.log(webDevCourse0);
console.log(typeof value);
console.log(typeof value0);
console.log(typeof value1);

// How to capitalize the first character of a Name.
let userName = "arbaz";
console.log(userName.slice(1)); //it will slice the first character of the userName-"Arbaz".

let firstUppserCaseCharacter = userName[0].toUpperCase();
console.log(firstUppserCaseCharacter);
let capitalizeName = firstUppserCaseCharacter + userName.slice(1);
console.log(capitalizeName);

// 8.) Spread operator------------------------------------

let third = [1, 2, 3];
let fourth = [4, 5, 6];

let combineds = [...third, "a", false, ...fourth, "b", true];
console.log(combineds);
//We can comcat/combine two array using spread operator also

//How to create copy? By using Spread we can copy also.
let another = [...combineds];
console.log(another);

// 9.) Iterating an array-------------------------------------

// A.) by using for-of loop
let arr = [10, 20, 30, 40, 50];
for (let value of arr) {
  console.log(value);
}

// B.) by using for each loop
arr.forEach(function (numb) {
  console.log(numb);
});

//Converting it into arrow functions
arr.forEach((numb) => console.log(numb));

// 10.) Joining an Array-------------------------------------
let numbers4 = [10, 20, 30, 40, 50];
const joined = numbers4.join(",");
console.log(joined);
console.log(typeof joined);

// 11.) Splitting/Breaking an string------------------------------------
let message = "This is my first message";
let parts = message.split(" ");
console.log(parts);

let joineds = parts.join("_");
console.log(joineds);

// 12.) Sorting an Arrays------------------------------------
let numbers5 = [60, 20, 70, 10, 50];
numbers5.sort();
console.log(numbers5);

let numbers6 = [10, 4, 40, 5];
numbers6.sort();
console.log(numbers6);

// 13.) Reversing an array-----------------------------------
numbers5.reverse();
console.log(numbers5);

numbers6.reverse();
console.log(numbers6);

// 14.) Filtering an array------------------------------------

// filter() : Creates a new array with elements that pass a test provided by a function:
let numbers7 = [1, 2, -1, -4, -5, 6];

// A.) Print only positive numbers
let filtered = numbers7.filter(function (value) {
  return value >= 0;
});
console.log(filtered);

//converting into arrow functions
let filtered1 = numbers7.filter((value) => value >= 0);
console.log(filtered);

// B.) Print only negative numbers
let filtereds = numbers7.filter(function (value) {
  return value <= 0;
});
console.log(filtereds);

//converting into arrow functions
let filtereds1 = numbers7.filter((value) => value <= 0);
console.log(filtereds1);

let shortName = studentsName.filter(function (name) {
  return name.length < 5;
});
console.log(shortName);

let longName = studentsName.filter(function (name) {
  return name.length > 5;
});
console.log(longName);

// 17.) Mapping an array-------------------------------------

// map() : Creates a new array with the results of calling a function for every array element:
let numbers8 = [7, 8, 9, 10];
console.log(numbers8);

let items = numbers8.map(function (value) {
  return "student_no" + value;
});
console.log(items);

let upperCaseNames = studentsName.map(function (name) {
  return name.toUpperCase();
});
console.log(upperCaseNames);

let upperCaseNames0 = studentsName0.map(function (name) {
  return name.toUpperCase();
});
console.log(upperCaseNames0);

let upperCaseNames1 = studentsName1.map(function (name) {
  return name.toUpperCase();
});
console.log(upperCaseNames1);

let lowerCaseNames = studentsName.map(function (name) {
  return name.toLowerCase();
});
console.log(lowerCaseNames);

//converting into arrow functions
let items1 = numbers8.map((value) => "student_no" + value);
console.log(items1);

let mark = [200, 300, 400, 800, 100, 500];
console.log(mark);

let studentsMark = mark.map(function (value) {
  return "student_no" + value;
});
console.log(studentsMark);

//converting into arrow functions
let studentsMark1 = mark.map((value) => "student_no" + value);
console.log(studentsMark1);

// 18.) Mapping an objects------------------------------------
let numbers9 = [-2, -3, 4, 5, 6, -7];
let filter2 = numbers9.filter((value) => value > 0);
console.log(filter2);

let items2 = filter2.map(function (num) {
  let obj = { value: num }; //object literal
  return obj;

  //or we can write lik this also
  // return {value: num}
});
console.log(items2);

//converting into arrow functions
let items3 = filter2.map((num) => {
  value: num;
});
console.log(items3);

let number = [2, 3, -5, 6, -1, -9, -4, 8, 7];
let filteredss = number.filter((value) => value >= 0);
console.log(filteredss);

let numb = filteredss.map(function (marking) {
  let obj1 = { value: marking };
  return obj1;
});
console.log(numb);

//converting into arrow functions
let numb1 = filteredss.map((marking) => {
  value: marking;
});
console.log(numb1);

// 19.) Sorting an Array--------------------------------------------
let a = [10, 5, 4, 25];

a.sort(function (a, b) {
  return a - b;
});

console.log(a);

// 20.) Reducing an Array-------------------------------------------
// It is used to reduce the array into one single value using some functional logic

// Defining the Reducer Function

// const helperSum = (acc, curr) => acc + curr;
// This is a helper function that takes two parameters:

// acc (accumulator): Keeps track of the running total during the reduction process.
// curr (current value): Represents the current element in the array being processed.

// The function simply returns the sum of the accumulator and the current value.

// Using reduce

// sum = array.reduce(helperSum, 0);
// The reduce method is called on the array:

// helperSum: The function to execute on each element of the array.
// 0: The initial value of the accumulator.

let array = [1, 2, 3, 4, 5, 6];

let helperSum = (acc, curr) => acc + curr;
let sum = array.reduce(helperSum, 0);

// Here’s how it works step by step:

// Start with acc = 0 (initial value).
// For each element in the array, helperSum is called:
// First iteration: acc = 0, curr = 1 → acc + curr = 1
// Second iteration: acc = 1, curr = 2 → acc + curr = 3
// Third iteration: acc = 3, curr = 3 → acc + curr = 6
// Fourth iteration: acc = 6, curr = 4 → acc + curr = 10
// Fifth iteration: acc = 10, curr = 5 → acc + curr = 15
// Sixth iteration: acc = 15, curr = 6 → acc + curr = 21
// After processing all elements, the final value of acc is 21.
// So, sum = 21.

console.log(array);
console.log(sum);

let arr1 = [1, 2, 3, 4];
let total = 0;

for (let value of arr1) //for iterables use for of loop
  total = total + value;

console.log(total);

let totalSum = arr1.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue,
  0
);
console.log("PRINTING TOTAL SUM:");

console.log(totalSum);

let arr2 = [-1, -2, -3, -4];
let totalSum1 = arr2.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue,
  0
);
console.log("PRINTING TOTAL SUM:");

console.log(totalSum1);

// reduce is a powerful method to process an array and reduce it to a single value.
// The original array remains unchanged.
// The reduce method takes a callback function and an initial value as arguments.

// 21.) Some----------------------------------

//It is used to check whether some array values passes a test

array = [1, 2, 3, 4, 5, 6];

const lessthanFourCheck = (element) => element < 4;
const lessthanFour = array.some(lessthanFourCheck);

console.log(array);
if (lessthanFour) {
  console.log("At least one element is less than 4");
} else {
  console.log("All elements are greater than 4 ");
}
