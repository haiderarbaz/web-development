/**
 * String
 *
 * JavaScript have 2 types of string 1)Primitive, 2)Object
 */

//1) Primitive String
let lastName = "Haider";
console.log(typeof lastName); //object
console.log(lastName[0]); //H

const name = "Arbaz";
const repoCount = 7;
console.log(name + repoCount + " value"); //Outadetd way
console.log(`Hello my name is ${name} and my repo count us ${repoCount}`); //string interpolation: is a programming technique that replaces placeholders in a string with their corresponding values.

//we can change primitive string into object string by using dot notations. JavaScript will treat this string as a object internally beacuse of JavaScript behaviour.
console.log(lastName.length); //6
console.log(lastName.includes("de")); //True
console.log(lastName.startsWith("Ha"));
console.log(lastName.startsWith("ha")); //output will be false because H is capital and here we give the input as small h.
console.log(lastName.endsWith("er")); //True
console.log(lastName.indexOf("d")); //3
console.log(lastName.toUpperCase()); //HAIDER
console.log(lastName.toLowerCase()); //haider

let lastName1 = "  Suleman ";
console.log(lastName1.trim()); //Suleman //it will trim the spaces(starting and ending both)
console.log(lastName1.replace("Sule", "Us")); //'  Usman '

const url = "https://arbazh.com/arbaz%20haider";
console.log(url.replace("%20", "-"));
console.log(url.includes("Arbaz"));

//2) Object String
let firstName = new String("Arbaz-Ha"); //used string constructor function
console.log(typeof firstName);
console.log(firstName.length);
console.log(firstName[0]);
console.log(firstName.toUpperCase());
console.log(firstName.charAt(2));
console.log(firstName.__proto__);
console.log(firstName.indexOf("z"));
console.log(firstName.split("-"));

const newString = firstName.substring(0, 4);
console.log(newString);

const anotherString = firstName.slice(-8, 4); //it takes negative value also
console.log(anotherString);

let messsage = "Hey! How You Doing?";
let words = messsage.split(" ");
console.log(words); // (4) ['Hey!', 'How', 'You', 'Doing?']
let wordss = messsage.replace("You", "U");
console.log(wordss);

/**
 *
 * Iterating over Strings
 *
 * When iterating over a string, you often need to perform tasks such as searching for a character, counting occurrences, or manipulating individual characters.
 *
 * Using for...of to Print Each Character
 *
 *
 */

// Example 1: Printing Each Character

// A simple example where we print each character of a string on a new line.
let displayMessage = "Hello ! How you doing? ";

// first way
for (let char of displayMessage) {
  console.log(char);
}

let userMessage = "I am doing Good. How about you?";
for (let char of userMessage) {
  console.log(char);
}

// Second Way

for (let i = 0; i < displayMessage.length; i++) {
  console.log(displayMessage[i]);
}

for (let i = 0; i < userMessage.length; i++) {
  console.log(userMessage[i]);
}

// EXample: 2 Breaking the loop at specific Character

// Suppose we want to stop iterating when we encounter the character 'a' & 'n':

// first way
for (let char of displayMessage) {
  if (char === "a") {
    break;
  } else {
    console.log(char);
  }
}

for (let char of userMessage) {
  if (char === "n") {
    break;
  } else {
    console.log(char);
  }
}

// Second way

for (let i = 0; i < displayMessage.length; i++) {
  if (displayMessage[i] === "u") {
    break;
  } else {
    console.log(displayMessage[i]);
  }
}

for (let i = 0; i < userMessage.length; i++) {
  if (userMessage[i] === "n") {
    break;
  } else {
    console.log(userMessage[i]);
  }
}

// Example 3: Counting Occurrences of a Character

// first way

let textMessage = "I love travelling";
let count = 0;
for (let char of textMessage) {
  if (char === "a") {
    count++;
  }
}
console.log(`The character 'a' appears ${count} times.`);

// second way

let count1 = 0;
for (let i = 0; i < textMessage.length; i++) {
  if (textMessage[i] === "t") {
    count1++;
  }
}
console.log(`The character 't' appears ${count1} times.`);

// Finding the Index of a Character

const whatsappMesssage =
  "You might want to find the position of a character within a string.";
for (let i = 0; i < whatsappMesssage.length; i++) {
  if (whatsappMesssage[i] === "p") {
    console.log(`Index of 'p':  ${i}`);
  }
}

for (let i = 0; i < whatsappMesssage.length; i++) {
  if (whatsappMesssage[i] === "c") {
    console.log(`Index of 'c': ${i}`);
  }
}

for (let i = 0; i < whatsappMesssage.length; i++) {
  if (whatsappMesssage[i] === "a") {
    console.log(`Index of 'a': ${i}`);
  }
}

// Filtering Characters

let vowels = "";
const vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

for (let char of whatsappMesssage) {
  if (vowelSet.has(char)) {
    vowels += char;
  }
}

console.log(vowels);

// Above code creates a new string with only the vowels from the original string.

/**
 * JavaScript String Method -
 *
 * 1.) charAt & charCodeAt
 *
 */

// Finding a Character at a Specific Index

let myText = "I am learning JavaScript";

const index = 5;

const char = myText.charAt(index);
console.log(char);

// The charAt method returns the character at a specified index. And if you will not pass any parameter it will return the first value. Because by default index starts at always zero.

const index0 = 12;

const char0 = myText.charAt(index0);
console.log(char0);

// Finding the Length of a String

const lengthOfText = myText.length;

console.log(lengthOfText);

const char1 = myText.charAt(lengthOfText - 1); // This will retuen the last character.
console.log(char1);

/**
 * charCodeAt()
 *
 * The charCodeAt method returns the ASCII code of the character at a specified index.
 *
 */

const asciiCode = myText.charCodeAt(lengthOfText - 1);
console.log(asciiCode);

const textMessage1 = "Currently i am larning Strings in JavaScript";
const lengthOfTextMessage = textMessage1.length;
console.log(lengthOfTextMessage);

let index1 = 42;
const asciiCode1 = textMessage1.charCodeAt(42);
console.log(`The asciicode of ${textMessage1.charAt(43)} is ${asciiCode1}`);

/**
 *
 * str.charAT()
 *
 * str.charAT() Returns character at given index of string.
 *
 * character = str.charAt(index)
 *
 * Arguments: The only argument to this function is the index in the string from where the single character is to be extracted. The range of this index is between 0 and length - 1, including the limits. If no index is specified then the first character of the string is returned as 0 is the default index used for this function.
 *
 * Return value: This function returns a single character located at the index specified as the argument to the function. If the index is out of range, then this function returns an empty string.
 *
 */

// Example 1:

function func() {
  let str = "JavaScript is object oriented language";

  let value = str.charAt(0);

  let value0 = str.charAt(4);

  console.log(value);

  console.log(value0);
}
func();

// Example 2:

// In this example the function charAt() finds the character at index 50. Since the index is out of bounds for the given string therefore the function returns "" an empty string.

function func0() {
  let str = "JavaScript is object oriented language";

  let value = str.charAt(50);

  console.log(`Char at index 50 is: ${value}`);
}
func0();

/**
 *
 * Working with String Methods
 *
 * Example: Using charAt and charCodeAt
 *
 */

let phoneText = "I need a job";
let index2 = 2;

let character = phoneText.charAt(index2);
console.log(`Character at ${index2} is: ${character}`);

let characterAsciicode = phoneText.charCodeAt(index2);
console.log(`Asciicode of characetr at ${index2} is: ${characterAsciicode}`);

/**
 *
 * str.charCodeAt()
 *
 * str.charCodeAt() method returns a Unicode character set code unit of the character present at the index in the string specified as the argument. The syntax of the method is as follows:
 *
 * str.charCodeAt(index)
 *
 * Arguments The only argument to this method is the index of the character in the string whose Unicode is to be used. The range of the index is from 0 to length - 1.
 * Return value: This method returns the Unicode (ranging between 0 and 65535) of the character whose index is provided to the method as the argument. If the index provided is out of range this method returns NaN.
 *
 */

