/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    
    let exponentThree = [1]
    let lastNum = 1
    
    console.log(exponentThree)
    
    for (let i = 1; n > lastNum; i++) {
        exponentThree.push((3 ** i))
        lastNum = exponentThree[exponentThree.length -1]
    }
    
    return exponentThree.includes(n)
    
    
};