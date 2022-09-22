/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let arr = x.toString().split('')
    let num
    
    if (x < 0) {
        arr.reverse()
        arr.splice(arr.length -1, 1)
        arr.unshift('-')
        num = arr.join('')
        
    } else {
        arr.reverse()
        num = arr.join('')  
    } 
    
    if (num > -(2 ** 31) && num < 2 ** 31 - 1) {
        return num
    } else {
        return 0
    }
    
};