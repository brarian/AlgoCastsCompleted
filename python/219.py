class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        d = {}
        for index, item in enumerate(nums):
            print( index, item)
            if item not in d: 
                d[item] = index
            else: 
                if index - d[item] <= k:
                    return True
                else: 
                    d[item] = index
        return False