const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
	for (let number in arr) {
    sum += arr[number];
  }

  return sum;
};

const multiply = function(arr) {
  let total = 1;
  for (let number in arr) {
    total *= arr[number];
  }

  return total;
};

const power = function(a, b) {
  let result = 1;
	for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(a) {
  let result = 1;
	for (let i = 1; i < a + 1; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
