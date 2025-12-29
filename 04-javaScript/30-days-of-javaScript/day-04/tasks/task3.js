/*
  Task: 3
  
    Which values get shown by the "for" loop?
      
      For each loop write down which values it is going to show. Then compare with the answer.

      Both loops alert same values or not?

        1. The postfix form:
          for (let i = 0; i < 5; i++) console.log( i );
        
        2. The prefix form:
          for (let i = 0; i < 5; ++i) console.log( i );
*/

/*
  1. The postfix form:
*/
for (let i = 0; i < 5; i++) console.log(i);

/* 
  2. The prefix form:
*/
for (let i = 0; i < 5; ++i) console.log(i);

/*
  Answer:
    0 to 4 from both cases.

      for (let i = 0; i < 5; i++) console.log( i );

      for (let i = 0; i < 5; ++i) console.log( i );
    
    As we already know the algorithm of for:
    1. Execute once i = 0 before everything (begin).
    2. Check the condition i < 5
    3. If condition is true execute the loop body console.log(i), and then i++/++i

    Here, the increment i++ is separated from the condition check.

    The value returned by the increment is not used here, so there’s no difference between i++ and ++i.
*/
