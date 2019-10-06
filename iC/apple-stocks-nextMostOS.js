function getMaxProfit(stockPrices) {
  let minPrice = stockPrices[0];
  let maxProfit = 0;

  for (let i = 0; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];

    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);
  }

  return maxProfit;
}

const stockPrices = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPrices);
