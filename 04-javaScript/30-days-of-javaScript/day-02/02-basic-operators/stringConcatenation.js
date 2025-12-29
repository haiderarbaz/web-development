/* 
  String concatenation with binary +

  Usually, the plus operator + sums numbers.
  But, if the binary + is applied to strings, it merges (concatenates) them:
*/
let str = "my" + "name";
console.log(str);

/* 
  If any of the operands is a string, then the other one is converted to a string too.
  It doesn’t matter whether the first operand is a string or the second one.
*/
console.log("1" + 2);
console.log(2 + "1");

console.log(6 + 6 + "3"); // 123, not 663
console.log(2 + 2 + "1"); // 41, not 221
console.log(2 + 2 + "0"); // 40, not 220
console.log(2 + 2 + " "); // 4
console.log(2 + 2 + ""); // 4
/* 
  Operators work one after another. 

  Here, In the above code: 
    The first + sums two numbers, so it returns 12, 
    then the next + adds the string 3 to it, 
    so it’s like 12 + '3' = '123'
*/

console.log("0" + 2 + 4); // 024, not 06
/*
  Here, in the above code:
    The first operand is a string, 
    the compiler treats the other two operands as strings too. 
    The 2 gets concatenated to '0', so it’s like '0' + 2 = "02" and "02" + 4 = "024".
*/

/*
  The binary + is the only operator that supports strings in such a way. 
  Other arithmetic operators work only with numbers and always convert their operands to numbers.

  Below are the examples:
*/
console.log("6" - 4); // 2
console.log("7" * 2); // 14
console.log("8" / 4); // 2
console.log("12" % 6); // 0 --> Remaider
console.log("2" ** 3);
