/*
  Task: 1

    Last loop value
      What is the last value alerted by this code? Why?

        let i = 3;

        while (i) {
          alert( i-- );
        }
*/

/* 
  Answer:
    The last value will be 1.
    As we know loop runs till te value is truthy, if it encounters falsy value it will stop execution immediately
    The loop iteration decreases i by 1. 
    The condition while(i) stops the loop when i = 0.
*/
