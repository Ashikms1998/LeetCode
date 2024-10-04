/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    let sum = 0;
    skill = skill.sort((a,b)=>(a-b))
    let finalSum = skill[0]+skill[skill.length-1]
    for(let i=0;i<skill.length/2;i++){
        if((skill[i]+skill[skill.length-1-i])!=finalSum){
            return -1
        }
        sum = sum +(skill[i]*skill[skill.length-1-i])
    }
    return sum
};