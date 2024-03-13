/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
 let w1=word1.split('');
 let w2=word2.split('');
 let arr =[];
 for(let i=0;i<w1.length+w2.length;i++){
    if(w1[i]){
        arr.push(w1[i])
    }
    if(w2[i]){
        arr.push(w2[i])
    }
 }
 return arr.join('');
};