// Example 1:

function func1() {
  let str = "ephemeral";

  let value = str.charCodeAt(4);

  console.log(value);
}
func1();

// In the above example the method charCodeAt() extracts the character from the string at index 4. Since this character is m, therefore this method returns the Unicode sequence as 109.

// Example 2:

function func2() {
  let str = "ephemeral";

  let value = str.charCodeAt(20);

  console.log(value);
}
func2();

// In the above example the method charCodeAt() extracts the character from the string at index 20. Since the index is out of bounds for the string, therefore this method returns the answer as NaN.

/**
 *
 * 2.) indexOf()
 *
 * indexOf is used to find the index of a particular character or substring in a given string. This method is very useful when you need to determine whether a character or substring exists in a string and where it is located.
 *
 * str.indexOf() function finds the index of the first occurrence of the argument string in the given string.
 * The value returned is 0-based.
 *
 * The syntax of the function is as follows:
 * str.indexOf(searchValue , index)
 *
 * Arguments: The first argument to the function searchValue is the string that is to be searched in the base string. The second argument to the function index defines the starting index from where the searchValue is to be searched in the base string.
 *
 * Return value: This function returns the index of the string (0-based) where the searchValue is found for the first time. If the searchValue cannot be found in the string then the function returns -1.
 *
 */

// Example 1:

function aboutTrain() {
  let str = "Departed Train";

  let index = str.indexOf("Train");
  console.log(index);
}
aboutTrain();

// In the above example, the function indexOf() finds the index of the string Train. Since the first and the only index where this string is present is 9, therefore this function returns 9 as the answer.

// Example 2:

function aboutTrain0() {
  let str = "Train Arrived";

  let index = str.indexOf("in Ar");
  console.log(index);
}
aboutTrain0();

// In the above example, the function indexOf() finds the index of the string 'in Ar'. Since the first and the only index where this string is present is 3, therefore this function returns 3 as the answer.

// Example 3:

function aboutTrain1() {
  let str = "Train Rescheduled";

  let index = str.indexOf("rescheduled");

  console.log(index);
}
aboutTrain1();

// In the above example, the function indexOf() finds the index of the string Train. Since the searchValue is not present in the string, therefore this function returns -1 as the answer.

// Example: 4

const displayMessage0 = "I am in Bangalore";
console.log(displayMessage0.indexOf("a"));
console.log(displayMessage0.indexOf("A"));
console.log(displayMessage0.indexOf("a", 3)); // It will start searching for 'a' after the 3rd position.
console.log(displayMessage0.indexOf("a", 2));

// Note: For any character which is not present in the given string and when you will try to find its index it will always give you -1.

//Example 5:

function findCharacter(text, char) {
  const index = text.indexOf(char);
  return index;
}
const result = findCharacter("I am Arbaz Haider", "p");
console.log(result);

const result0 = findCharacter("I am in Bangalore", "a");
console.log(result0);

const result1 = findCharacter("I currently learnig String Method", "M");
console.log(result1);

// Example 6:

function findCharacter0(text, char) {
  const index = text.indexOf(char);

  if (index === -1) {
    return "Character not Found";
  } else {
    return "Character is found in the String";
  }
}

const result2 = findCharacter0("There is no Tomorrow", "t");
console.log(result2);

const result3 = findCharacter0("There is no Tomorrow", "T");
console.log(result3);

// Write above example in Arrow function:

const findCharacter1 = (text, char) =>
  index === -1
    ? "Character is not Found"
    : "Character is Present in The String";

const result4 = findCharacter1("Hello ! How You Doing?", "!");
console.log(result4);

