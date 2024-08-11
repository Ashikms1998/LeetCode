/**
 * @param {number[]} nums
 * @return {number}


 */
 var sumOfUnique = function(nums) {
 let obj = {};
    for(let x of nums){
        if(obj[x]){
            obj[x] +=1
        }else{
            obj[x] = 1;
        }
    }

    let count = 0;
    for(let key in obj){
        if(obj[key] === 1){
        count = count+Number(key);
        }
        
    }

    return count;
};