var largestOddNumber = function(num) {
    let largestOdd = "";
    for (let i = num.length - 1; i >= 0; i--) {
      const digit = parseInt(num[i]);
      if (digit % 2 !== 0) {
        largestOdd = num.substring(0, i + 1);
        break;
      }
    }
    return largestOdd;
  };
  
  let num = "52";
  console.log(largestOddNumber(num));

  //https://leetcode.com/problems/largest-odd-number-in-string/description/