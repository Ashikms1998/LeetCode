/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let array=[];
    if(x>0){
    let nX =Math.abs(x).toString().split('').reverse()
    let rev = nX.join('')
        if(rev >= -(2**31) && rev <= (2**31) - 1){
        return Number(rev)
        }else{
        return 0
         }
    }else{
        let nX =Math.abs(x).toString().split('').reverse()
        let rev = nX.join('')       
        if(rev >= -(2**31) && rev <= (2**31) - 1){
        return Number(rev)*-1;
        }else{
        return 0
         }
    }
};