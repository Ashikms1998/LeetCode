/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    nums.sort((a, b) => (b - a))

    let a = nums[0] - 1
    let b = nums[1] - 1
    return a * b



};