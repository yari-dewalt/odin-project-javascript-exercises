const reverseString = function(string) {
    let length = string.length;
    let reversedString = "";

    for (let i = 0; i < length; i++) {
        let letter = string.charAt((length - i) - 1);
        reversedString += letter;
    }
    console.log(reversedString);
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
