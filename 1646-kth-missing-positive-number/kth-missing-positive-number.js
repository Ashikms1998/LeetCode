/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let brr = [];
    let crr=[];
    for (let i = 1; i <= arr[arr.length - 1]+k; i++) {
        brr.push(i)
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < brr.length; j++) {
            if (arr[i] === brr[j]) {
                brr[j] = -1
            }
        }

    }
    for(let i=0;i<brr.length;i++){
        if(brr[i]!=-1){
            crr.push(brr[i])
        }
    }
   return crr[k-1]


};