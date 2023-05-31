const fibonacci = function(member) {
    let arr = [1, 1];

    if (member < 0) {
      return "OOPS";
    }
    for (let i = 2; i < member; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }

    return(arr[member - 1]);
};

// Do not edit below this line
module.exports = fibonacci;
