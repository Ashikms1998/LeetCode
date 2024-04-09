/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
   const unique = new Set(nums)
   let count=0;
   unique.forEach(num => {
        if (num !== 0) {
            count++;
        }
   });
    return count;
}