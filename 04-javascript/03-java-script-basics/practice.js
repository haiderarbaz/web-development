//hitesh

//Arrays

const myArr = [0, 1, 2, 3, 4, 5];

//shallow copy
//deep copy

console.log(typeof array);

const marvel_heros = ["thor", "ironman", "hulk"];

const dc_heros = ["superman", "flash", "batman"];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//above console will create array inside an array
//array can take any type of data even array can take array data type like we seen in the above.

//console.log(marvel_heros[3][1]);
//it will give 1st value of 3rd element and here 3rd element will be "hulk" and his first value will be flash
//push will be apply on existing array

//concat operator
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);
//concat will return a new array

//spread operator
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

//flat: Returns a new array with all sub-array elements concatenated into it recursively upto the specified depth.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

//it will tell that content is array or not
console.log(Array.isArray("Arbaz"));
//conert into an array
console.log(Array.from("Arbaz"));
//below will give an empty an empty array
console.log(Array.from({ name: "Arbaz" }));

//.of: Returns a new array from a set of elements
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));

//Read docs about from of & isArray !!!!

//objects-----------------------

//singleton: Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.
//constructor create singleton
//object.create

//literal don't create singleto

//object literals

//const mySym = Symbol("key1");

// const botUser = {
//   name: "Arbaz",
//   "full name": "Arbaz Haider",
// mySym: "mykey1" //we can't use symbol in this way, because when we will check the data typeof it will show string instead of symbol.
//   [mySym]: "mykey1", //this is the correct way to use symbol.
//   age: 27,
//   location: "Bengaluru",
//   email: "arbaz@gmail.com",
//   isLoggedIn: false,
//   lastLoginDays: ["Monday", "Saturday"],
// };
//here name, age, are keys and arbaz, 27 are values

//how to access object:

//1st way: Dot notation
// console.log(botUser.email);

//console.log(botUser.Full name);
//dot method will not work in this case and because of this we have a 2nd way[square notation].

//2nd way: Square Notation
// console.log(botUser["email"]);

//console.log(botUser.mySym);
//console.log(typeof botUser.mySym);
// console.log(botUser[mySym]);
// console.log(typeof botUser[mySym]);

const mySym = Symbol("key1");
const mySym1 = Symbol("key12");
const Juser = {
  name: "Sahil",
  "full name": "Sahil B",
  mySym: "mykey1",
  [mySym1]: "mykey21", //// to use as a symbol, must place it in square bracket // to use symbol it must be first declared above object
  email: "sahil@gpt.com",
};

console.log(Juser.name);
console.log(Juser["name"]);
console.log(Juser["full name"]);
//console.log(Juser.mySym);
//console.log(typeof Juser.mySym);
//console.log(Juser["mySym"]);
console.log(Juser[mySym1]);
console.log(Juser.mySym1);
console.log(typeof Juser.mySym1);
console.log(Juser["mySym"]);
console.log(Juser[mySym]);

//console.log(Juser[mySym]); //not in bracket, use double quote
//console.log(Juser[mySym1]);//in bracket don't use double quote

Juser.email = "sahil@gmail.com";

//Object.freeze(Juser);
//we can freeze an object after applying freeze we can't change

Juser.email = "sahil@microsoft.com";
console.log(Juser);

Juser.greeting = function () {
  console.log("Hello Sahil");
};
console.log(Juser.greeting); //it return an anonymous function
console.log(Juser.greeting());

Juser.greetingTwo = function () {
  console.log(`Hello Sahil, ${this.name}`); //this keyword will refrence same object
};
console.log(Juser.greetingTwo());

const tinderUser1 = {}; //non-singleton object
console.log(tinderUser1);

const tinderUser = new Object(); //singleton object
tinderUser.id = "123bcd";
tinderUser.name = "Jazy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Arbaz",
      lastname: "Haider",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

const obj4 = { obj1, obj2 };
console.log(obj4);

//object.assign(static method): Copy the values of all of the enumerable own properties from one or more source objects to a target object. It Returns the modified target object.
//const returnedTarget = Object.assin(target, source);
const obj5 = Object.assign(obj1, obj2);
console.log(obj5);

//good practice
const obj6 = Object.assign({}, obj1, obj2, obj3);
console.log(obj6);

//using spread operator //used evenly
const obj7 = { ...obj1, ...obj2, ...obj3 };
console.log(obj7);

const users = [
  {
    id: 1,
    email: "some@gmail.com",
  },
  {
    id: 1,
    email: "some@gmail.com",
  },
  {
    id: 1,
    email: "some@gmail.com",
  },
];
users[1].email;

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //it will return an array data type
console.log(Object.values(tinderUser)); //it will return an array data type
console.log(Object.entries(tinderUser)); //it will return an array data type and it also return an array inside an array.

//it will check the property/value is present or not and return a boolean
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLoggedOut"));

//object de-structure

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

//1st way
course.courseInstructor;

//2nd way
//{} we use this bracket to de-structure object like below
const { courseInstructor } = course;
console.log(courseInstructor);

//3rd way
const { courseInstructor: instructor } = course;
console.log(instructor);

//json: in json keys and values both are string
// {
//   "naam": "hitesh",
//   "coursename": "js in hindi",
//   "price": "free"
// }

//sometime we get in array format
[{}, {}, {}];
