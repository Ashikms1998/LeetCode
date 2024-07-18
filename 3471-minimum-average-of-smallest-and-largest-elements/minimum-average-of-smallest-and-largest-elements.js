/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {


    nums.sort((a, b) => a - b)
    let array = []

    while (nums.length > 1) {
        let last = nums.pop()


        let first = nums.shift()
        array.push((first + last) / 2)


    }
    if (nums.length === 1) {

        array.push((nums[0] + last) / 2)
    }
    return Math.min(...array)

};