/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    let end = s.length - 1
    let beginning = 0
    
    while (beginning < end) {
        
        let temp = s[beginning]
        s[beginning] = s[end]
        s[end] = temp
        
        beginning++
        end--
        
    }
    
    
    
};