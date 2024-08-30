/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {

    for (let i = 0; i < k; i++) {
        let min = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[min]) {
                min = j
            }
        }
        nums[min] = nums[min] * multiplier
    }
    return nums
};