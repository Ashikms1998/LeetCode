/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let newArr = new Set() 
    for(elements of nums){
        if(newArr.has(elements)){
            return elements
        }else{
            newArr.add(elements)
        }
    }
};