// function greet(name) {
//   return "Hello, " + (name || "Stranger") + "!";
// }
// console.log(greet("Geek"));
// console.log(greet());

// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const counter1 = createCounter();
// const counter2 = createCounter();

// counter1();
// counter1();
// counter2();
// counter1();

// // let str = "Hello World";
// // console.log(str.slice(-5));
// // console.log(str.substring(-5));
// // console.log(str.substr(-5));

// var x = 1;
// if (true) {
//   var x = 2;
// }
// console.log(x);

// console.log(typeof (2 + 3 / 2));

// console.log(2 * "2");

// // let name = "Ram";
// // function sayHello() {
// //   console.log("Hello, " + name + "!");
// //   let name = "Shyaam";
// // }
// // sayHello();

// function foo(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const bar = foo(5);
// console.log(typeof bar, bar(3));

// console.log(typeof null);

// console.log(2 + "2" - 1);

// var x = 10;
// var y = 5;

// console.log(x + y++);

// // const createMember = ({ email, address = {} }) => {
// //   const validEmail = /.+@.+..+/.test(email);
// //   if (!validEmail) throw new Error("Valid email pls");
// //   return {
// //     email,
// //     address: address || null,
// //   };
// // };
// // const member = createMember({ email: "my@email.com" });
// // console.log(member);

// // // const arr = [1, 1, 2, 3, 5, 8, 13];

// // // const output = arr
// // //   .map((num) => {
// // //     return Math.pow(num, 2);
// // //   })
// // //   .filter((num) => {
// // //     return num % 2 === 0;
// // //   })
// // //   .reduce((a, b) => {
// // //     return a + b;
// // //   }, 0);

// // // console.log(output);

// // console.log("4" + 3 * 4);

// // const str = "Welcome to the world of JavaScript!";
// // let output = "";

// // for (let i = 0; i < str.length; i++) {
// //   if (i % 2 === 0) {
// //     output += str.charAt(i).toUpperCase();
// //   } else {
// //     output += str.charAt(i).toLowerCase();
// //   }
// // }

// // output = output.split(" ").reverse().join("-").concat("!");

// // console.log(output);

// const a = false || {} || null;
// const b = null || false || "";
// const c = [] || (0 && true);
// console.log(a, b, c);

// const str = "123456789";
// let i = 0;

// const ls1 = [];
// const ls2 = [];

// for (i = 0; i < str.length / 2; i++) ls1.push(str[i]);

// for (i = i - 1; i < str.length; i++) ls2.push(str[i]);

// while (ls1.length) {
//   ls2.push(ls1.pop());
// }

// while (ls2.length) {
//   console.log(ls2.pop());
// }

// console.log(10 < 20 < 10);

// var x = 10;
// function foo() {
//   console.log(x);
//   var x = 20;
// }
// foo();
// console.log(x);

const text = "The quick brown fox jumps over the lazy dog";
let newText = "";

const words = text.split(" ");
for (let i = words.length - 1; i >= 0; i--) {
  newText += words[i] + " ";
}

console.log(newText.trim());

console.log(typeof NaN);

let str = "HELLO,WORLD!";
let reversedStr = str.split("").reverse().join("");
console.log(reversedStr);
