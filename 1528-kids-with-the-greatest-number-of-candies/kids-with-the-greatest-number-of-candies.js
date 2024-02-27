/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let final =[];
    for(let i = 0;i<candies.length;i++){
    let isBig = true;
        let newCandy = candies[i]+extraCandies;
        for( let j = 0;j<candies.length;j++){
            if(newCandy<candies[j]){
                 isBig = false;
                 break;
            }
        }
        final.push(isBig);
        
    }
    return final;
};