/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let deleteEle1 = nums1.length - m
    let deleteEle2 = nums2.length - n
    
    if (!!deleteEle1) {
        nums1.splice(-deleteEle1, deleteEle1)
    }
    
    if (!!deleteEle2) {
        nums2.splice(-deleteEle2, deleteEle2)
    }
    
    nums2.map(ele => nums1.unshift(ele))
    console.log(nums1)
    nums1.sort((a, b) => a - b)
    
    
    
};