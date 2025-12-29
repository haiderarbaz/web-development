/*
  operand:
  In below 2 & 6 are operand.
  left operand is 2, and
  right operand is 6.

  Sometimes, they are called “arguments” instead of “operands”.
*/
const sum = 2 + 6;
console.log(`Sum is: ${sum}`);

/*
  unary: An operator is a unary if it has a single operand.
*/
let a = 9;
a = -a;
console.log(a);
/* 
  unary negation `-` reverses the sign of a number:
*/
let numValue = 6;
let negativeNumValue = -numValue;
console.log(negativeNumValue); // -6, unary negation was applied

/*
  binary: An opeartor is binary if it has twob operands
*/
let num1 = 7,
  num2 = 4;
console.log(num1 - num2); // 3, binary minus subtracts values

/*
  NOTE: The negation operator, a unary operator that reverses the sign, and the subtraction operator, a binary operator that subtracts one number from another.
*/

/*
  Maths
  The following math operations are supported:

  Addition +,
  Subtraction -,
  Multiplication *,
  Division /,
  Remainder/modulo %,
  Exponentiation **.
*/

/*
  Remainder/Modulo %,

  The remainder operator %, despite its appearance, is not related to percents.
  The result of a % b is the remainder of the integer division of a by b.
*/
console.log(5 % 2); // 1
console.log(6 % 4); // 2
console.log(15 % 3); // 0

/*
  Exponentiation **

  The exponentiation operator a ** b raises a to the power of b.
  In maths, we write that as a^b.
*/
console.log(3 ** 2); // 9
console.log(3 ** 3); // 27
console.log(3 ** 4); // 81

/* 
  Exponentiation operator works for non-integer also.
*/
console.log(4 ** (1 / 2)); // 2 (power of 1/2 is the same as a square root)
console.log(3 ** (1 / 3)); // 1.4422495703074083 (power of 1/3 is the same as a cubic root)
console.log(8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cubic root)

// let aB = (1 + 2, 3 + 4);
// console.log(aB);
