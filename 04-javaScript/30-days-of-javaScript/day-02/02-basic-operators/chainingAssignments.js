/* 
  Chaining assignments
    Chained assignments evaluate from right to left. 
    First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: c, b and a. 
    At the end, all the variables share a single value.
*/
let numb1, numb2, numb3;
numb1 = numb2 = numb3 = 2 + 2;
console.log(`numb1 value will be: ${numb1}`);
console.log(`numb2 value will be: ${numb2}`);
console.log(`numb3 value will be: ${numb3}`);
/*
  for better readability we can write like this
*/
numb1 = 3 * 3;
numb2 = numb1;
numb3 = numb2;
console.log(`numb1 value will be: ${numb1}`);
console.log(`numb2 value will be: ${numb2}`);
console.log(`numb3 value will be: ${numb3}`);
