/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
    let k = original
    nums = nums.sort((a, b) => (a - b))
    console.log(nums,k)
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === k) {
                k = k * 2
                console.log(k,"1")
            }
        }
        console.log(k,"2")
    return k
};