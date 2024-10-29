/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let nums = [];
    for(let i=0;i<arr.length;i++){
           let largest = arr[i+1]
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]>largest){
                largest = arr[j]
            }
        }
        if(largest!=undefined)nums.push(largest)
    }
    return [...nums,-1]
};