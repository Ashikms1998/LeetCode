/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let filtered = s.replace(/[A-Za-z]/g,"")
    let arr = [...new Set(filtered.split(''))]
    let sorted = arr.sort((a,b)=>(b-a))
    console.log(sorted)
    if(arr.length<2){
        return -1
    }else{
        return arr[1];
    }
};