/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let count = 0;
    // let length = candyType.length
    let maxComb = candyType.length/2
    let unique = new Set(candyType)
    for(i of unique){
        count++;
    }
    if(count<=maxComb){
        return count;
    }else{
        return maxComb;
    }

};