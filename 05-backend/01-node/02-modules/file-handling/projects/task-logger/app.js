const chalk = require("chalk");

const fileHelper = require("./util/fileHelper");

console.log(chalk.blue("Adding task...."));
console.log(
  chalk.green(fileHelper.addTask("Learn Node.js modules and file-handling"))
);

console.log(chalk.yellow("Reading task...."));
console.log(chalk.white(fileHelper.readTask()));
