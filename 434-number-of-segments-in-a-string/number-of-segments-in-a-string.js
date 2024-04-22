/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
   let arr = [];
   let splitArr = s.split(" ")
   console.log(splitArr)
   for(let i=0;i<splitArr.length;i++){
    if(splitArr[i].trim().length>=1){
        arr.push(splitArr[i])
    }
   }
   console.log(arr)
   return arr.length
};