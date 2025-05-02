"use strict";

console.log("Hey Arbaz");

//In-Built Object
//Watch again math and number object of hitesh video for better clearity

//Number Object:

const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

//Number.max-value
//Number.min-value

//Math Object:

//It's generates a Random Number
Math.random();

console.log(Math.ceil(4.2));
console.log(Math.floor(8.9));

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);

console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//It's generates PI Value
Math.PI;

//It's will round off a number
Math.round(1.8); //2
Math.round(1.2); //1
Math.round(1.6); //2

//It will give max number from a group of number
Math.max(2, 8, 4, 6, 5, 9);
Math.max(20, 800, 48, 6000, 5.9, 99999.9999);

//It will give min number from a group of number
Math.min(5, 4, 9, 2, 3, 1);

//It will give absolute value of a number
Math.abs(2);
Math.abs(-2);

//Template literal (We use backtick)---------------------------------------------------------------------------------------------------------------------------

let message = "This is \n my \n first \n Message";
console.log(message);

let message0 = 'This is \n my \n \' "first" \n Message';
console.log(message0);

let messsage1 = `This 
      is 
      my 
      first 
      message`;
console.log(messsage1);

let text = `Hello Arbaz

      How You Doing? 

      From 
      Nasim`;

console.log(text);

let firstName = "Arbaz Haider";
let text2 = `Hey ${firstName}

      How's your study going On?
      How's your Healyh?

      From
      Nasim`;

console.log(text2);

//Date and Time Object-------------------------------------------------------------------------------
let date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toLocaleString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());

console.log(typeof date);

let date1 = new Date("May 18 1997 10:20");
console.log(date1);
date1.getFullYear();
console.log(date1);

let date2 = new Date(1997, 4, 18, 10); //indexing of month is starting from 0.
console.log(date2);

let date3 = new Date(1997, 11, 12, 12);
console.log(date3);
date3.setFullYear(1998);
console.log(date3);
date3.setDate(24);
console.log(date3);
date3.getDate();
console.log(date3);

let date4 = new Date("01-14-2023");
console.log(date.toLocaleString());

let date5 = Date.now();
console.log(date5);
console.log(Date.now() / 1000);
console.log(Math.floor(Date.now() / 1000));

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myTimeStamp.getTime());

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString(`default`, {
  weekday: "long",
});
