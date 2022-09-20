/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function reverseNums (nums, start, end) {
    while(start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++
        end--
    }
}

var rotate = function(nums, k) {

    // if k = 1 and array has only 1 element, there is an error     
    k = k % nums.length
    
//     reverse entire nums
    nums.reverse()
    
//  divide nums to 2 parts (the same order part vs the rotate part (0 to k)) 
    
    
//     reverse back the nums
    
    reverseNums(nums, 0, k -1)
    reverseNums(nums, k, nums.length -1)
    
};