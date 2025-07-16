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
    if (year < 1000) return false;
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
const convertToCelsius = function (temp) {
    return parseFloat(((temp - 32) * (5 / 9)).toFixed(1));
};
console.log(convertToCelsius(100)); //37.8

const convertToFahrenheit = function (temp) {
    return parseFloat((temp * (9 / 5) + 32).toFixed(1));
};
console.log(convertToFahrenheit(0)); //32

// 8
const removeFromArray = function (array, ...arg) {
    return array.filter((e) => !arg.includes(e));
};
console.log(removeFromArray([1, 2, "3", 4], "3", 1));

// 12
const factorial = function (num) {
    let sum = 1;
    for (let i = 1; i <= num; i++) {
        sum = sum * i;
    }
    return sum;
};
console.log(factorial(4));

// 13
const palindromes = function (string) {
    let str = string
        .toLowerCase()
        .replace(/[.," "\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .split("")
        .join("");
    let revStr = str
        .split("")
        .reverse()
        .join("");
    return str === revStr;
};
console.log(palindromes('racecar!')); //true
console.log(palindromes('Racecar!')); //true
console.log(palindromes('Animal loots foliated detail of stool lamina.')); //true
console.log(palindromes('A car, a man, a maraca.')); //true

// const fibonacci = function (num) {
//     let fibArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (i == 0) {
//             fibArray.push(i);
//         } else if(i > 0) {

//         }
//     } 
// };
// console.log(fibonacci(4)); //3
// console.log(fibonacci(15)); //610
// console.log(fibonacci(0)); //0
// console.log(fibonacci(-25)); //"OOPS"
// console.log(fibonacci("4")); //4

const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

const findTheOldest = function(people) {
    let agedPeeps = people.map((person) => ({
        name: person.name,
        age: (person.yearOfDeath ?? new Date().getFullYear()) - (person.yearOfBirth),
    }))
    .sort((a, b) => b.age - a.age);
    return agedPeeps[0];
};

console.log(findTheOldest(people));
