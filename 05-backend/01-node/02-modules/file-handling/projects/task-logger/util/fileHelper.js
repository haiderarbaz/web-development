const fs = require("fs");
const path = require("path");

// File path for saving tasks
const filePath = path.join(__dirname, "../tasks.txt");

// Function for Adding a new task
function addTask(task) {
  fs.appendFileSync(filePath, task + "\n");
  return "Task added successfully";
}

// Function for reading all task
function readTask() {
  if (!fs.existsSync(filePath)) {
    return "No file found!";
  } else {
    return fs.readFileSync(filePath, "utf-8");
  }
}

module.exports = { addTask, readTask };
