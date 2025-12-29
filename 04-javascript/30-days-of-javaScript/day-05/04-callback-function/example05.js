function process(data, callback) {
  console.log("Processing:", data);
  callback();
}
process("data", function () {
  console.log("Done Processing!");
});
