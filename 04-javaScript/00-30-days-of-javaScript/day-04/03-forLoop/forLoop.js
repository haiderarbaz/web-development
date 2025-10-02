/* 
  The "for" loop 
*/

/*
  Syntax:
    for (begin; condition; step or incre/decre) {
    // ... loop body ...
    }
*/

/*
  Take and example,
    A loop runs console.log(i) for i from 0 up to 3 (but not including 3):
*/
for (let i = 0; i < 3; i++) {
  console.log(i);
}
/*
  Output:
    Show 0,
    then 1,
    then 2.
*/

/* 
  Let's examine the for statement part by part.

    part		
      begin         let i = 0       Executes once upon entering the loop.
      condition     i < 3	          Checked before every loop iteration. If false, the loop stops.
      body          alert(i)        Runs again and again while the condition is truthy.
      incre/decre   i++             Executes after the body on each iteration.

      That is, 
        begin executes once, 
        and then it iterates: 
          after each condition test, body and step are executed.
      
    Below is more simpler way explaination:
      // for (let i = 0; i < 3; i++) alert(i)

        // run begin
          let i = 0
        // if condition → run body and run step
          if (i < 3) { alert(i); i++ }
        // if condition → run body and run step
          if (i < 3) { alert(i); i++ }
        // if condition → run body and run step
          if (i < 3) { alert(i); i++ }
        // ...finish, because now i == 3
*/

/* 
  Inline variable declaration
*/
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
// console.log(i);
//   The above line will give an error:
//     Error message: ReferenceError: i is not defined
/*
  Here in the above code, 
    The “counter” variable i is declared right in the loop. This is called an “inline” variable declaration. 
    Such variables are only accessed inside the loop not outside of the loop.
*/

/* 
  Instead of defining a variable, we could use an existing one:
*/
let i = 0;

for (i = 0; i < 3; i++) {
  // use an existing variable
  console.log(i); // 0, 1, 2
}
console.log(i); // 3, aceessed, because declared outside of the loop

/* 
  Skipping Parts:

    Any part of for loop can be skipped.
*/
/*
  1. You can omit begin if we don’t need to do anything at the loop start.
*/
let a = 0; // we have i already declared and assigned

for (; a < 3; a++) {
  // no need for "begin"
  console.log(a); // 0, 1, 2
}

/*
  2. You can also remove the step or incre/decre part:
*/
let b = 0;

for (; b < 3; ) {
  console.log(b++);
}
/* 
  This makes the loop identical to while (i < 3).
*/

/* 
  3. You can actually remove everything, creating an infinite loop: 
*/
for (;;) {
  // repeats without limits
}
/* 
  Uncomment the above and run the code to see the output.
*/

/*
  NOTE: 
    The two for semicolons ; must be present. Otherwise, there would be a syntax error.
*/
