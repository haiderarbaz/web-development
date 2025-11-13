/*
  Task 1:
    Create a small script called fileOperations.js
*/

const fs = require("fs");

// Create a new file and add a line of data
fs.writeFileSync("./tasks.txt", "Tasks 1: Learn Node.js\n");

// Append more data
fs.appendFileSync("./tasks.txt", "Tasks 2: Practice file handling\n");

// Read file
const result = fs.readFileSync("./tasks.txt", "utf-8");
console.log("File content:\n", result);

// Rename file
fs.renameSync("./tasks.txt", "./myTasts.txt");

// Copy
fs.cpSync("./myTasts.txt", "./copyMyTasks.txt");

// Unlink or Delete
fs.unlinkSync("./myTasts.txt");