/**
 *
 * 3.) includes()
 * 
 * The includes method in JavaScript is a powerful tool for checking whether a given substring or character exists within a string. Unlike the indexOf method, which also serves a similar purpose, includes directly returns a Boolean value (true or false), making it more straightforward for conditional checks.
 * 
 * In JavaScript, includes() method determines whether a string contains the given characters within it or not. This method returns true if the string contains the characters, otherwise, it returns false. 
 * 
 * Note: The includes() method is case sensitive i.e, it will treat the Uppercase characters and Lowercase characters differently.
 * 
 * Syntax:  
 * 
 * string.includes(searchvalue, start)
 * 
 * Parameters Used: 
 * 
 * search value: It is the string in which the search will take place.
 * start: This is the position from where the search will be processed 
 (although this parameter is not necessary if this is not mentioned the search will begin from the start of the string).
 * Returns either a Boolean True indicating the presence or it returns a False indicating the absence.
 *
 */

// Example 1:

let str = "Welcome to Siwan";

let check = str.includes("Siwan");

if (check) {
  console.log("Present");
} else {
  console.log("Absent");
}

// Since the second parameter is not defined, the search will take place from the starting index. And it will search for Geeks, as it is present in the string, it will return a true.

// Example: 2

let str0 = "Welcom to Bangalore";
let check0 = str0.includes("Bangalore");

console.log(check0);

let str1 = "Welcome to Bangalore";
let check1 = str.includes("bangalore");

console.log(check1);

// // Even in this case the second parameter is not defined, so the search will take place from the starting index. But as this method is case sensitive it will treat the two strings differently, hence returning a boolean false.

// Example: 3

let str2 = "My Name is Arbaz Haider";
console.log(str2.length);

let check2 = str2.includes("H", 17);
console.log(check2);

// Example: 4

let str3 = "I am from Siwan";
console.log(str3.length);

let check3 = str3.includes("S", 11);
console.log(check3);

// In this case the second parameter is 11, so the search will take place from index 11, and since there is no 'S' after index 11, it returns false

// Example: 5

let str4 = "I Enjoy Travelling, Solo Bike Rides and Cooking";
console.log(str4.length);

let check4 = str4.includes("o", 48);
console.log(check4);

// The search will not be processed if the second parameter i.e computed index(starting index) is greater than or equal to the string length and hence return false.

// Example: 6

let str5 = "I Want to go Kashmir";
console.log(str4.length);

let check5 = str4.includes("o", -1);
console.log(check5);

// If the computed index(starting index) i.e the position from which the search will begin is less than 0, the entire array will be searched.

/**
 *
 * Example: 7
 *
 * Checking for Vowels
 *
 */
let text = "I love to code in dark mode.";
const vowelsPresent = "aeiouAEIOU";

for (let char of text) {
  if (vowelsPresent.includes(char)) {
    console.log(`${char} is a Vowel.`);
  }
}

/**
 *
 * Example: 8
 *
 * Conditional Checks
 *
 */

let textDisplay = "I love to code in dark mode.";
if (textDisplay.includes("dark")) {
  console.log("Person loves to code in dark mode.");
} else {
  console.log("Person loves to code in light mode.");
}

/**
 *
 * Example: 9
 *
 * Using includes for More Complex Conditions
 *
 */

let emailId = "arbazhaider@gmail.com";
let checkString = "Japan";

if (emailId.toLowerCase().includes(checkString.toLowerCase())) {
  console.log("The string includes the word 'light' in any case.");
} else {
  console.log("The string does not include the word 'light'.");
}

let checkString0 = "Haider";
if (emailId.toLowerCase().includes(checkString0.toLowerCase())) {
  console.log("The string includes the word 'Haider'.");
} else {
  console.log("The string does not include the word 'Haider'.");
}

