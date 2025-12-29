function greet(userName, userGreeting) {
  console.log(`Hello, ${userName}`);
  userGreeting();
}
greet("Arbaz", function () {
  console.log("How you doing?");
});

/* Arrow Function*/

let greets = (usrName, usrGreeting) => {
  console.log(`Hey, ${usrName}`);
  usrGreeting();
};

greets("Arbu", () => console.log("Where you have been? "));
