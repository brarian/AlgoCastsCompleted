function getMaxProfit(stockPrices) {
  if (stockPrices.length <= 1) {
    return -1;
  }
  let max = -Infinity;
  let delta;
  for (let i = 0; i < stockPrices.length; i++) {
    for (let j = i + 1; j < stockPrices.length; j++) {
      delta = stockPrices[j] - stockPrices[i];
      console.log(delta, stockPrices[j], stockPrices[i]);
      console.log('MAX', max);
      if (delta > max) {
        max = delta;
      }
    }
  }
  return max;
}
const stockPrices = [7, 2, 8, 9];

getMaxProfit(stockPrices);
