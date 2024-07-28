/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let arr = [];
    let brr = [];
    let count=0;
    for(let i=1;i<=a;i++){
        if(a%i===0){
            arr.push(i)
        }
    }
    for(let i=1;i<=b;i++){
        if(b%i===0){
            brr.push(i)
        }
    }
    for(let i=0;i<arr.length;i++){
        for(j=0;j<brr.length;j++){
            if(arr[i]===brr[j]){
                count++
            }
        }
    }
    return count;
};