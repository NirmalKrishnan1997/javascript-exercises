const palindromes = function (str) {
    const strWithoutPunctuations = str.toUpperCase().replace(/[^\w\d]/g, "");
    const newStr = strWithoutPunctuations.split("").reverse().join("");

    return  strWithoutPunctuations === newStr;
};

// Do not edit below this line
module.exports = palindromes;
