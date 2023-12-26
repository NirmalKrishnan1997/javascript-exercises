const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }

    if (num1 == num2) {
        return num1;
    }

    let sum = 0;
    let small = num1 < num2 ? num1 : num2;
    const large = num1 > num2 ? num1 : num2;

    while (small <= large) {
        sum += small;
        small++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
