/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    let arr=[]
    let splitLength = n;
    if((m*n)===original.length&&splitLength<=original.length){
        for(let i=0;i<n;i++){
            for(let j=0;j<original.length;j++){
                arr.push(original.slice(j,splitLength))
                j= splitLength-1;
                splitLength = splitLength+n;
            }
    return arr
        }
    }else{
        return []
    }

};