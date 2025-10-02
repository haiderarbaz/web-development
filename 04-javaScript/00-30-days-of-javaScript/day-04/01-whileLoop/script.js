/*
  Syntax:

    while(condition){
      ---code---
      ---loop body---
    }

*/

/* 
  While the condition is truthy, the code from the loop body is executed.

  Below is code example.
*/
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
/* 
  A single execution of the loop body is called an iteration. 
  The loop in the code above makes three iterations.
*/

/*
  Note:
    If i++ was missing from the example above, the loop would repeat (in theory) forever. 
    In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

    Below is code example for it. To test it remove the comment and run it.
*/
// let a = 0;
// while (a < 3) {
//   console.log(a);
// }

/*
  Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by while.
*/

/* 
  A shorter way to write while (i != 0) is while (i):

  Below is code example.
*/
let b = 5;
while (b) {
  console.log(b);
  b--;
}
/*
  when b becomes 0, the condition becomes falsy and the loop stops.

  while(b),
    It means keep looping as long as b is a truthy value.

    As we know JavaScript excepts a "boolean" (true/false) but gets something else, it automatically convert that value to either "true" or "false"

      In the above code:  
        b is number, not a boolean.
    
    And we also know that
      if the condition is truthy, loop runs,
      if the condition is falsy, loop stops immediately.

    when 
      b = 5, JavaScript treat this a "true", loop continues.
      b = 4, JavaScript treat this a "true", loop continues.
      b = 3, JavaScript treat this a "true", loop continues.
      b = 2, JavaScript treat this a "true", loop continues.
      b = 1, JavaScript treat this a "true", loop continues.
      b = 0, JavaScript treat this a "false", loop stops immediately.

    And we already know that 
      "0" is considered as falsy.
      
    Here, while(i) is equivalent to,
      while(i !== 0 && i !== null && i !== undefined && i !== "" && i !== NaN && i !== false)
        because javascript uses truthy/falsy evaluation.
*/

/*
  Curly braces are not required for a single-line body.
  If the loop body has a single statement, you can omit the curly braces {...} 

  Below is code example.
*/
let c = 3;
while (c) console.log(c--);
