/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num<10){
        return num
    }
    let first = Math.floor(num/10);
    let second = Math.floor(num%10);
    return addDigits(first+second);
};