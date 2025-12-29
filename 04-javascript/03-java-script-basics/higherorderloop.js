//higher order loops
//array specific loop

//["","",""] : string in array
//[{},{},{}] : objects in array

//for of

//array
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

//string
const greetings = "Hello World!";
for (const greet of greetings) {
  console.log(greetings);
  console.log(`Each char is ${greet}`);
}

//maps : it is a object holds key-values pairs.
//map is not itratable
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("FR", "France");
console.log(map);

for (const key of map) {
  console.log(key);
}

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

//object
const myObject = {
  game1: "NFS",
  game2: "Crictek",
  game3: "FIFA",
};
// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// } //output will myObject is not iterable

//for in loop

//object
const myObject0 = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};
for (const key in myObject0) {
  console.log(key);
  console.log(myObject0[key]);
  console.log(`${key} shortcut is for ${myObject0[key]}`);
}

//array
const programming = ["js", "ryuby", "c++", "switch"];
for (const key in programming) {
  console.log(key);
  console.log(programming[key]);
  console.log(`${key} index value is for ${programming[key]}`);
}

//map
const map1 = new Map();
map1.set("IN", "India");
map1.set("USA", "United States Of America");
map1.set("FR", "France");
for (const key in map1) {
  console.log(key);
}
//we will not get any output for the above code because map is not iterable

//for each loop

const coding = ["js", "ruby", "java", "python", "cpp"];
coding.forEach(function (val1) {
  console.log(val1);
});

function printMe(item) {
  console.log(item);
}
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFile: "js",
  },
  {
    languageName: "java",
    languageFile: "java",
  },
  {
    languageName: "python",
    languageFile: "py",
  },
];
myCoding.forEach((item) => {
  console.log(item.languageName);
  console.log(item.languageFile);
});
