/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let count
    for(let i=0;i<nums.length;i++){
            count = 0;
        for(let j=0;j<nums.length;j++){
            if(nums[i]===nums[j]){
                count++
            }
        }
        if(count===1){
            return nums[i]
        }
    }
};