/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
    let arr1 = [];
    let arr2 = [];
    for (let i = 1; i <= n; i++) {
        if (i % m === 0) {
            arr1.push(i)
        } else {
            arr2.push(i)
        }
    }
    let s = 0; let v = 0;
    let sum1 = arr1.map((x) => s = s + x)
    let sum2 = arr2.map((x) => v = v + x)
    return v - s

};