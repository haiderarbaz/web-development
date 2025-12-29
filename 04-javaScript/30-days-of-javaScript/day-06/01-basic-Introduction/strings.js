/*
  Strings:
    A string is a sequence of characters used to represent text.
    Strings are written with quotes.
*/

/*
  Quotes:
    Strings can be enclosed within either 'single' quotes, "double" quotes or `backticks`:
*/
let single = "single-quoted";
let double = "double-quoted";

let backticks = `backticks`;
/* 
  'Single' and "double" quotes are essentially the same. 
  
  `Backticks`, however, allow us to embed any expression into the string, by wrapping it in ${…}:
*/
function sum(a, b) {
  return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

/* 
  Another advantage of using backticks is that they allow a string to span multiple lines:
*/
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
console.log(guestList); // a list of guests, multiple lines

/* 
  But single or double quotes do not work this way.

  If we use them and try to use multiple lines, there’ll be an error:
*/
// let guestLisst = "Guests:
//   * John";
/* 
  The above code will give an error. 
  ErrorMessge:
    SyntaxError: Invalid or unexpected token
*/

/* 
  'Single' and "double" quotes come from ancient times of language creation, when the need for multiline strings was not taken into account. 
  
  `Backticks` appeared much later and thus are more versatile.

  Backticks also allow us to specify a “template function” before the first backtick.
*/

/*
  1️⃣ Basic Template Literal:

    Syntax:

      `string text`

      Here,
          Just a simple string inside backticks.
          Similar to "string text" but using backticks.

  2️⃣ Multi-line Template Literal

    Syntax:

      `string text line 1
      string text line 2`

      Here,
          Backticks allow multi-line strings without needing \n or +.
          Normal quotes ("" or '') do NOT allow this (unless you manually add \n).
*/
console.log(`Hello
World!`);

/* 
  3️⃣ Template Literal with Expression (${} Interpolation)

    Syntax:

      `string text ${expression} string text`

      Here,
          You can embed variables or expressions using ${}.
          JavaScript will evaluate the expression and insert the result.
*/
let userName = "Arbaz";
console.log(`Hello, ${userName}!`);

console.log(`2 + 2 = ${2 + 2}`);

/* 
  4️⃣ Tagged Template Literal (Advanced / Optional)

    A tagged template is when we put a function name BEFORE the backtick, like this:

      func`Hello ${name}!`;

      Here,

        "func" is a function (called a tag).

        The template literal Hello ${name}! is passed to this function in a special format.

        JavaScript does not output the string immediately; instead, it calls func and passes the pieces of the template to it.

        What Does the Function Receive?

          The function receives:

            - An array of all string parts

            - The values of the expressions

    Examples:
*/
function myTag(strings, value) {
  console.log(strings); // ["Hello ", "!"]
  console.log(value); // "Arbaz"
}

let myName = "Arbaz";
myTag`Hello ${myName}!`;
/*
  How Does It Work Internally?

    Template: Hello ${name}!

    Gets split into:

      1. Strings → ["Hello ", "!"]

      2. Expressions → "Arbaz"

    The function myTag receives them and can process them in any way it wants.
*/
function upper(strings, value) {
  return strings[0] + value.toUpperCase() + strings[1];
}

let word = "developer";

console.log(upper`I am a ${word}!`);
/*
  In the above code

    When you write:

    upper`I am a ${word}!`

      this does not behave like a normal template string.

      Instead, JavaScript treats upper as a tag function, and automatically calls it like this internally:

        upper(["I am a ", "!"], "developer");

      So the upper function receives:

        Parameter (strings(array), value):
          strings (array) contains	["I am a ", "!"] → split where ${word} is
          value contains	"developer"  (the evaluated value of ${word})

      Inside the function:
        
        return strings[0] + value.toUpperCase() + strings[1];

          So:

            strings[0] → "I am a "

            value.toUpperCase() → "DEVELOPER"

            strings[1] → "!"

*/

/*
    It is advanced form of template literals.
    Tags allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions.
    The tag function can then perform whatever operations on these arguments you wish, and return the manipulated string. (Alternatively, it can return something completely different).
    
  Syntax:

    tagFunction`string text ${expression} string text`

      This is NOT just a string.
      Instead, tagFunction gets called, and receives:
        - The string parts as an array
        - The values of expressions separately

      tagFunction
        If specified, it will be called with the template strings array and substitution expressions, and the return value becomes the value of the template literal

      string text
        The string text that will become part of the template literal. Almost all characters are allowed literally, including line breaks and other whitespace characters. However, invalid escape sequences will cause a syntax error, unless a tag function is used.

      expression
        An expression to be inserted in the current position, whose value is converted to a string or passed to tagFunction.
*/
function tagFunction(strings, value) {
  console.log(strings); // ["string text ", " string text"]
  console.log(value); // <result of expression>
}

tagFunction`string text ${2 + 2} string text`;
/* 
  The function decides how to combine or modify them.

  This is used for advanced formatting like translation, sanitizing inputs, styling, etc.
*/
