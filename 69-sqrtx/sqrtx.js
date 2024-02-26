/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let leftInd = 0;  
  let rightInd = x;
    let mid ;
    while(leftInd<=rightInd){
        mid = Math.floor((leftInd+rightInd)/2);
        if(mid*mid===x){
            return mid;
        }
        if((mid*mid)<x && ((mid+1)*(mid+1))>x){
             return mid
        }else if(mid*mid<x){            
             leftInd = mid+1;
        }else{
             rightInd = mid-1
        }
    }
};