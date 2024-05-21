/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let deepCopy = [...nums];
    let sorted = deepCopy.sort((a,b)=>(a-b))
    if(sorted[sorted.length-1]/2>=sorted[sorted.length-2]){
        for(let i=0;i<deepCopy.length;i++){
            if(sorted[sorted.length-1]===nums[i])
            return i
        }
    }else{
        return -1
    }
};