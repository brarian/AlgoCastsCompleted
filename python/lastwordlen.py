class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        l = list(s.strip().split(" "))
        if (len(l) == 1): 
            return len(l[0])
        else:
            return len(l[-1])