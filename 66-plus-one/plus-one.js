/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let newOne = BigInt(digits.join(''))
    let val = newOne+1n;
    return val.toString().split('')
};