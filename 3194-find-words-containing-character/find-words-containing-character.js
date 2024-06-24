/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let code=[];
    for(let i=0;i<words.length;i++){
        if(words[i].includes(x)){
            code.push(i)
        }
    }
    return code
};