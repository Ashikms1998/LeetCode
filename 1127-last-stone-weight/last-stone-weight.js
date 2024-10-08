/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
   while(stones.length>1){
    stones = stones.sort((a,b)=>(b-a));
    stones[1]=stones[0]-stones[1];
    stones.shift()
   }
   return stones[0]

};