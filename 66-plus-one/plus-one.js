/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let newOne = BigInt(digits.join(''))
    console.log(newOne)
    let val = newOne+1n;
    console.log(val)
    return val.toString().split('')
};