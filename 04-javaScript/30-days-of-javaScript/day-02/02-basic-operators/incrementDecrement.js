/*
  Increment/Decrement Operators

    Increment ++ increases a variable by 1.

    Decrement -- decreases a variable by 1.
*/
let counter = 2;
counter++;
console.log(`After increment Counter value will be: ${counter}`);

counter = 2;
counter--;
console.log(`After decrement Counter value will be: ${counter}`);
/*
  NOTE: 
    Increment/decrement only works on variables or we can say only be applied to variables.
    Trying to use it on a value like 5++ will give an error.
*/
/* 
  The operators ++ and -- can be placed either before or after a variable.

    i> When the operator goes after the variable, it is in “postfix form” called post-increment/ post-decrement.
      Example: counter++, counter--

    ii> When the operator goes before the variable, it is in “prefix form” called pre-increment/ pre-decrement.
      Example: ++counter, --counter

    Both of these statements do the same thing: increase/decrease counter by 1.

  NOTE:
    There is difference in these two, but we can only see it if we use the returned value of ++/--.

    The pre-increment/ pre-decrement returns a new value.
    While the post-increment/ post-decrement returns the old value (prior to increment/decrement).
*/
/*
  pre-increment / pre-decrement
*/
counter = 5;
let a1 = ++counter;
/* 
  In the above line of code 
    first increment by 1 will done then value will get assign two a1 (assignment works from left to rigt)
    so the value of counter will be 6.
*/
let b1 = --counter;
/*
  Now, In the above line of code value of counter will 6
    so, first decrement by 1 will done then the value will get assign two a1 (assignment works from left to rigt)
    so the value of counter will be again 5.
*/
console.log(a1);
console.log(b1);
/*
  post-increment / post-decrement
*/
counter = 4;
let a2 = counter++;
/*
  In the above line of code 
    first assignment will be done then the counter value will increase by 1(assignment works from left to rigt)
    so the a2 value will be 4, 
    an then counter will increase by 1, so counter upated value will be 5.
*/
let b2 = counter--;
/* 
  Here counter value is 5.
  In the line of code 
    first assignment will be done then the counter value will decrease by 1(assignment works from left to rigt)
    so b2 value will be 5.
    an then counter will decrease by 1, so counter upated value will be 4.
*/
console.log(a2);
console.log(b2);
console.log(`Counter update value is: ${counter}`);

/* 
  If you want increase / decrease a value and immediately use the new result of the operator, then go for pre-increment / pre-decrement

  If you want increase / decrease a value but you want to use it's old value(previous value: before increment/decrement), then go for post-increment / post-decrement
*/

/* 
  The ++/-- operators can be used inside expressions as well. 
  Their precedence is higher than most other arithmetical operations.
*/
let Counter = 2;
console.log(2 * ++Counter); // 6
Counter = 2;
console.log(2 * Counter++); // 4
/* 
  DON'T WRITE ONE LINE OF CODE LIKE ABOVE THAT"S NOT A GOOD PRACTICE

  Like Below
*/
// let counter = 1;
// alert(2 * counter);
// counter++;

// let counter = 2;
// console.log(2 * ++counter);

// let Counter = 2;
// console.log(2 * Counter++);

// let COunter = 2;
// console.log(2 * COunter);
// console.log(COunter++);
