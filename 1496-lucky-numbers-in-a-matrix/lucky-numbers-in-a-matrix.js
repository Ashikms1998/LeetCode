/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    let mins = []
    let maxs = []
    for (let i = 0; i < matrix.length; i++) {
        let MatMin = 10e6
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < MatMin) {
                MatMin = matrix[i][j]
            }

        }
        mins.push(MatMin)
    }
    for (let i = 0; i < matrix[0].length; i++) {
        let MatMax = 0
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][i] > MatMax) {
                MatMax = matrix[j][i]
            }

        }
        maxs.push(MatMax)
    }
    let targets =[]
    let combined = [...mins,...maxs]
    combined = combined.sort((a,b)=>(a-b))
    for(let i=0;i<combined.length;i++){
        if(combined[i]===combined[i+1]){
            targets.push(combined[i])
        }
    }
    return targets;
};