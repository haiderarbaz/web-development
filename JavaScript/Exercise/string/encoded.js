// By using for of loop

const str = "geeks";
let encodedString = "";
for (const char of str) {
  const charCode = char.charCodeAt(0);

  //console.log(str[i] + " : " + char);

  const encodedChar = String.fromCharCode(charCode + 2);

  encodedString += encodedChar;
}
console.log(encodedString);

// By using general for loop

let str0 = "geeks";
let encodedString0 = "";

for (let i = 0; i < str0.length; i++) {
  let charCode = str0.charCodeAt(i);

  let encodedChar = String.fromCharCode(charCode + 2);

  encodedString0 = encodedString0 + encodedChar;
}
console.log(encodedString0);

let str1 = "geeks";

let encodedString1 = "";

for (let char of str1) {
  let charCode = char.charCodeAt(0);

  let encodedChar;
  if (char < 2) {
    encodedChar = String.fromCharCode(charCode + 1);
  } else {
    encodedChar = String.fromCharCode(charCode - 1);
  }

  encodedString1 = encodedString1 + encodedChar;
}
console.log(encodedString1);

let str2 = "geeks";

let encodedString2 = "";

for (let i = 0; i < str2.length; i++) {
  let charCode = str2.charCodeAt(i);

  let encodedChar;
  if (i < 2) {
    encodedChar = String.fromCharCode(charCode + 1);
  } else {
    encodedChar = String.fromCharCode(charCode - 1);
  }

  encodedString1 += encodedChar;
}
console.log(encodedString1);
