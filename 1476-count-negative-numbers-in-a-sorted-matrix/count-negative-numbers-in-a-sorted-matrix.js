/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count=0;
    let arrFlat = grid.flat();
    for(let i=0;i<arrFlat.length;i++){
        if(arrFlat[i]<0){
            count++
        }
    }
    return count;
};