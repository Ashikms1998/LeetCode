/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
    let arr = [];
    for (let i = 0; i < strs.length; i++) {
        if (Number(strs[i]) >= 0) {
            arr.push(Number(strs[i]))
        } else {
            arr.push(strs[i].length)
        }
    }
    return Math.max(...arr)
};