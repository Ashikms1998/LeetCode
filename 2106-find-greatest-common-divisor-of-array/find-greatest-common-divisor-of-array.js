/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    let arr = []
    arr.push(min)
    arr.push(max)
    for (let i = max; i > 0; i--) {
        if (arr[0] % i === 0 && arr[1] % i === 0) {
            return i
        }
    }
};