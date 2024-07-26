/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {

    let str = num.toString();
    let numEl;
    let counter = 0;

    for (let i = 0; i < str.length; i++){

        numEl = Number(str[i]);

         if (num % numEl === 0){
            counter++;
         }
    }
    return counter;
};