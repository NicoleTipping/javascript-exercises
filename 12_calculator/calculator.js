const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arrNums) {
  return arrNums.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (multNums) {
  return multNums.reduce((acc, curr) => acc * curr);
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
let sum = 1;
    for (let i = 1; i <= num; i++) {
        sum = sum * i;
    }
    return sum;
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
