const convertToCelsius = function(inputTemp) {
  let celsius = (inputTemp- 32) * 5/9
  celsius = Number(celsius.toFixed(1))
  return celsius
};

const convertToFahrenheit = function(inputTemp) {
   let fahrenheit = (inputTemp * (9/5)+32)
  fahrenheit = Number(fahrenheit.toFixed(1))
  return fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
