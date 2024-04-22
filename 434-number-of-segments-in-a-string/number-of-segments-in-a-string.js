/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
   let arr = [];
   let splitArr = s.split(" ")
   for(let i=0;i<splitArr.length;i++){
    if(splitArr[i].trim().length>=1){
        arr.push(splitArr[i])
    }
   }
   return arr.length
};