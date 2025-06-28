// 1
function camelize(str) {
    return str
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join("");
}
console.log(camelize("list-style-image"));

// 2
function filterRange(arr, a, b) {
    return arr.filter((num) => num >= a && num <= b)
}
console.log(filterRange([5, 3, 8, 1], 1, 4));

// 3
let arr = [5, 2, 1, -10, 8];
console.log(arr.sort((a, b) => b - a));

// 4
let arr1 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr1);

function copySorted(arr1) {
    return arr1.slice().sort();
}
console.log(sorted);
console.log(arr1);

// 4
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
console.log(shuffleArray([1, 2, 3]));

// 5
function unique(strings) {
    return strings.filter((name, index, strings) => index === strings.indexOf(name));
};

console.log(unique(["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
]));

// 6
const repeatString = function (string, num) {
    if (num < 0) return "ERROR";
    let repeated = "";
    for (let i = 1; i <= num; i++) {
        repeated += string;
    }
    return repeated;
};
console.log(repeatString("hey", 3));

// 7
const reverseString = function (string) {
    return string
        .split("")
        .reverse()
        .join("");
};
console.log(reverseString("how You Doinn yooo"));

// 9
const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (isNaN(num1) || isNaN(num2)) return "ERROR";

    let sum = 0;
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            sum += i;
        }
        return sum;
    } else {
        for (let i = num2; i <= num1; i++) {
            sum += i;
        }
        return sum;
    };
};
console.log(sumAll(1, 4));

// 10
const leapYears = function (year) {
    if(year < 1000) return false;
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return true;
    } else {
        return false;
    }
};
console.log(leapYears(2000));
console.log(leapYears(1996));
console.log(leapYears(700)); //false
console.log(leapYears(1900)); //false

// 11
const convertToCelsius = function(temp) {
  return parseFloat(((temp - 32) * (5/9)).toFixed(1));
};
console.log(convertToCelsius(100)); //37.8

const convertToFahrenheit = function(temp) {
  return parseFloat((temp * (9/5) + 32).toFixed(1)); 
};
console.log(convertToFahrenheit(0)); //32

// 8
const removeFromArray = function (array, ...arg) {
    return array.filter((e) => !arg.includes(e));
};
console.log(removeFromArray([1, 2, "3", 4], "3", 1));