function greeting(name) {
  console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = "Arbu";
  callback(name);
}

processUserInput(greeting);
