/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let map = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        
        let num1 = nums[i]
        let num2 = target - nums[i]
        
        if (map.has(num2)) {
            return [i, map.get(num2)]
        } else {
        
        map.set(nums[i], i)
            
        }
    }
    
};