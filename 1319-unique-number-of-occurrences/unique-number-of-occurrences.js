/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj = {}
    for(let i of arr){
        if(obj[i]){
            obj[i]++
        }else{
            obj[i]=1
        }
    }
    let keyVal = Object.values(obj)
    let unique = [...new Set(keyVal)]
    return unique.length===keyVal.length
};