/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    arr = arr.sort((a,b)=>(a-b))
    target = target.sort((a,b)=>(a-b))
    for(let i=0;i<target.length;i++){
        if(arr[i]!=target[i]){
            return false
        }
    }
    return true
};