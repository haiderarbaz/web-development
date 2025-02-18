console.log("Hello There !");

// const math = require("./math");
// by using this we can import the file

// console.log("Math value is ", math.addFn(2, 4));
// console.log("Math value is ", math.subFn(2, 4));

// even we can destructure it more
// const { mul, div } = require("./math");
// console.log("Math value is ", mul(3, 4));
// console.log("Math value is ", div(4, 2));

const math = require("./math");
console.log("Math value is ", math.mod1(6, 4));
console.log("Math value is ", math.mod2(15, 6));
console.log("Math value is ", math.mod3(18, 4));
