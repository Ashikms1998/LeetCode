/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = nums1.concat(nums2).sort((a,b)=>(a-b));
    if(nums3.length%2===0){
        let mid1 = Math.floor(nums3.length/2)-1
        let mid2 = mid1+1
    console.log(mid1,mid2)
    return ((nums3[mid1]+nums3[mid2])/2)
    }else{
        return nums3[Math.floor(nums3.length/2)]
    }
};