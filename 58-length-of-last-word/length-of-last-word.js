/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.trim().split(' ');
    if(arr.length<=1){
        return arr[0].length;
    }
    for(let i = 0;i<arr.length;i++){
        if(i=arr.length-1){
             return arr[i].length
        }
    }
};