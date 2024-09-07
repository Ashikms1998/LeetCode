/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    let sum1= nums1.reduce((accumulator,currentVal)=>accumulator+currentVal);
    let sum2= nums2.reduce((accumulator,currentVal)=>accumulator+currentVal);
    let diff = Math.abs(sum2-sum1)/nums1.length
    if(sum1>sum2){
        return -1*diff
    }else{
        return diff
    }
};