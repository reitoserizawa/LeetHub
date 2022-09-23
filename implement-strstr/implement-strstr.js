/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    for (let i = 0; i < haystack.length; i++) {
        
        let match = true
        
        for (let n = 0; n < needle.length; n++)
            if (haystack[n + i] !== needle[n]) {
                match = false
            }
        
        if (match) return i
    }
    
    return -1
    
};