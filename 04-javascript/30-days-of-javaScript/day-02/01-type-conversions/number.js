/*
  Implicit Conversion: Automatically
*/
let subtract = "14" - "8";
console.log(subtract);

let multiply = "14" * "8";
console.log(multiply);

let divide = "14" / "8";
console.log(divide);

let modulo = "14" % "8";
console.log(modulo);

/*
  Explicitly Conversion: Manually (To convert a number to value we use (Number(value)))
*/

let addition = "3" + "4";
console.log(addition);

/*
  The above code output will be 34.
  This Will not convert implicitly(automatic), we have to convert it using explicitly conversion(Manually)
*/

let add = Number("3") + Number("4");
console.log(add);

let str = "123";
console.log("Value is: ", str, "| Type is:", typeof str);

str = Number("123");
console.log("Value becomes: ", str, "| Type becomes:", typeof str);

/*
  String
  If the string is not a valid number, the result of such a conversion is NaN.
  Below are the examples:
*/

let score = "333a";
console.log("Value is: ", score, "| Type is:", typeof score);

score = Number("333a");
console.log("Value becomes: ", score, "| Type becomes:", typeof score);

let string = "an arbitrary string instead of a number";
console.log("Value is: ", string, "| Type is:", typeof string);

string = Number("an arbitrary string instead of a number");
console.log("Value becomes: ", string, "| Type becomes:", typeof string);

/*
  String
  Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0
*/

/*
  whitespaces from start and end.
*/
let userId = "  123  ";
console.log("Value is: ", userId, "| Type is: ", typeof userId);

userId = Number("  123  ");
console.log("Value becomes: ", userId, "| Type becomes: ", userId);

/*
  tabs \t
*/
let userAge = "28 \t";
console.log("Value is: ", userAge, "| Type is: ", typeof userAge);

userAge = Number("28 \t");
console.log("Value becomes: ", userAge, "| Type becomes: ", userAge);

/*
  newlines \n
*/
let userMarks = "300 \n";
console.log("Value is: ", userMarks, "| Type is: ", typeof userMarks);

userMarks = Number("300 \n");
console.log("Value becomes: ", userMarks, "| Type becomes: ", typeof userMarks);

/*
  Empty String
*/
let userMathMarks = " ";
console.log("Value is: ", userMathMarks, "| Type is: ", typeof userMathMarks);

userMathMarks = Number(" ");
console.log(
  "Value becomes: ",
  userMathMarks,
  "| Type becomes: ",
  typeof userMathMarks
);

/*
  Undefined
*/
let age = undefined;
console.log("Value is: ", age, "| Type is:", typeof age);

age = Number(undefined);
console.log("Value becomes: ", age, "| Type becomes:", typeof age);

/*
  null
*/
let rollNo = null;
console.log("Value is: ", rollNo, "| Type is:", typeof rollNo);

rollNo = Number(null);
console.log("Value becomes: ", rollNo, "| Type becomes:", typeof rollNo);

/*
  Boolean value: true or false
  true will becomes 1 and false will becomes 0
*/
let isPresent = false;
console.log("Value is: ", isPresent, "| Type is:", typeof isPresent);

isPresent = Number(false);
console.log("Value becomes: ", isPresent, "| Type becomes:", typeof isPresent);

let isClass = true;
console.log("Value is: ", isClass, "| Type is:", typeof isClass);

isClass = Number(true);
console.log("Value becomes: ", isClass, "| Type becomes:", typeof isClass);
