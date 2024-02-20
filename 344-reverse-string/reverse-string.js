/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let len =s.length-1
    let k =0;
    let temp;
    while(k<len){
       temp=s[k];
       s[k]=s[len];
       s[len]=temp;
       k++;
        len--;
    }
    console.log(s)
    return s

};