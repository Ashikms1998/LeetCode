/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let length = s.length;
    let count = 0;
    let splitted = s.split("")
    console.log(splitted,count,length)
    for(let i=0;i<length;i++){
        if(splitted[i]=== letter){
            count++
        }
    }
        console.log("ksksk",splitted,count,length)

    return Math.floor((count/length)*100)
};