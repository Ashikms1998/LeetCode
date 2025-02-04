/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    let val = -1
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        
        if (nums[i] < nums[i + 1]) {
            sum = sum + nums[i]
        } else {
            sum = sum + nums[i]
            if(sum>val){
                val = sum
            }
            sum = 0
        }
    }
    return val
};