/**
 *
 * 4.) toUpperCase() and toLowerCase()
 *
 * In JavaScript, we can easily convert strings to different cases using the built-in  methods toLowerCase and toUpperCase. These methods are particularly useful in various scenarios, such as comparing user input in a case-insensitive manner or formatting text for display.
 *
 * The toLowerCase Method
 * The toLowerCase method converts all characters in a string to lowercase.
 * 
 * str.toLowerCase()
 str.toLowerCase() method converts the entire string to lower case. This method does not affect any of the special characters, digits, and the alphabets that are already in the lower case. 
 
 * Syntax:  
 * str.toLowerCase()
 * 
 * Return value: 
 * This method returns a new string in which all the upper case letters are converted to lower case.
 * 
 * * The toUpperCase Method
 * The toUpperCase method converts all characters in a string to uppercase.
 * 
 * str.toUpperCase()
 str.toUpperCase() method converts the entire string to Upper case. This method does not affect any of the special characters, digits, and the alphabets that are already in the upper case. 
 
 * Syntax: 
 * str.toUpperCase()
 * 
 * Return value: 
 * This method returns a new string in which all the lower case letters are converted to upper case.
 *
 */

// Example: 1
function myName() {
  var str = "Arbaz Haider";
  var string = str.toUpperCase();
  console.log(string);
}
myName();

// In the above example the method toUpperCase() converts all the lower case alphabets to their upper case equivalents.

// Example: 2
function myEmail() {
  var str = "arbazhaider830@gmail.com";
  var string = str.toUpperCase();
  console.log(string);
}
myEmail();

// In the above example the method toUpperCase() converts all the lower case alphabets to their upper case equivalents without affecting the special characters and the digits.

// Example: 3
function myName0() {
  var str = "ARBAZ HAIDER";
  var string = str.toLowerCase();
  console.log(string);
}
myName0();

// In the above example, the method toLowerCase() converts all the upper case alphabets into lower case alphabets without affecting all those characters that are already in the lower case.

// Example: 4
function myEmail0() {
  var str = "ARBAZHAIDER830@GMAIL.COM";
  var string = str.toLowerCase();
  console.log(string);
}
myEmail0();

// In the above example the method toLowerCase() converts all the upper case alphabets into lower case alphabets without affecting the special characters, digits and all those characters that are already in lower case.

/**
 *
 * 5.) substring()
 *
 * The substring method in JavaScript is incredibly useful for extracting parts of a string. It allows you to specify a start and end index to extract a portion of the string. Here's how you can make the most of this method.
 * 
 * What is the substring Method?
 * The substring method returns a part of the string between the start and end indexes, or to the end of the string if the end index is omitted. The character at the end index is not included.
 * 
 * Syntax: 
 * string.substring(Startindex, Endindex)
    * start: The index where to start the extraction. The first character's index is 0.
    * end (optional): The index before which to end the extraction. The character at this index will not be included.
    
 * Return value: It returns a new string which is part of the given string.
 *
 */

// Example: 1

let userName = "Shahazad Manzar Imam Siddiqui";
console.log(userName.length);

a = userName.substring(0, 8);
console.log(a);

b = userName.substring(9, 15);
console.log(b);

c = userName.substring(15, 20);
console.log(c);

d = userName.substring(20, 29);
console.log(d);

e = userName.substring(-1);
console.log(e);

f = userName.substring(2.5);
console.log(f);

g = userName.substring(2.9);
console.log(g);

// Index always start with 0. If still we take index as negative, it will be considered as zero and index can't be in fraction if it is found so, it will be converted into its just lesser whole number.

/**
 *
 * Practical Use Case: Truncating Long Names
 *
 * Let's consider a practical scenario where you need to display a username on a card, but if the username is too long, you want to truncate it and add ellipses (...).
 *
 */

// Example: 1
let cardHolderName = "Shahzad Manzar Imam Siddiqui";
const maxLength = 10;

let displayName = cardHolderName;

if (cardHolderName.length > maxLength) {
  displayName = cardHolderName.substring(0, maxLength) + "...";
}

console.log(displayName);

// Example: 2
let cardHolderName0 = "Arshad Imam Siddiqui";
const maxLength0 = 10;

let displayName0 = cardHolderName0;

if (cardHolderName0.length > maxLength0) {
  displayName0 = cardHolderName0.substring(0, maxLength0) + "...";
}
console.log(displayName0);

/**
 *
 * Responsive Design Example
 *
 * In responsive design, you might want to show a truncated version of text on smaller screens and the full version on larger screens.
 *
 */

