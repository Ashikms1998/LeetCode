/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
    let values = num.toString().split('').sort((a, b) => (a - b))
    let arr = []
    let brr = []
    let k = 0;
    while (k < values.length) {
        arr.push(values[k])
        if (k + 1 < values.length) {
            brr.push(values[k + 1])
        }
        k = k + 2
    }
    let a = Number(arr.join(""))
    let b = Number(brr.join(""))
    return a + b

};