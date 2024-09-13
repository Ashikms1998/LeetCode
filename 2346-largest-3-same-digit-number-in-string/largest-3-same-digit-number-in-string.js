/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    num = num.split("")
    let arr = [];
    for(let i=0;i<num.length-2;i++){
        if(num[i] === num[i + 1] && num[i] === num[i + 2]){
            arr.push(num.slice(i,i+3).join(""))
        }
    }
    return arr.length > 0 ? arr.reduce((max, current) => current > max ? current : max, '') : '';

};
