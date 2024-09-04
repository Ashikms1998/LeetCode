/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    let sum=0;
   for(let i=0;i<chalk.length;i++){
    sum = sum+chalk[i]
   }
   let rem = k%sum
   console.log(rem,sum)
   for(let i=0;i<chalk.length;i++){
    rem = rem-chalk[i]
    if(rem<0){
        return i
    }
   }
};