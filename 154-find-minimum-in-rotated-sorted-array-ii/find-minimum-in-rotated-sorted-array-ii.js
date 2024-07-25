/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    //Example 1:

    // nums.sort((a,b)=>(a-b))
    // return nums[0];

    //Example 2:

    return Math.min(...nums)
    
};