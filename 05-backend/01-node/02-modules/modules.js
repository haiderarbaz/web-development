const math = require("./math");
console.log(`Addition value is: ${math.addFunction(8, 7)}`);
console.log(`Subtraction value is: ${math.subtractFunction(8, 6)}`);

/* 
  We can also do it by destructuring it.
    Below is the example
*/
const { addFunction, subtractFunction } = require("./math");
console.log(`Addition value is: ${addFunction(8, 9)}`);
console.log(`Subtraction value is: ${subtractFunction(9, 4)}`);

const areaOfCircle = require("./circleArea");
console.log("Area of circle of radius 4 is: ", areaOfCircle.area(4));
