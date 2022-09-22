/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums
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
    
    let arr = []
    this.nums.forEach(ele => arr.push(ele))
    


        // var rand = Math.floor(Math.random() * (a.length - i)) + i


    

    
    for (let i=0; i < arr.length; i++) {
        let randomIndex = Math.floor(Math.random() * arr.length)
        let temp = arr[i]
        arr[i] = arr[randomIndex]
        arr[randomIndex] = temp
    }
    
    return arr
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */