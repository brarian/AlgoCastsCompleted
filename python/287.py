class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        noDup = set()
        for num in nums:
            if num in noDup:
                return num
            noDup.add(num)
