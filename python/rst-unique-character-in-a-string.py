class Solution:
    def firstUniqChar(self, s: str) -> int:
        dictionary = dict()
        for char in s:
            if (dictionary.get(char, False) == False):
                dictionary[char] = 1
            else: 
                dictionary[char] += 1
                
      
        for key, val in dictionary.items(): 
            if (val == 1): 
                return s.find(key)
        return -1 