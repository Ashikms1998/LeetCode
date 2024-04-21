/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let arr = [];
   for(let i=1;i<=n;i++){
    if(i%3==0||i%5==0||i%7==0){
        arr.push(i)
    }
   }
   let sum = 0;
   for(let i = 0;i<arr.length;i++){
    sum=sum+arr[i];
   }
   return sum;
};