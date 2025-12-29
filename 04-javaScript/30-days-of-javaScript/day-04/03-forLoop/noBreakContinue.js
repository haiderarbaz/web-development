/*
  No break/continue to the right side of ‘?’
    
    Syntax constructs that are not expressions cannot be used with the ternary operator ?. In particular, keyword/directives such as break/continue aren’t allowed there.
*/

// let i = 10;
// if (i > 5) {
//   alert(i);
// } else {
//   continue;
// }

/*
  For example, if we take the above code:
    This code will not run it will give an Error message:
      SyntaxError: Illegal continue statement: no surrounding iteration statement
*/

/*
  …and rewrite it using a question mark:
*/

// (i > 5) ? alert(i) : continue;
/* 
  The above line of code will also not run it will give an
    SyntaxError: Unexpected token 'continue'
*/

/* 
  NOTE:
    Continue can only be used inside a loop, you can't use continue in a standalone if...else statement or with ternary (?) opeartor.
*/
// for(let i = 0; i < 8; i++){
//   (i>5) ? console.log(i) : continue;
// }
/* 
  The above code will also give an SyntaxError: Unexpected token 'continue'
*/
