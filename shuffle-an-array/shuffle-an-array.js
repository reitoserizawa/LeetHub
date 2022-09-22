/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums || []
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    
    var a = [];
    this.nums.forEach((val, key) => a[key] = val); // need to copy key value one by one
    
    for (var i = 0; i < a.length; i++) {
        var rand = Math.floor(Math.random() * (a.length - i)) + i; // be careful to get the floor of random
        var tmp = a[i];
        a[i] = a[rand];
        a[rand] = tmp;
    }
    return a;
    
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */