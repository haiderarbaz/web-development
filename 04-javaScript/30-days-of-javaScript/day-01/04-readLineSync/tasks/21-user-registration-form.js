/*
  Task 21:
    User Registration Form

    Description:
      Create a simple user registration system using readline-sync that collects and validates user information before submission.

    Requirements:
      1. Username Input:
        Ask for a username
        Username must be at least 3 characters long
        Keep asking until valid

      2. Password Input:
        Ask for a password (hidden input using hideEchoBack)
        Password must be at least 6 characters long
        Keep asking until valid

      3. Email Input:
        Ask for an email address
        Email must contain "@" symbol
        Keep asking until valid

      4. Age Input:
        Ask for age (use questionInt())
        Age must be 18 or above
        Keep asking until valid

      5. Confirmation:
        Display all entered information (except password - show as ****)
        Ask "Is this information correct?" using keyInYN()
        If YES: Display "Registration successful!"
        If NO: Display "Registration cancelled"

    Sample Output:
      Enter username: ab
      Username must be at least 3 characters!
      Enter username: john123

      Enter password: ****

      Enter email: johngmail.com
      Invalid email! Must contain @
      Enter email: john@gmail.com

      Enter age: 15
      You must be 18 or older!
      Enter age: 25

      --- Registration Summary ---
      Username: john123
      Password: ****
      Email: john@gmail.com
      Age: 25

      Is this information correct? [y/n]: y
      Registration successful!

    Bonus Challenge:
      Add a "Confirm Password" field that must match the original password
      Add phone number validation (10 digits)
      Allow user to re-enter specific fields instead of cancelling completely

*/

const readlineSync = require("readline-sync");

// Password input (hidden)
let password = readlineSync.question("Enter password: ", {
  hideEchoBack: true,
});

// Input with validation
let email;
while (true) {
  email = readlineSync.question("Enter email: ");
  if (email.includes("@")) break;
  console.log("Invalid email!");
}

// Confirmation
if (readlineSync.keyInYN("Submit?")) {
  console.log("Form submitted!");
}
