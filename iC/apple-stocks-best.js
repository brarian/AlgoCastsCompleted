function bestStock(prices) {
  if (prices.length < 2) {
    throw new Error('need at least 2 prices to buy and sell');
  }

  let minPrice = prices[0];
  let maxProfit = prices[1] - prices[0];

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    const potentialProfit = (currentPrice = minPrice);

    maxProfit = Math.max(maxProfit, potentialProfit);

    minPrice = Math.min(currentPrice, minPrice);
  }

  return maxProfit;
}
