/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let arr = []
        for (let j = 0; j < nums.length; j++) {
            if (i != j) {
                arr.push(nums[j])
            }
        }
        let isSorted = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= arr[i - 1]) {
                isSorted = false
                break;
            }
        }
        if (isSorted === true) {
            return true
        }
    }
    return false
};