/*
  Strings are immutable:
    It means that once a string is created, it cannot be changed or modified in place.

    If you try to "modify" a string, JavaScript actually creates a new string instead, the original one stays unchanged.
    
    Strings can’t be changed in JavaScript. It is impossible to change a character.
*/
let str = "Hello";
str[0] = "J"; // This will NOT work
console.log(str); // Output: "Hello"

let text = "Hi";

text[0] = "h"; // This will NOT work
console.log(text[0]); // Output: H

/*
  But string variables can be reassigned
*/
str = "World"; // Allowed (you’re pointing the variable to a NEW string)
console.log(str);
/* 
  Immutability applies to the string value, not the variable. 
*/

/* 
  The usual workaround is to create a whole new string and assign it to str instead of the old one.
*/
text = `h` + text[1];
console.log(text); // Output: hi

/* 
  You can use slice() also to create a new string
*/
text = "J" + text.slice(1);
console.log(text); // Output: "Ji"
