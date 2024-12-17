/**
 * print a triangle using *
 */

const symbol = "* ";

for (let i = 1; i < 6; i++) {
  console.log(symbol.repeat(i));
}

//to print reverse star
for (let i = 4; i > 0; i--) {
  console.log(symbol.repeat(i));
}

//to print alphabets
const alphabets = "a ";
for (let i = 1; i < 7; i++) {
  console.log(alphabets.repeat(i));
}
