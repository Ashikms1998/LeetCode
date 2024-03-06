/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n === 1) {
        return true;
    }
    while (n % 2 === 0 && n > 1) {
        n = n / 2;
    }
    return n === 1;
};