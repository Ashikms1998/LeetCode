/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
    for (let i = 0; i < num.length; i++) {
        let val = num[i];
        let count = 0
        for (let j = 0; j < num.length; j++) {
            if (num[j] == i) {
                count++
            }
        }
    if(count!=val){
            return false
        }
    }
    return true
};