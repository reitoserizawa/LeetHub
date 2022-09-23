/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    const newMatrix = matrix
    let mat0Leng = newMatrix[0].length
    let matLeng = newMatrix.length - 1
    
    let rowArr = []

    for (let eleIn = 0; eleIn < mat0Leng; eleIn ++) {
    
        for (let i = matLeng; i >= 0; i--) {
            rowArr.push(newMatrix[i][eleIn])
        }
    
        matrix.push(rowArr)
        rowArr = []
    }
    
    matrix.splice(0, matrix.length/2)
    
}