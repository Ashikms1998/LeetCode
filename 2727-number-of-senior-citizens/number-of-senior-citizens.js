/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let n=[]
    for(let i=0;i<details.length;i++){
    let arr = details[i].slice(11,13);
    n.push(arr)
    }
    let count = 0;
    for(let i=0;i<n.length;i++){
        if(n[i]>60){
            count++
        }
    }
    return count;
};