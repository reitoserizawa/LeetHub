/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    let seen = []
    
    for (i=0; i < nums.length; i++) {
        if (seen.includes(nums[i])) {
            return true
            } else {
            seen.push(nums[i])
        }
    }
    
    return false
    
};