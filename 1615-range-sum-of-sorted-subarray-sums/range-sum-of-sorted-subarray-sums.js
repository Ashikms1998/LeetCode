/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    let arr = []
    let mod =1e9 + 7
   for(let i=0;i<nums.length;i++){
    let sum = 0;
    for(let j =0+i;j<nums.length;j++){
        sum = sum+nums[j]
        arr.push(sum)
        }
    }
   let sorted = arr.sort((a,b)=>(a-b))
    let total =0
    for(let i=left-1;i<right;i++){
        total = (total+sorted[i])%mod;

    }
    return total;
   };