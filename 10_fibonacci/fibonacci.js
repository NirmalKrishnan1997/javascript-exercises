const fibonacci = function(num) {
    const number = Number.isInteger(num) ? num : Number.parseInt(num);

    if (number < 0) {
        return "OOPS"
    }

    if (number === 0) {
        return 0;
    }

    let first = 1, second = 0;
    for(let i = 2; i <= number; i++) {
        let temp = first;
        first = first + second;
        second = temp;
    }

    return first;
};

// Do not edit below this line
module.exports = fibonacci;
