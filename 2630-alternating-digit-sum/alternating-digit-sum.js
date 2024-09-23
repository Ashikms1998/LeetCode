/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let sumO = 0;
    let sumE = 0;
    let nums = String(n)
    for(let i = 0;i<nums.length;i++){
        num = parseInt(nums[i])
        if(i%2===0){
            sumO = sumO + num
        }else{
            sumE = sumE + num
        }
    }
    return sumO - sumE
};