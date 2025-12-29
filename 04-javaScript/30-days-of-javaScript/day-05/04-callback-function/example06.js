function calculate(a, b, sum) {
  let result = a + b;
  sum(result);
  return result;
}

calculate(2, 7, function (sum) {
  console.log(`Sum is: ${sum}`);
});
