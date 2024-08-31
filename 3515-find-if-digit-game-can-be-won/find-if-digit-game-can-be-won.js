/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let alice =[];
    let bob = []
    let sumA = 0;
    let sumB =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<10){
            alice.push(nums[i])
        }else{
            bob.push(nums[i])
        }
    }
    for(let i=0;i<alice.length;i++){
        sumA = sumA+alice[i]
    }
    for(let i=0;i<bob.length;i++){
        sumB = sumB+bob[i]
    }

    return (sumA>sumB||sumB>sumA)
};