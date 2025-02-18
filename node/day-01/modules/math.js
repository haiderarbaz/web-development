function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// module.exports = add;
// module.exports = sub;
// here the sub function will override the add function

// to return multiple things we can use JAVASCRIPT OBJECT
// module.exports = {
//   addFn: add,
//   subFn: sub,
// };

// function mul(a, b) {
//   return a * b;
// }
// function div(a, b) {
//   return a / b;
// }

// single exports or default exports here we are doing exports as a object
// module.exports = {
//   mul,
//   div,
// };

// by using exports object we can do multiple exports
exports.mod1 = (a, b) => a % b;
exports.mod2 = (a, b) => a % b;
exports.mod3 = (a, b) => a % b;

// here we are getting anonymous function because this function has no name and we don't what this function will do and here mod1, mod2, mod3 is property
