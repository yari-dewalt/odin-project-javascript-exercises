const palindromes = function (arr) {
    let palindrome = false;
    arr = arr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, "");
    arr = arr.toLowerCase();
    console.log(arr);
  
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] === arr[arr.length - (i + 1)]) {
              palindrome = true;
          }
          else {
              palindrome = false;
              return palindrome;
          }
      }
     return palindrome;
  };

// Do not edit below this line
module.exports = palindromes;
