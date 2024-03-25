/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let notDublicate = new Set()
    let result = []
    for(let num of nums ){
        if(notDublicate.has(num)){
           result.push(num)
        }else{
            notDublicate.add(num)
        }
    }
    return result
};