/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
   let arr = [];
   const unique = new Set(nums)
   const uniquArr = Array.from(unique)
   let count=0;
   console.log(uniquArr)

   for(let i=0;i<uniquArr.length;i++){
        if(uniquArr[i]!=0){
            count++;
        }
   }
    return count;
}