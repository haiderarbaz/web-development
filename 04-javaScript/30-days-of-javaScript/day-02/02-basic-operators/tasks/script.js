/*
  Tasks 1:
    The postfix and prefix forms

    What are the final values of all variables a, b, c and d after the code below?
*/

let a = 1,
  b = 1;
let c = ++a; // ? => 'c' value will be '2'
let d = b++; // ? => 'd' value will be '1'
console.log(`c Value will be: ${c}`);
console.log(`d Value will be: ${d}`);

console.log(`Now a value will be: ${a}`);
/*
  'a' will increment first so it's new value will be '2' then it will return it's new value and assign it to 'c'.
*/

console.log(`b value will be: ${b}`);
/* 
  after assiging the old value of 'b' to 'd', 'b' will increment by '1' and become '2'.
*/

/*
  Tasks 2
    Assignment result

    What are the values of a and x after the code below?
*/
let m = 2;

let x = 1 + (m *= 2);
/* In the above line of code 
  first 'm' will be multiply with '2', so it will be 4 and then it will get add to '1' + '4' so the finale value of 'x' will '5'
*/
console.log(`Result of x will be: ${x}`);

/* 
  Tasks 3
    Type conversions

    What are results of these expressions?

      "" + 1 + 0
      "" - 1 + 0
      true + false
      6 / "3"
      "2" * "3"
      4 + 5 + "px"
      "$" + 4 + 5
      "4" - 2
      "4px" - 2
      "  -9  " + 5
      "  -9  " - 5
      null + 1
      undefined + 1
      " \t \n" - 2

*/
console.log("" + 1 + 0); // 10
/* 
  In the above code,
    Binary '+' applied to strings so it's converted other operand in strings too.
  
  NOTE: 
     If any of the operand is string and binary plus is applied, then the compiler treats other operands as strings too and perform string concatenation(merges).
   
*/

console.log("" - 1 + 0); // -1
/* 
  In the above code,
    When you subtract a number from an empty string, JavaScript converts the empty string to a number. 
    An empty string converts to 0, so (""-1) becomes (0 - 1) = -1.
    -1 + 0 = This adds 0 to -1, which equals -1.

  NOTE: 
      The key concept here is "JavaScript's type coercion" :- 
        when you use these operator (-, *, /, %, **,) with a string and number, JavaScript automatically converts the string to a number. An empty string ("") converts to 0 in numeric context.
    
*/

console.log(true + false); // 1
/*
  When you use the addition operator (+) with boolean values, JavaScript converts them to numbers:
    true converts to 1
    false converts to 0
  
  so here (true + false) => (1 + 0) => 1.
*/

console.log(6 / "3"); // 2
/*
  string "3" will get automatically converted to number 3. (Type coercion)
*/

console.log("2" * "3"); // 6
/*
  string "2" & "3" will get automatically converted to number 2 & number 3. (Type coercion)
*/

console.log(4 + 5 + "px"); // 9px
/*
  Operators work one after another

  In the above code,
    The first '+' sums two numbers, so it returns 9 then the next '+' concatenate the string "px" to it, so the finale will become 9px;
*/

console.log("$" + 4 + 5); // $45
/*
  In the above code,
    Binary '+' applied to strings so it's converted other operand in strings too.
  
  NOTE: 
     If any of the operand is string and binary plus is applied, then the compiler treats other operands as strings too and perform string concatenation(merges).
*/

console.log("4" - 2); // 2
/*
  string "4" will get automatically converted to number 4. (Type coercion)
  Then 4 will get subtract to 2.
*/

console.log("4px" - 2); // NaN
/*
  As we know 
    If the string is not a valid number the result of such expressions will be Not a Number (NaN)

  NOTE:
    Any arithmetic operation involving NaN results in NaN, so NaN - 2 = NaN.
*/

console.log("  -9  " + 5); //   -9  5
/*
  In the above code,
    Binary '+' applied to strings so it's converted other operand in strings too.
  
  NOTE: 
     If any of the operand is string and binary plus is applied, then the compiler treats other operands as strings too and perform string concatenation(merges).
*/

console.log("  -9  " - 5); // -14
/* 
  In the avove code,
    string "  -9  " will get automatically converted to number -9. (Type coercion)
    so -9 - 5 => -14.

  NOTE:
    JavaScript ignores leading and trailing whitespace when converting strings to numbers.
*/

console.log(null + 1); // 1
/* 
  In the above code,
    null gets converted to the number 0 (not just "empty value")
    So the operation becomes 0 + 1 = 1

  NOTE:
    Type coercion rule: When null is used in arithmetic operations, JavaScript converts it to 0.
*/

console.log(undefined + 1); // NaN
/*
  In the above code,
    undefined is not a valid number (it can anything string or number or maybe it will be mix of string and number), so when it's getting converted it will give NaN and anything added in NaN, the result will be NaN
*/

console.log(" \t \n" - 2); // -2
/*
  As we know,
    JavaScript ignores leading, trailing whitespace, tab lines \t, new lines \n when converting strings to numbers.

  In the above code,
    The string is empty and as we know that when empty strings converted to number it becomes 0.
    so 0 - 2 will give result -2.
*/

/* 
  Tasks 4
      Explain the result for this code.
      let a = ("First number?", 1);
      let b = ("Second number?", 2);

      console.log(a + b);
*/

let t = ("First number?", 4);
let u = ("Second number?", 8);

console.log(t + u);
/*
  The output will be 12.
  
  As we know,
    The comma operator (,) evaluates both expressions but returns only the last value.

    let t = ("First number?", 4) → t gets the value 4
    let u = ("Second number?", 8) → u gets the value 8

  Since both values are numbers, t + u performs arithmetic addition: 4 + 8 = 12
*/

/* 
  Tasks 5
    Fix the addition  
      Here’s a code that asks the user for two numbers and shows their sum.

      It works incorrectly. The output in the example below is 12 (for default prompt values).

      Why? Fix it. The result should be 3.

        let a = prompt("First number?", 1);
        let b = prompt("Second number?", 2);

        alert(a + b); // 12
*/

let y = prompt("First number?", 1);
let z = prompt("Second number?", 2);
alert(y + z);

/* 
  The above code uses the prompt() function, and we know prompt() function always returns a string.

  so,   
    prompt("First number?", 1); => return => "1"
    prompt("Second number?", 2); => returns => "2"

  And we know when we use binary '+' operators on strings it concatenates(merges) them so the result will become "12".

  To fix this and get the result as 3.
    We can use unary '+' operator at the starting at prompt 
    like => +prompt("First number?", 1)
    and, +prompt("Second number?", 2),
    This will convert them it into number ad we will get desired result as '3'

    or you can write as 
      alert(+a + +b);
      And as we know that the precedence of unary operator is higher, so first a & b will convert into number then it will get add.
    
    or you can write as
      alert(Number(a) + Number(b));
      This will convert into Number then it will get add.

  Below are the code examples:
*/

let i = +prompt("First number?", 1);
let j = +prompt("Second number?", 2);
alert(i + j);

let e = prompt("First number?", 1);
let f = prompt("Second number?", 2);
alert(+e + +f);

let p = prompt("First number?", 1);
let q = prompt("Second number?", 1);
alert(Number(p) + Number(q));

let r = Number(prompt("First number?", 1));
let s = Number(prompt("Second number?", 1));
alert(r + s);
