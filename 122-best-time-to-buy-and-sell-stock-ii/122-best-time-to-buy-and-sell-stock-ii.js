/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let profit = 0
    
//     use for loop
    
    for(i=0; i < prices.length; i++) {
        
        let temp
        
        if(prices[i] < prices[i+1]) {
            temp = prices[i+1]
        }
        
        if(temp) {
            profit += temp - prices[i]
        }
        
    }
    
    return profit
    
//     if element[i] is smaller than the one after, that one is temp - if temp is the biggest number, sell it
//     otherwise don't do anything
    
};