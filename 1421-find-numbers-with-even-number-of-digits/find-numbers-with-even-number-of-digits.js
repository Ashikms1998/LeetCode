/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    for(i=0;i<nums.length;i++){
        let current = nums[i].toString().length
        console.log(current)
        if(current%2==0){
            count++;
        }
        
    }
    return count
};