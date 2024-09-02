/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
    let arr =[]
    let brr =[];
    let sum =0
    prev =0;
    let val = income;
    for(let i=0;i<brackets.length;i++){
       arr.push(brackets[i][0])
       brr.push(brackets[i][1])
    }
    for(let i=0;i<arr.length;i++){
    const amount = Math.min(val, arr[i] - prev);
    val = val-amount
    prev = arr[i]
    sum = sum + (amount*brr[i]/100)
    }
return sum
};
