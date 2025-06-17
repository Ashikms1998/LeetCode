/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let map = {
        '(':')',
        '[':']',
        '{':'}'
    }
    let arr = [];

    for(let i=0;i<s.length;i++){
        let val = s[i]
        if(map[val]){
            arr.push(map[val])
        }else{
            let popped = arr.pop()
            if(popped!=val){
                return false
            }
        }
    }
    if(arr.length>0){
        return false
    }else{
        return true
    }
};