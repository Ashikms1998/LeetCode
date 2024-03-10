/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr= [];
    let set1 = new Set(nums1);
    let uniqe1 = Array.from(set1);
    let set2 = new Set(nums2);
    let uniqe2 = Array.from(set2);
    for(let i=0;i<uniqe1.length;i++){
        for(let j=0;j<uniqe2.length;j++){
            if(uniqe1[i]===uniqe2[j]){
                arr.push(uniqe1[i])
            }
        }

    }
    return arr;
};