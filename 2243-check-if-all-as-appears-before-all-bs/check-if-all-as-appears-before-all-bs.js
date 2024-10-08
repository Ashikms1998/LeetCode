/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
    let arr =[]
    for (let i =0; i < s.length; i++) {
        arr.push(s.charCodeAt(i))
    }
    for(let i =0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            return false
        }
    }
    return true
};