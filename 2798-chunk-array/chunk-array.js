/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if(size>arr.length&&arr.length>0){
        return [arr];
    }else if(arr.length<0){
        return
    }else{
    let newArr = []
    let length = Math.ceil((arr.length)/size)
    let n = 0;
    let m=size
    for(i=0;i<length;i++){
        let one = arr.slice(n,n+size)
        newArr.push(one)
        n=n+size
    }
    return newArr;
    }
};
