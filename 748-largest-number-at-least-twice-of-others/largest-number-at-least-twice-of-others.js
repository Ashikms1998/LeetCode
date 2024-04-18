/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let nums1 =[...nums]
    
    let sorted = nums1.sort((a,b)=>(a-b));
    if(sorted[nums.length-1]/2>=sorted[nums.length-2]){
        for(let i=0;i<nums.length;i++){
            if(nums[i]===sorted[nums.length-1]){
                return i;
            }
        }
    }else{
        return -1
    }
};