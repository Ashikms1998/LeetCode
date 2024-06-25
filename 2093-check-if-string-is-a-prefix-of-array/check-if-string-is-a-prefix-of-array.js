var isPrefixString = function (s, words) {
    let a = "";
    for (let i = 0; i < words.length; i++) {
        a += words[i];
        
        if (a === s) {
            return true;
        }
    }
    return false;
};