/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let OgArr1 = new Set(nums1)
    let OgArr2 = new Set(nums2)
    let OgArr3 = new Set(nums3)
    let finalArr = []
    let arr = [...OgArr1,...OgArr2,...OgArr3]
    arr.sort((a,b)=>(a-b));
    for(let i =0;i<arr.length;i++){
        if(arr[i]===arr[i+1]){
            finalArr.push(arr[i])
        }
    }
    let Og = new Set(finalArr)
    return [...Og]
};