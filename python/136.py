class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        li = [num for num in nums if nums.count(num) == 1]
        res = 0
        for i in li: 
            res += i
        return i 
        