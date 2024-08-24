/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let leftArr = [];
    let rightArr = [];
    let finalArr = [];
    let val = 0;
    let res;
    for(let i=0;i<nums.length;i++){
        leftArr.push(val)
        val = val+nums[i]
    }
    for(let i=0;i<nums.length;i++){
        val = val-nums[i]
        rightArr.push(val)
    }
    for(let i=0;i<nums.length;i++){
        res = (leftArr[i]-rightArr[i])
        if(res>0){
            finalArr.push(res)
        }else{
            finalArr.push(-1*res)
        }
    }
    return finalArr
};