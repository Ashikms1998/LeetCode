/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    for(let i=0;i<word.length;i++){
        if(word[i]===ch){
          let reversedPart = word.slice(0,i+1).split('').reverse().join("");
          let remainingPart = word.slice(i + 1)
          return reversedPart+remainingPart;
          
        }
    }
    return word
};