/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let arr = [];
    let arr3 = [...arr1]
    for(let i=0;i<arr2.length;i++){
        for(let j=0;j<arr1.length;j++){
            if(arr2[i]===arr1[j]){
                arr.push(arr1[j])
                arr3[j] = -1
            }
        }
    }
    arr3.sort((a,b)=>(a-b))
    for(let i=0;i<arr3.length;i++){
        if(arr3[i]!=-1){
            arr.push(arr3[i])
        }
    }
    return arr
};