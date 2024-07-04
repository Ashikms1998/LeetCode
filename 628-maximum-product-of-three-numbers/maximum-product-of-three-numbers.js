/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    nums = (nums.sort((a, b) => a - b));
    let first = nums[0] * nums[1] * nums[nums.length - 1];
    let second = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
    console.log(first,second)
    if (first > second) {
        return first
    } else {
        return second
    }
    
};