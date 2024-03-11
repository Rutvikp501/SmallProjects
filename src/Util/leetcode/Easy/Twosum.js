let nums=[2,5,5,11];
let target = 10
let sum = 0;
var twoSum = function(nums, target) {
   for (let i=0;i<=nums.length;i++){
       for (let j=1;j<=nums.length;j++){
           sum = nums[i]+nums[j]
           if (sum==target&& i!=j){
               console.log(i,'-',j);
               return [i,j];
           }
       
   }
   }
};
twoSum(nums,target);

//https://leetcode.com/problems/two-sum/description/