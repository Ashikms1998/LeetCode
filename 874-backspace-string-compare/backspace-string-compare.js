var backspaceCompare = function(s, t) {
    let processedS = [];
    let processedT = [];

    for(let i = 0; i < s.length; i++) {
        if(s[i] === "#") {
            processedS.pop();
        } else {
            processedS.push(s[i]);
        }
    }
    processedS = processedS.join("");

    for(let i = 0; i < t.length; i++) {
        if(t[i] === "#") {
            processedT.pop();
        } else {
            processedT.push(t[i]);
        }
    }
    processedT = processedT.join("");

    return processedS === processedT;
};
