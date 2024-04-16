/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
   let array = s.split(' ');
   let newArr=[];
   for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i].slice(-1)>array[j].slice(-1)){
            temp = array[i]
            array[i]=array[j];
            array[j]=temp
        }
    }
   }
   for(let i=0;i<array.length;i++){
    newArr.push(array[i].slice(0,-1))
   }
   return newArr.join(" ");
};