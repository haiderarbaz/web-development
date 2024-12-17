//print the lenth of characters without using length property

const userName = "Arbaz Haider";

for (let i = 0; i < userName.length; i++) {
  console.log(userName[i]);
}

let count = 0;
for (let i = 0; i < userName.length; i++) {
  count++;
  //console.log(`Number of characters in string is ${count}`);
}
console.log(`Number of characters in string is ${count}`);
