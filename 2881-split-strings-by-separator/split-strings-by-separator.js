/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
   let arr = [];
   for(let i=0;i<words.length;i++){
    let word = words[i].split(separator)
    arr.push(word)
   }
   let finalArr = arr.flat().filter((a,b)=>a!="")
   return finalArr
};