class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if prices == sorted(prices, reverse=True):
            return 0
        start = prices[0]
        max = 0
        for i in range(1, len(prices)):
            if (prices[i] < start):
                start = prices[i]
            if (prices[i] - start > max):
                max = prices[i] - start
        return max
