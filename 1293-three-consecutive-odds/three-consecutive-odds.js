/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count =0;
    for(let i=0;i<arr.length-2;i++){
        if(arr[i]%2===1&&arr[i+1]%2===1&&arr[i+2]%2===1){
            return true
        }
    }
    return false
};