/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
   let nW1 = word1.join('');
   let nW2 = word2.join('');
   if(nW1 === nW2){
    return true
   }else{
    return false
   } 
};