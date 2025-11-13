const fs = require("fs");

// 1. Create or Write to a File

// writeFileSync() (Synchronous)
// Synchronous - This method blocks the code until the file is written.
fs.writeFileSync("./test.txt", "Hello World! from sync write");
console.log("File created synchronous");

// writeFile()(Asynchronous);
// Asynchronous - The callback runs when the task completes — this is non-blocking.
fs.writeFile("./test0.txt", "Hello World! from async write", (err) => {
  if (err) throw err;
  console.log("File created asynchronous");
});

// 2. Read a file

// raedFileSync()(Synchronous)
const data = fs.readFileSync("./contacts.txt", "utf-8");
console.log(data);

// This will read the content of file and return the result
// When you use a Synchronous task it will give you the result stored in a varaible like in the above code

// readFile(Asynchronous)

// const result = fs.readFile("./contacts.txt", "utf-8");
// console.log(result);

// The above code will give an error.
// it will expect a call back function everytime with err, and result as arguments

fs.readFile("./contacts.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(result);
  }
});

// This code will run and read the content

// 3. Append (Add More Data)
fs.appendFileSync("./contacts.txt", "\nHelal: +91 87879 87870");
console.log("Number append successfully");

// append date
fs.appendFileSync("./contacts.txt", `\n${Date.now()} Hey there\n`);

// 4. Copy (Create a copy)
fs.cpSync("./contacts.txt", "./copyContacts.txt");
console.log("File copied succesfully");

fs.copyFileSync("./test.txt", "./copytest.txt");
console.log("File copied succesfully");

// 5. Delete or Unlink (Delete a file)
fs.unlinkSync("./copyContacts.txt");
console.log("File deleted successfully");

fs.unlink("./copytest.txt", (err) => {
  if (err) {
    console.log("Err", err);
  } else {
    console.log("File deleted successfully");
  }
});

// 6. Status of a file
console.log(fs.statSync("./contacts.txt"));

// Check whether it's a file or not
console.log(fs.statSync("./contacts.txt").isFile());

// 7. Crete a dir
fs.mkdirSync("mini-tasks/01-task", { recursive: true });

fs.mkdirSync("mini-tasks/02-task", { recursive: true });

// 8. Rename a File or Folder

// Rename a File
fs.renameSync("./test0.txt", "./test00.txt");
console.log("File renamed successfully");

fs.renameSync("./mini-tasks", "./tasks");
console.log("Folder renamed successfully");

// 9. Check if file is present or not
if (fs.existsSync("./contacts.txt")) {
  console.log("File is present!");
} else {
  console.log("Not found any file with this name!");
}
