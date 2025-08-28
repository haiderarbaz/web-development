// Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let currentUserName = "Bilal";
console.log("Current username is:", currentUserName);

currentUserName = "Umar"; // Reassignment works because 'let' allows reassignment
console.log("Updated current username is:", currentUserName);

const userID = "bilal@javascript";
console.log("User id is:", userID);

userID = "umar@javascript"; // ❌ Error: Assignment to constant variable because 'const' prevents reassignment
console.log(userID); // This line will not execute
