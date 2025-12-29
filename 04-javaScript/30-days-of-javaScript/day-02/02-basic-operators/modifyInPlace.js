/* 
  Modify-in-place
*/
let j = 2;
j = j + 5;
j = j * 2;
console.log(`Final result of j will be: ${j}`);
/* 
  The above code can be shortened using the operators += and *=:
*/
j = 5;
j += 5;
j *= 2;
console.log(`Modified result of j will be: ${j}`);
/*
  “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.

  They have the same precedence as a normal assignment.
*/
j = 7;
j *= 3 + 5; // right part evaluated first,
console.log(`Again, the new value of j will be: ${j}`);
