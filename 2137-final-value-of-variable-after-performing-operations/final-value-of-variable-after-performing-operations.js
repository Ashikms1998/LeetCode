/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let X = 0;
    for(let i=0;i<operations.length;i++){
   if(operations[i].includes('++')){
    X=X+1;
   }
   if(operations[i].includes('--')){
    X=X-1;
   }
   }
   return X;
};