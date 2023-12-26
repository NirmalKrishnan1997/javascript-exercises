const reverseString = function(text) {
    if (text === '') {
        return '';
    }

    const splittedString = text.split('');
    splittedString.reverse();
    return splittedString.join('');
};

// Do not edit below this line
module.exports = reverseString;
