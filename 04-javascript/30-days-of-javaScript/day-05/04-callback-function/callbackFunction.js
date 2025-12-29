/* 
  Callback Functions:
    A callback function is a function that is passed as an argument to another functions.

    It is called “callback” because it is “called back” later, after some operation is done.


    Example:

      Imagine you book a pizza 🍕 delivery.

      You give the shop your phone number (callback).

      When your pizza is ready, they call you back.

      You don’t wait doing nothing — you just let them call when ready.
*/

/* Syntax */

// // Function that accepts a callback

// function functionName(parameter1, parameter2, callback) {
//   // Do something
//   callback(); // Execute the callback
// }

// // Calling it with a callback

// functionName(value1, value2, function () {
//   // Callback code here
// });

/* Example: */
function addParameter(parameter1, parameter2, callback) {
  let result = parameter1 + parameter2;
  callback(result);
  return result;
}

addParameter(6, 12, function (sum) {
  console.log("Result is: ", +sum);
});
