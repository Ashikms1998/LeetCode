/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
let first = nums
let newArr = first.concat(first)
return newArr
};