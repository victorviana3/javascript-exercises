const fibonacci = function (inputNumber) {
  const memberNumber = Number(inputNumber);
  if (memberNumber < 0) return "OOPS";
  let fibonacci = [0, 1];
  for (let i = 1; i < memberNumber; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
  }
  return fibonacci[memberNumber];
};

// Do not edit below this line
module.exports = fibonacci;
