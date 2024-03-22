/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let arr = [];
    let h= s.split(' ')
    for(let i= 0;i<k;i++){
        arr.push(h[i])
    }
    return arr.join(' ')
};