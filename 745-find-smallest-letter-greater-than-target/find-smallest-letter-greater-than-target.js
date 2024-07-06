/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let arr = [];
    let tarNum = target.charCodeAt()
    for (let i = 0; i < letters.length; i++) {
        if(letters[i].charCodeAt()>tarNum){
        arr.push(letters[i].charCodeAt())
        }
    }
    console.log(arr)
    let deepSorted = JSON.parse(JSON.stringify(arr)).sort((a, b) => (a - b))
    if(deepSorted[0]>tarNum&&deepSorted[0]!=tarNum){
        return String.fromCharCode(deepSorted[0])
    }else if(deepSorted[0]===tarNum){
        return String.fromCharCode(deepsorted[i])

    }else{
        return letters[0]
    }

};