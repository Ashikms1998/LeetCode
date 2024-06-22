/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let charArr = [];
    let count = 0;
    
    for(let i = 0; i < word.length; i++){
        charArr.push(word.charCodeAt(i));
    }
    
    charArr.forEach((number) => {
        if(number <= 90){
            count++;
        }
    });
    
    if(count === word.length || count === 0 || (count === 1 && word.charCodeAt(0) <= 90)){
        return true;
    } else {
        return false;
    }
};