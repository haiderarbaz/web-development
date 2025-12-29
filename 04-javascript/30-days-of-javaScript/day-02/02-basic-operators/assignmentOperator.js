/* 
  Assignment
    An Assignment '=' is also an operator. 
    
    It has very low precedence priority of 2.

    That’s why, when we assign a variable, 
      like h = 6 / 2 + 1, 
        the calculations are done first and then the = is evaluated, storing the result in h.
*/
let h = 6 / 2 + 1;
console.log(`Result of h is: ${h}`);

/*
  Assignment = returns a value
    All operators in JavaScript return a value. 
    That’s obvious for + and -, but also true for =.

    The call z = value writes the value into z and then returns it.
*/
let n1 = 1;
let n2 = 2;

let n3 = 3 - (n1 = n2 + 1);
console.log(`Final value of n1 will be: ${n1}`);
console.log(`Result of n3 is: ${n3}`);
