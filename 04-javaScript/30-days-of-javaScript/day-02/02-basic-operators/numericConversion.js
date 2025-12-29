/* 
  Numeric conversion, unary +

    The plus + exists in two forms: 
      1. The binary form that we used above, and 
      2. The unary form.

    The Unary Form:
      The unary plus or, the plus operator + applied to a single value.
      If the operand is not a number, the unary plus converts it into a number.
      But doesn’t do anything to numbers.
*/

let m = 8;
console.log(+m); // 8

let n = -6;
console.log(+n); // -6
/* 
  As you can see in the above codes No effect on numbers
*/

let isAvailable = true;
console.log(+isAvailable);

let isPaid = false;
console.log(+isPaid); // 0

let userName = "";
console.log(+userName); // 0
/* 
  As you can see in the above codes converts non-numbers to numbers
*/

/* 
  It actually does the same thing as Number(...), but is shorter.

  The need to convert strings to numbers arises very often. 
    For example, 
      If we are getting values from HTML form fields, they are usually strings. 
      What if we want to sum them?
*/

/* 
  The binary plus would add them as strings:
*/
let battery = "45";
let camera = "90";
console.log(battery + camera); // 4590, the binary plus concatenates strings

/*
  If we want to treat them as numbers, we need to convert and then sum them:
*/

let iPhones = "76";
let samsungPhones = "80";
console.log(+iPhones + +samsungPhones); // 156, // both values converted to numbers before the binary plus

/* 
  unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up.
*/

/* 
  Question:- Why are unary pluses applied to values before the binary ones?
  Answer:- That’s because of their higher precedence.
*/
