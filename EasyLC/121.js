//121. Best Time to Buy and Sell Stock

var maxProfit = function(prices) {
  // can't buy on the first day so the min prices is the price from the first day
  let min = prices[0];
  let max = 0;

  //start at the 2nd prices
  for (let i = 1; i < prices.length; i++) {
    // 1. if (1 - 7  > 0) we will not make -6 max
    // 2. if (5 - 7 > 0 ) we will not make -2 max becuase 0 > -2
    //3. if (3 - 5 > 0 ) we will not make -2 max because 0 > -2
    //4. if (6  - 1 > 0) we will make 5 the max
    //5. if (4 - 1 > 5) we will not make 3 the max
    if (prices[i] - min > max) {
      max = prices[i] - min;
    }
    // 1. if (1 < 7) we make the min price 1
    //2. if (5 < 7 ) we will make 5 the min 5
    //3. (3 < 5 ) we will make 3 the min
    //4. (6 < 3) we will not make 6 the max
    //5. (4 < 3) we will not make 4 the max
    if (prices[i] < min) {
      min = prices[i];
    }
  }

  //1. max is still 0
  //2. max is still 0
  //3. max is still 9
  //4. max is 5
  //5. max is still 5 return 5

  return max;
};
