/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    let isAnagram = true
    let str = t.split('')
    
    
    for (let i = 0; i < s.length; i++) {
        
        if (str.includes(s[i])) {
            
            let deleteIn = str.indexOf(s[i])
            str.splice(deleteIn, 1)
            
        } else {
            isAnagram = false
        }
    }
    
    if (str.length > 0) {
        isAnagram = false
    }
    
    return isAnagram
    
};