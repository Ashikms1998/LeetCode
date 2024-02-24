/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0
    for(let i=0;i<nums.length;i++){
        let isDuplicate = false;
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                isDuplicate = true;
                break;

            }
        }
        if(!isDuplicate){
            nums[k]=nums[i];
            k++;
        }
    }
    return k;
};