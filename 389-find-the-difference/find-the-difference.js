/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let letters = s.split('').sort()
    return t.split('').sort().find((char,i)=>char!==letters[i])
};

