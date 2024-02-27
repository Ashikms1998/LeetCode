/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let leftInd = 0;
    let rightInd = nums.length - 1;
    while(leftInd<=rightInd){
        let midInd = Math.floor((leftInd+rightInd)/2);
        if(target===nums[midInd]){
            return midInd;
        }
        if(target<nums[midInd]){
            rightInd = midInd-1;
        }else{
             leftInd = midInd+1;
        }
    }
    return leftInd;
};