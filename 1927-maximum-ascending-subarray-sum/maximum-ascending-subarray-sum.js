/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    let arr = []
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) {
            sum = sum + nums[i]
        } else {
            sum = sum + nums[i]
            arr.push(sum)
            sum = 0
        }
    }
    return Math.max(...arr)
};