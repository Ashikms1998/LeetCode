/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    s = s.split("")
    let arr = [];
    let brr = [];
    let val = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            arr.push(i)
        }
    }
    for (let i = 0; i < s.length; i++) {
        let smallestVal = s.length
        for (let j = 0; j < arr.length; j++) {
            val = Math.abs(arr[j] - i)
            if (val < smallestVal) {
                smallestVal = val
            }
        }
        brr.push(smallestVal)
    }
    return brr;
};