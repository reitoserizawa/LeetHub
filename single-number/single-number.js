/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    nums.sort((a,b) => a- b)
    let seen = []
    
    for (let i = 0; i < nums.length; i++) {
        
        if (nums[i] === nums[i+1]) {
            seen.push(nums[i])
        } else if (seen.includes(nums[i])) {
            seen.push(nums[i])
        } else {
            return nums[i]
        }
        
    }
};