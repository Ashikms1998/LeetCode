/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let array = [];
    for (let i=0;i<accounts.length;i++){
    let sum = 0;
        for(j=0;j<accounts[i].length;j++){
            sum =sum+accounts[i][j];
        }
        array.push(sum)
    }
        let temp = array[0];
    for(let k=0;k<array.length;k++){
        if(temp<array[k]){
            temp =array[k]
        }
    }
    return temp
};