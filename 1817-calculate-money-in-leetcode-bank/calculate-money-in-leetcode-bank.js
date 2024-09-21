/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let day = 1;
    let week = 0;
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum = sum + day + week;
        day++
        if (i % 7 === 0) {
            week++;
            day = 1;
        }
    }
    return sum
};