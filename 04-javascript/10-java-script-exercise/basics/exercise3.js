/** Logical Operators */

const readLineSync = require("readline-sync");

const fixedPrices = {
  Pizza: 200,
  Burger: 150,
  Biryani: 300,
  Coke: 50,
  Combo: 350,
};

console.log("Available items and their Prices");
for (const item in fixedPrices) {
  console.log(`${item}: ${fixedPrices[item]}`);
}
const userName = readLineSync.question("Enter Your Name: ");
const orderItem = readLineSync
  .question(
    "What you want to order? Pizza or Burger or Biryani or Coke or Combo: "
  )
  .trim();

if (fixedPrices.hasOwnProperty(orderItem)) {
  const itemPrice = parseInt(
    readLineSync.question("Enter the Price You're Paying: ")
  );
  if (!isNaN(itemPrice) && itemPrice >= fixedPrices[orderItem]) {
    console.log(`Order Successfull ! Hey ${userName}, enjoy your ${orderItem}`);
  } else {
    console.log(
      `Order is not Successfull ! Hey ${userName}, you need to pay at least ${fixedPrices[orderItem]}, for ${orderItem}`
    );
  }
} else {
  console.log(
    "Invalid item selected. Please choose from the available options."
  );
}
