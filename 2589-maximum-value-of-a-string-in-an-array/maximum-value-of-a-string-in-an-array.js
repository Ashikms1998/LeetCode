/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
    let arr = [];
    for (let i = 0; i < strs.length; i++) {
        if (Number(strs[i]) >= 0) {
            arr.push(strs[i])
        } else {
            arr.push(strs[i].length)
        }
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i])
    }
    return Math.max(...arr)
};