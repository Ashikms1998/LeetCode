/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum = 0;
    let arrX = x.toString().split('').map(Number)
    for(let i=0;i<arrX.length;i++){
        sum = sum+arrX[i]
    }
    if(x%sum===0){
        return sum
    }else{
        return -1
    }
};