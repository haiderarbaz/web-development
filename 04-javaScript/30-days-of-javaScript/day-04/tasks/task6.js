/* 
  Task: 6

    Repeat until the input is correct
      Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

      The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

      Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
*/

/* 1st Way */
let value;
do {
  value = prompt("Enter a number greater than 100", "0");
} while (value !== null && value !== "" && value <= 100);
/*
  As we know:
    do { ... } - ensures the program / or in this case prompt runs at least once.

      The condition:

        value !== null - user didn’t click Cancel/ESC, AND
        value !== "" - user didn’t leave it blank or empty line, AND
        value <= 100 - user entered 100 or less.

        If any of the above coditions fail, the loop stops.
        Like:
          if user enters a number > 100, OR
          if user click "Cancel/ESC" (null), OR
          if user enters an empty line('')
*/

/* 2nd Way */
let num;
do {
  num = prompt("Enter a number greater than 100", "0");
} while (num <= 100 && num);
/*
  As we already knew:
    do { ... } - ensures the program / or in this case prompt runs at least once.

      The condition:

        num <=100 - user entered the number is 100 or less, AND
        num is false when num is "null" or an "empty string".

        If any of the above coditions fail, the loop stops.
        Like:
          if user enters a number > 100, OR
          if user click "Cancel/ESC" (null), or enters an empty line('')

        NOTE:
          If num is null then num <= 100 is true, so without the 2nd check the loop wouldn’t stop if the user clicks CANCEL. Both checks are required.
*/

/* Alternative 3rd Way */
/* Using While Loop */
/* But this will behave slightly different from above 2 */
let input;

while (true) {
  input = prompt("Enter a number greater than 100:", "");

  if (input === null || input === "") break; // Cancel or empty - stop
  if (input > 100) break; // Valid input - stop
}
/*
  The while(true) makes the exit conditions more explicit.
*/
