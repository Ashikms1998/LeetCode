/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let row1 = new Set("qwertyuiopQWERTYUIOP")
    let row2 = new Set("asdfghjklASDFGHJKL")
    let row3 = new Set("zxcvbnmZXCVBNM")
    let arr = [];
    for(let i=0;i<words.length;i++){
        let word = words[i].split("")
        let row = row1.has(word[0])? row1 :row2.has(word[0])? row2 :row3
        let exist = word.every(i=>row.has(i))
        if(exist){
            arr.push(words[i])
        }
    }
    return arr; 
};