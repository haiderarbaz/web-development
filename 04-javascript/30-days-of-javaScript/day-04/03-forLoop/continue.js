/* 
  Continue to the next iteration
*/

/*
  The continue Keyword/directive is a “lighter version” of break. 
    It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).
    
    You can use it if we’re done with the current iteration and would like to move on to the next one.
*/
for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  console.log(i); // 1, then 3, 5, 7, 9
}
/*
  Why this output?
    Iteration:
      when i = 0: 0 % 2 == 0 → true → continue (skip console.log, go to next iteration)
      when i = 1: 1 % 2 == 0 → false → alert 1
      when i = 2: 2 % 2 == 0 → true → continue (skip console.log)
      when i = 3: 3 % 2 == 0 → false → alert 3
      when i = 4: 4 % 2 == 0 → true → continue (skip console.log)
      when i = 5: 5 % 2 == 0 → false → alert 5
      when i = 6: 6 % 2 == 0 → true → continue (skip console.log)
      when i = 7: 7 % 2 == 0 → false → alert 7
      when i = 8: 8 % 2 == 0 → true → continue (skip console.log)
      when i = 9: 9 % 2 == 0 → false → alert 9

  Here,
    i % 2 == 0
      checks if "i" is even;

      When the "i" is even, continue skips the console.log(i) line
      When the "i" is odd, continue is not executed, so console.log(i) runs

  OR you can say,
    For even values of i, the continue keyword/directive stops executing the body and passes control to the next iteration of for (with the next number). 
    So the console.log is only prints odd values.
*/

/* 
  NOTE:
    The continue directive helps decrease nesting

      A loop that shows odd values could look like this:
      for (let i = 0; i < 10; i++) {

        if (i % 2) {
          alert( i );
        }

      }

      From a technical point of view, this is identical to the example above. 
      In that code, we can just wrap the code in an if block instead of using continue.

      But as a side effect, this created one more level of nesting (the console call inside the curly braces). If the code inside of if is longer than a few lines, that may decrease the overall readability.
*/
