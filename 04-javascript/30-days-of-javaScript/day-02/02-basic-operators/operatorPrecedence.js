/*
  Operator Precedence:
    If an expression has more than one operator, the execution order is defined by their precedence, (the default priority order of operators).

    Parentheses override any precedence, so if we’re not satisfied with the default order, we can use them to change it. For example, write (4 - 2) * 2.

    There are many operators in JavaScript. 
    
    Every operator has a corresponding precedence number. The one with the larger number executes first. 
    
    If the precedence is the same, the execution order is from left to right.

    The “unary plus” has a priority of 14 which is higher than the 11 of “addition” (binary plus). 
    That’s why, in the expression "+iPhones + +samsungPhones", unary pluses work before the addition.
*/
let expressions = (4 - 2) * 2;
console.log(`Result of expressions is: ${expressions}`);
