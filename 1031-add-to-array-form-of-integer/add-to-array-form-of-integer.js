/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let joined =  num.join('');
    let sum = BigInt(joined) + BigInt(k);
    let stringed = sum.toString()
    let arr = [];
    for(let i=0;i<stringed.length;i++){
        arr.push(Number(stringed[i]))
    }
    return arr
};