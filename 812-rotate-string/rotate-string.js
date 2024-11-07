/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    for (let i = 0; i < s.length; i++) {
        let a = s.split('')
        let shifted = a.shift()
        a.push(shifted)
        s = a.join('');
        console.log(a)
        if (s === goal) {
            return true
        }
    }
    return false
};