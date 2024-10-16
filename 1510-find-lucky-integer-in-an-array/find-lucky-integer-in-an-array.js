/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let count = 0;
    let brr = [];
    for(let i = 0;i<arr.length;i++){
        count = 0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
                count++
            }
        }
        if(arr[i]===count){
            brr.push(count)
        }
    }
    console.log(brr,count,arr)
    if(Math.max(...brr)>0){
        return Math.max(...brr)
    }else{
        return -1;
    }
};