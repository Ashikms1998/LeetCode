/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    let valA = Math.min(...nums1)
    let valB = Math.min(...nums2)
    return valB-valA
    
};