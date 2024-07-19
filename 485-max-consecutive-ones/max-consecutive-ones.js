/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxi=0;
    let cnt=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            cnt++;
            maxi=Math.max(maxi,cnt);
        }
        else{
            cnt=0;
        }
    }
    return maxi;
};