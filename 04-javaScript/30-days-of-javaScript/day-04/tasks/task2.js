/* 
  Task: 2
  
    Which values does the while loop show?
      For every loop iteration, write down which value it outputs and then compare it with the solution.

      Both loops alert the same values, or not?

        1.The prefix form ++i:

          let i = 0;
          while (++i < 5) alert( i );

        2.The postfix form i++

          let i = 0;
          while (i++ < 5) alert( i );
*/

/* 
  Answer:
    1.The prefix form ++i: 
      From 1 to 4

      ++i → increment first, then returns the new value and check the condition.

        i = 0 → ++i = 1 → check (1 < 5) condition pass - log 1

        i = 1 → ++i = 2 → check (2 < 5) condition pass - log 2

        i = 2 → ++i = 3 → check (3 < 5) condition pass - log 3

        i = 3 → ++i = 4 → check (4 < 5) condition pass - log 4

        i = 4 → ++i = 5 → check (5 < 5) condition fail - stop
      
      O/P:
        1, 2, 3, 4

    2.The postfix form i++
      From 1 to 5

      i++: Returns the current value first, check the condition with old value then increments.
      In postfix (i++) console.log(i) runs after increment happened.
        The flow will be
          i++ returns 0 (the old value)
          Compare: 0 < 5 → true
          i is incremented to 1 (this already happened!)
          Loop body runs: console.log(i) → logs 1
        
          i = 0 → check (0 < 5) condition pass - then i++ makes i = 1 → log 1

          i = 1 → check (1 < 5) condition pass - then i++ makes i = 2 → log 2

          i = 2 → check (2 < 5) condition pass - then i++ makes i = 3 → log 3

          i = 3 → check (3 < 5) condition pass - then i++ makes i = 4 → log 4

          i = 4 → check (4 < 5) condition pass - then i++ makes i = 5 → log 5

          i = 5 → check (5 < 5) condition fail - stop
*/

/*
  Key Difference

    Prefix ++i: Increment happens before the condition check, here condition is checked with the new value.

    Postfix i++: Condition is checked with the old value, then increment happens, postfix allows one extra run.
 */
