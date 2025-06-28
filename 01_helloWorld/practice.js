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

const repeatString = function (string, num) {
    let repeated = "";
    for (let i = 1; i <= num; i++) {
        repeated += string;
        }
    return repeated;
};
console.log(repeatString("hey", 3));
