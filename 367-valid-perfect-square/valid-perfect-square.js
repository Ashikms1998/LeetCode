/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num===1){
        return true;
    }
    let i=1;
    while(i<=Math.floor(num/2)){
        if(i*i===num){
            return true
        }
        i++
    }
    return false
};