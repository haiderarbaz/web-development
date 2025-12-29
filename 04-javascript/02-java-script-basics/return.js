/**
 *
 * Return:
 * Return is used to stop the execution of a function and return a value to the point where the function was called.
 *
 *
 * Key Notes:
 * Functions can only return one value. To return multiple values, use an object or an array.
 * After a return statement, no further code in the function is executed.
 * The return keyword is valid only inside a function.
 * You can return any value (numbers, strings, objects, arrays, etc.) or no value at all.
 * If no return statement is provided, the function implicitly returns undefined.
 *
 */

function add(x, y) {
  return x + y;
  console.log(x + y);
}
console.log(add(7, 8));

const res = add(9, 6);
console.log(res);
