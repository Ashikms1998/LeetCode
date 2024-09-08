/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    let copy = [...nums]
    let arr = [];
    copy = copy.sort((a, b) => (a - b))
    while (copy.length > 0) {
        let alice = copy.shift()
        let bob = copy.shift();
        arr.push(bob, alice)
    }
    return arr
};