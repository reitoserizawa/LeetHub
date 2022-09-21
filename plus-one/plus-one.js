/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
//     loop at the end to check the number of the last element in the array
    for (let i = digits.length - 1; i >=0; i--) {
        
//         if it is less than 9, simply add one and return
        if (digits[i] < 9) {
            digits[i] += 1
            return digits
            
        } else {
            
//          if it is 9, the last element of the array is 0   
            digits[i] = 0
        }
        
    }
    
    digits.unshift(1)
    
    return digits
    
};