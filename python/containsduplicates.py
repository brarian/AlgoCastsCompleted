class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        new_set = set(nums)
        if (len(nums) > len(new_set)):
            return True
        return False
