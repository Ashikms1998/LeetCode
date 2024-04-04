/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let mul=1;
    let sum=0;

    let arr = n.toString().split('').map(Number);
    for(let i=0;i<arr.length;i++){
        mul=mul*arr[i];
        sum=sum+arr[i];
    }
    console.log(mul,sum);
    return mul-sum;
};