/*
  Comma
    The comma operator , is one of the rarest and most unusual operators.
    The comma operator allows us to evaluate several expressions, dividing them with a comma ,.
    Each of them is evaluated but returns only the last value.
*/
let expression = (1 + 2, 3 + 4);
console.log(expression); // 7 (the result of 3 + 4)

/* 
  Here, In the above code 
    the first expression 1 + 2 is evaluated and its result is thrown away. 
    Then, 3 + 4 is evaluated and returned as the result.


  Comma operator has very low precedence, lower than =, so parentheses are important in the above code.
  
*/
