/* 
  To get a character at position pos, 
    - use square brackets [pos] or 
    - call the method str.at(pos).

  The first character starts from the zero position.
*/

/*
  The first character:
*/
let str = "Hello";
console.log(str[0]); // H
console.log(str.at(0)); // H

let userName = `Ahmad`;
console.log(str[0]); // H
console.log(str.at(0)); // H

/* 
  The lastcharacter:
*/
console.log(str[-1]);
console.log(str[str.length - 1]);
console.log(str.at(-1));
/*
  .at(pos) method has a benefit of allowing negative position. 
  If pos is negative, then it’s counted from the end of the string.

  But for sqaure brackets it return undefined for negative indexes so instead of indexes you have to mentioned [str.length-1] in brackets sqauare [] like above
*/

console.log(str.at(-2));
console.log(str[-2]);
console.log(str[str.length - 2]);

/* 
  .at(-1) means the last character, and .at(-2) is the one before it, etc.

  The square brackets always return undefined for negative indexes, so instead of indexes you have to mentioned [str.length-1] in brackets sqauare [] like above
*/

/* 
  We can can also iterate over characters using for..of:
*/
for (let char of "Hello") {
  console.log(char);
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
  String charCodeAt() Method
    
    The JavaScript str.charCodeAt() method returns a Unicode character set code unit of the character present at the index in the string specified as the argument. 
    
    The index number ranges from 0 to n-1, where n is the string's length.

    Syntax:
      str.charCodeAt(index)

    Parameters:
      This method accepts a single parameter.

      - index: It is the index of the character in the string whose Unicode is to be used. The range of the index is from 0 to length - 1. 

    Return value:
      This method returns the Unicode (ranging between 0 and 65535) of the character whose index is provided to the method as the argument. 
      If the index provided is out of range this method returns NaN

    Note: The str.charCodeAt(index) method does not change the value of the original string.
*/
/*
  Example 1: This example shows the basic use of the String.prototype.charCodeAt() Method.
*/

function func1() {
  let str = "JAVASCRIPT";
  let value = str.charCodeAt(0);
  console.log(value);
}

func1(); // Output: 74

/*
  Example 2: In this example, the method charCodeAt() extracts the character from the string at index 4. 
  Since this character is m, therefore this method returns the Unicode sequence as 109.
*/

// JavaScript to illustrate charCodeAt() method
function func2() {
  let str = "ephemeral";

  // Finding the code of the character at
  // given index
  let value = str.charCodeAt(4);
  console.log(value);
}

func2(); // Output: 109

/*
  Example 3: In this example, the method charCodeAt() extracts the character from the string at index 20. 
  Since the index is out of bounds for the string, therefore this method returns the answer as NaN. 
*/

// JavaScript to illustrate charCodeAt() method
function func3() {
  let str = "ephemeral";

  // Finding the code of the character
  // at given index
  let value = str.charCodeAt(20);
  console.log(value);
}
func3(); // Output: NaN
