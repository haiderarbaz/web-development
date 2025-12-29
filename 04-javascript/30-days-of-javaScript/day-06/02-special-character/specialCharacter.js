/*
  Special characters:

    Special character are used to create "New Line", "Quotes", "Backslash", "Tab", "Backspace", "Form Feed", "Vertical Tab" and much more.
*/

/*
  It is still possible to create multiline strings with single and double quotes by using a so-called “newline character”, written as \n, which denotes a line break:
*/
let guestList = "Guests:\n *Arbu\n *Faizu\n *Ahmad";
console.log(guestList);

let str1 = "Hello,\nWorld!";
console.log(str1);

let str2 = `Hello,
World!`;
console.log(str2);

console.log(str1 === str2);

/* The str1 and str2 are equal, just written differently" */

/* 
  There are other, less common special characters:

  Character	    Description
  \n	          New line

  \r	          In Windows text files a combination of two characters \r\n represents a new break, 
                while on non-Windows OS it’s just \n. That’s for historical reasons, most Windows software also   understands \n.

  \', \", \`	  Quotes('Single', "Double", `Backticks`)

  \\	          Backslash

  \t	          Tab

  \b, \f, \v	  Backspace, Form Feed, Vertical Tab – mentioned for completeness, coming from old times, not used nowadays

*/

/* 
  All special characters start with a backslash character \. 
  
  It is also called an “escape character”.

  Because it’s so special, if we need to show an actual backslash \ within the string, we need to double it:
*/
console.log(`The backslash: \\`); // The backslash: \

console.log("I'm the Walrus!");