let userName0 = "Haider Suleman";
const maxLength1 = 10;

function displayName1(userName0, maxLength1) {
  return userName0.length > maxLength1
    ? userName0.substring(0, maxLength1) + "..."
    : userName0;
}
const getDisplayName = displayName1(userName0, maxLength);
console.log(getDisplayName);

let userName1 = "Nasim Haider";
const maxLength2 = 10;

function getDisplayName1(userName1, maxLength2) {
  return userName1.length > maxLength2
    ? userName1.substring(0, maxLength2) + "..."
    : userName1;
}
const nameDisplay = getDisplayName1(userName1, maxLength2);
console.log(nameDisplay);

/**
 * 
 * Substring vs. Slice
 * While both substring and slice can be used to extract parts of a string, they have subtle differences. The main difference is in how negative indices are handled.

 * substring: Treats negative indices as 0.
 * slice: Allows negative indices, counting from the end of the string.
 * 
 */

let string = "Azlan Imam Siddiqui";
console.log(string.length);

console.log(string.substring(0, 6));

console.log(string.slice(0, 6));

console.log(string.slice(-8));

console.log(string.slice(-10));

console.log(string.slice(-19));

/**
 *
 * 6.) trim()
 * 
 * What is the trim Method?
 * The trim method removes whitespace from both ends of a string. Whitespace in this context includes spaces, tabs, and any line break characters.
 * 
 * str.trim() method is used to remove the white spaces from both the ends of the given string.
 * 
 * Syntax:  
 * str.trim()
 * 
 * Return value: 
 * This method returns a new string, without any of the leading or the trailing white spaces. 

 * Why Use the trim Method?
 * Leading and trailing spaces can cause issues, especially when processing user input. For instance, if you ask a user to enter their name, they might inadvertently include spaces at the beginning or end. Using trim helps ensure you work with clean data.
 *
 */

// Example: 1
function test() {
  var str = "  ArbazHaider      ";
  var st = str.trim();
  console.log(st);
}
test();

/**
 * Practical Use Cases : Cleaning User Input
 */

// Example: 2
// Consider a scenario where you want to get the first six characters of a user's name, but the input might have leading or trailing spaces.

let userInput = "    Hola, I love JavaScript    ";
console.log("Original length:", userInput.length); // Output: 25

let cleanedInput = userInput.trim();
console.log("Trimmed length:", cleanedInput.length); // Output: 17
console.log("Trimmed input:", cleanedInput); // Output: "Hola, I love GFG"

let firstSixChars = cleanedInput.substring(0, 6);
console.log("First 6 characters:", firstSixChars); // Output: "Hola, "

// Example: 3

function demo() {
  var str = "  Arbaz Haider From Siwan.      ";
  var st = str.trim();
  console.log(st);
}
demo();

/**
 *
 * str.trimStart() method is used to remove the white spaces from the start of the given string. It does not affect the trailing white spaces.
 *
 * Syntax:
 * str.trimLeft()
 *
 * Return value:
 * This method returns a new string, without any of the leading white spaces.
 *
 */

// Example: 4
function demo1() {
  var str = "  Arbaz Haider      ";
  var st = str.trimStart();
  console.log(st);
}
demo1();

/**
 *
 * str.trimEnd() method is used to remove the white spaces from the end of the given string. It does not affect the white spaces at the start of the string.
 *
 * Syntax:
 * str.trimRight()
 *
 * Return value:
 * This method returns a new string, without any of the trailing white spaces.
 */

// Example: 5
function demo0() {
  var str = "  Arbaz Haider      ";
  var st = str.trimEnd();
  console.log(st);
}
demo0();

/**
 * Key Points
 *
 * Trim Leading and Trailing Spaces: The trim method is useful for removing unwanted spaces from the start and end of a string.
 * Improves Data Quality: Especially useful for cleaning up user input before further processing.
 * Supports Method Chaining: You can chain trim with other string methods to write more concise and readable code.
 *
 * Note: Trim is used to remove white spaces only from the start and end of a string and not from in-between.
 */
