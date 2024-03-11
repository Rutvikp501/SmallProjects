let nums1 = [1,2,3,0,0,0]
let nums2 = [2,5,6]
let m=3, n=3;
let mergedata = []
var merge = function(nums1, m, nums2, n) {
   for (let i = m - 1, j = n - 1, k = m + n - 1; j >= 0; --k) {
        nums1[k] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }
};