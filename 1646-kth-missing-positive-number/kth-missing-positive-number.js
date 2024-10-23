/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let brr = [];

    for (let i = 1; i <10000; i++) {
        if(!arr.includes(i)){
            brr.push(i)
        }
    }
    return brr[k-1]


};