const add = function (addendOne, addendTwo) {
  return addendOne + addendTwo;
};

const subtract = function (minuend, subtrahend) {
  return minuend - subtrahend;
};

const sum = function (array) {
  let resultSum = 0;
  array.forEach((item) => {
    resultSum += item;
  });
  return resultSum;
};

const multiply = function (array) {
  let resultMultiply = 1;
  array.forEach((item) => {
    resultMultiply *= item;
  });
  return resultMultiply;
};

const power = function (base, exponent) {
  const resultPower = base ** exponent;
  return resultPower;
};

const factorial = function (number) {
  if (number === 0) return 1;
  let resultFactorial = number;
  for (let i = number - 1; i >= 1; i--) {
    resultFactorial *= i;
  }
  return resultFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
