/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    let mat0Leng = matrix[0].length
    let matLeng = matrix.length - 1
    
    let rowArr = []

    for (let eleIn = 0; eleIn < mat0Leng; eleIn ++) {
    
        for (let i = matLeng; i >= 0; i--) {
            rowArr.push(matrix[i][eleIn])
        }
    
        matrix.push(rowArr)
        rowArr = []
    }
    
    matrix.splice(0, matrix.length/2)
    
}