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

//String-------------------------------------------------------------------------------------------------------------------------------------
//JavaScript have 2 types of string 1)Primitive, 2)Object

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
