/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
  let newArr =[];
  let uniqueArr = new Set(nums1)
  for(let i=0;i<nums2.length;i++){
  if(uniqueArr.has(nums2[i])){
      newArr.push(nums2[i])
  }
  }if(newArr.length===0){
      return -1
  }else{
      newArr = newArr.sort((a,b)=>(a-b));
      return newArr[0];
  }
  
};