/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let evn = []
    let odd = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2===0){
            evn.push(nums[i])
        }else{
            odd.push(nums[i])
        }

    }
    return [...evn,...odd]
};