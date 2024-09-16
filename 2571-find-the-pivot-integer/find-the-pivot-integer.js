/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let sum = 0;
    let pvt = 0;
    let pvt2 = 0;
    for(let i=1;i<=n;i++){
      sum = sum + i
    }
    for(let i=1;i<=n;i++){
        pvt = pvt + i

        if(pvt === (sum- pvt+i)){
        return i
        }
    }
    return -1
};