/**
 * find the vowels in the given string
 */

const inputString = "Hello, How You Doing, And Where you have been";
const vowels = "aeiou";
for (let i = 0; i < inputString.length; i++) {
  if (vowels.includes(inputString[i])) {
    console.log(`${inputString[i]}, is Vowel Character`);
  } else {
    console.log(`${inputString[i]}, is not a Vowel Character`);
  }
}
