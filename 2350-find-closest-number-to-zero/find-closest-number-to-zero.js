/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let closestNum = Infinity;
    let absClosestNum = Infinity;
    for(let indexI=0; indexI<nums.length; indexI++){
        const val = nums[indexI];
        const diffWithZero = Math.abs(val);
        if(diffWithZero<absClosestNum || (diffWithZero===absClosestNum && val>0)) {
            absClosestNum = diffWithZero;
            closestNum = val;
        }
        // else if(val===Math.abs(closestNum))  closestNum = val;
    }

    return closestNum;
};