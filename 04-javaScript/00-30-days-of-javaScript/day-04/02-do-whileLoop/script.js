/*
  Syntax:

    do{
        ---loop body---
    } while(condition)

  do...while loop, will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
*/
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

/*
  do...while loop, when you want the body of the loop to execute at least once regardless of the condition being truthy.

  Below is the code example.
*/
let a = 1;
do {
  console.log(a);
  a++;
} while (a < 1);
/*
  Above code example will execute once and print 1, then it will check the condition and exit the loop.
*/
