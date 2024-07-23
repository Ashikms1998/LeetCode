/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    let arr = [];
    nums.sort((a,b)=>b-a)
    let sortedArr = [];
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j <= nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++
            }
        }
        arr.push([nums[i], count])
    }
        console.log(arr)
    arr.sort((a, b) => (a[1] - b[1]))
    for (let i = 0; i < nums.length; i++) {
        sortedArr.push(arr[i][0])
    }
    
    console.log(sortedArr)
    return sortedArr
};