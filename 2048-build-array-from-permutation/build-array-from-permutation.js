/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let number=[];
    for (let i=0;i<nums.length;i++){
        const newOne = nums[nums[i]];
        number.push(newOne)
    }
    return number;
};