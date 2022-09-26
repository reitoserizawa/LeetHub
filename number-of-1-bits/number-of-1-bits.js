/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let binaryN = n.toString(2)
    let binaryArr = binaryN.split('')
    let numArr = binaryArr.map(ele => parseInt(ele))
    
    let count = 0
    
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] === 1) {
            count ++
        }
    }
    
    return count
};