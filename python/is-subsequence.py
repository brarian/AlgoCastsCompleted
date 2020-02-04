class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if (len(s) == 0):
            return True
        listofT = list(s)
        count = 0
        for char in t:
            if (listofT[count] == char):
                count += 1
                if (count == len(s)):
                    return True
        return False
