/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let arr =[];
    if(nums.length<3){
        return 0;
    }
    let count = 0;
    let a=0;
    for(let i =0;i<nums.length;i++){
        if(nums[i]-nums[i+1]===nums[i+1]-nums[i+2]){
            a++
            count = count+a;
        }else{
           a = 0;
        }
        
    }
    return count;
};