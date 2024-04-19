/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let isIncreasing = true;
    let isDecreasing = true;
    for(let i=0;i<nums.length-1;i++){
        if(nums[i+1]<nums[i]){
        isIncreasing = false; 
        }
    
        if(nums[i+1]>nums[i]){
            isDecreasing = false;
        }
    }
    if(isIncreasing!=true&&isDecreasing!=true){
    return false
    }else{
        return true;
    }
};