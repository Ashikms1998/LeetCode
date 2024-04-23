/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let lettersS = s.split('').sort()
    let lettersT = t.split('').sort()
    for(let i=0;i<lettersT.length;i++){
        if(lettersT[i]!=lettersS[i]){
            return lettersT[i]
        }
    }
    
};

