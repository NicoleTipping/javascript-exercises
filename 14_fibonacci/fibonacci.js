const fibonacci = function (num) {
    if (num < 0) {
        return "OOPS"
    };

    let fibArray = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray[num];
};

// Do not edit below this line
module.exports = fibonacci;
