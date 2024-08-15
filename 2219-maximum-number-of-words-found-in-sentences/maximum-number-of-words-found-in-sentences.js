var mostWordsFound = function(sentences) {
    let count = 0;
    for(let i=0; i<sentences.length; i++){
        let words = sentences[i].split(' ').length;
        if(words > count){
            count = words;
        }
    }
    return count;
};