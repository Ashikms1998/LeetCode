/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function(nums) {
    let length = nums.length;
    let numSet = new Set(nums); // Create a Set from the array for O(1) lookups
    let missedElem = [];

    for (let i = 1; i <= length; i++) {
        if (!numSet.has(i)) {
            missedElem.push(i); // Add the missing element to missedElem
        }
    }
    
    return missedElem;
};

