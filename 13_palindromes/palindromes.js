const palindromes = function (string) {
    let str = string
        .toLowerCase()
        .replace(/[.," "\/#!$%\^&\*;:{}=\-_`~()]/g,"")
        .split("")
        .join("");
    let revStr = str
        .split("")
        .reverse()
        .join("");
    return str === revStr;
};

// Do not edit below this line
module.exports = palindromes;
