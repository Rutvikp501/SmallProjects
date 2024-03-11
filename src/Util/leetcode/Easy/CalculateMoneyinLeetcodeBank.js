var totalMoney = function(n) {
    if (n < 1) {
        throw new Error("n must be a positive integer");
      }
    
      // Initialize variables
      let amount = 0;
      let i = 0, j = 1;
        let  start = 1;
        while(i < n){
            amount += j;
            j += 1;
            i += 1;
            if(i % 7 == 0){
                start += 1;
                j = start;
            }
        }
        return amount;

    
};

let n = 20 
console.log(totalMoney(n));

//https://leetcode.com/problems/calculate-money-in-leetcode-bank/description/