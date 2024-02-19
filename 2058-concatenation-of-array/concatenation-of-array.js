/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
let first = [...nums]
let newArr = nums.concat(nums)
return newArr
};