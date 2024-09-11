/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
    let b1 = start.toString(2)
    let b2 = goal.toString(2);
    let count = 0;
    let max = Math.max(b1.length, b2.length)
    b1 = b1.padStart(max, '0');
    b2 = b2.padStart(max, '0');
    for (let i = 0; i < b1.length; i++) {
        if (b1[i] != b2[i]) {
            count++
        }
    }
    return count
};