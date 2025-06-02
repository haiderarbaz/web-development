//for each loop

const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
  console.log(item);
});
console.log(values);

const values0 = coding.forEach((item) => {
  console.log(item);
  return item;
});
console.log(values0);

const values1 = coding.forEach((item) => {
  //console.log(item);
  return item;
});
console.log(values1);

//for each don't return any value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => num > 4);
console.log(newNums);

const myNums0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums0 = myNums.filter((num) => {
  return num > 4;
});
console.log(newNums0);

const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums1 = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums1.push(num);
  }
});
console.log(newNums1);

//book example

//reduce
const myNumbs = [1, 2, 3];
const myTotal = myNumbs.reduce(function (acc, curval) {
  return acc + curval;
}, 0);
console.log(myTotal);

const myNumbs0 = [1, 2, 3];
const myTotal0 = myNumbs.reduce(function (acc, curval) {
  console.log(`acc: ${acc} and curval: ${curval}`);

  return acc + curval;
}, 0);
console.log(myTotal0);

//in arrow function
const myNumbs1 = [1, 2, 3];
const myTotal1 = myNumbs1.reduce((acc, curv) => acc + curv, 0);
console.log(myTotal);
