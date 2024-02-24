/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let isPalindrome = true
    let nx = x.toString().split('');
    let length = nx.length -1;
    let i =0;
    while(i<=length){
        if(nx[i]!==nx[length]){
            isPalindrome = false;
            break;
            
        }
            i++;length--;
    }
        return isPalindrome;
};