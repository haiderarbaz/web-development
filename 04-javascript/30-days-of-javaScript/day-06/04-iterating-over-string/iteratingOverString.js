/*
  There are several methods to iterate over characters of a string in JavaScript.
*/

/*
  1. Using for Loop:
    The classic for loop is one of the most common ways to iterate over a string. 
    Here, we loop through the string by indexing each character based on the string's length.

    Syntax:
    
      for (statement 1 ; statement 2 ; statement 3){
          code here...
      };
*/

let greetMessage = "Hello";
for (let i = 0; i < greetMessage.length; i++) {
  console.log(greetMessage[i]);
}
/*
Output:
      H
      e
      l
      l
      o
*/

/*
  2. Using for...of Loop:
    The for...of loop is a modern way to iterate directly over the characters of a string without needing to use indexing.

    Syntax:

      for ( variable of iterableObjectName) {
          // Code...
      }
*/
let userName = "Faizan";
for (let char of userName) {
  console.log(char);
}
/*
Output:
      F
      a
      i
      z
      a
      n
*/

/*
  3. Using forEach() Method
    The forEach() method can be used on arrays, so we first split the string into an array of characters, then use forEach() to iterate.

    Syntax:

      array.forEach(callback(element, index, arr), thisValue)
*/
let userAddress = "Sitamarhi";
userAddress.split("").forEach((char, index) => {
  console.log(`${index}: ${char}`);
});
/*
Output:
      0: S
      1: i
      2: t
      3: a
      4: m
      5: a
      6: r
      7: h
      8: i
*/

/*
  4. Using charAt() Method with while Loop
    The charAt() method returns the character at a given index. 
    Combining it with a while loop allows us to iterate over the string by manually tracking the index.

    Syntax

      let index = 0;
      while (index < str.length) {
        let char = str.charAt(index);
        // code here...
        index++;
      }
*/

let str = "Hello";
let index = 0;
while (index < str.length) {
  console.log(str.charAt(index));
  index++;
}
/*
  Output:
        H
        e
        l
        l
        o
*/

/*
  5. Using reduce() Method
    The reduce() method can be used to iterate over a string by first splitting it into an array, then using the accumulator to concatenate or perform operations on each character.

    Syntax:

      string.split('').reduce((acc, char) =>
      {
        // Process char    return acc + char;}, ''
      );
*/

let userID = "Faizu1234";
let result = userID.split("").reduce((acc, char) => acc + char, "");
console.log(result); // Outputs: "Hello"

/*
  6. Using for...in Loop
    The for...in loop allows us to iterate over the indices of the string, which we can then use to access each character.

    Syntax:

      for (let index in str) {
          const char = str[index];
          // code here...
      }
*/

let userMessage = "Hello";
for (let index in userMessage) {
  console.log(userMessage[index]);
}

/*
  Output:
        H
        e
        l
        l
        o
*/
