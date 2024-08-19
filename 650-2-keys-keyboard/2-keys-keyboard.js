/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    let result = 0
    for(let i = 2; i <=n; i++){
        while(n % i === 0){
            result = result + i
            n = n/i
        }
    }
    return result
};