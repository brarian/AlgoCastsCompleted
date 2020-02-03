class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        li = []
        for num in range(1, n+1):
            if num % 3 == 0 and num % 5 == 0:
                li.append("FizzBuzz")
            elif num % 3 == 0:
                li.append("Fizz")
            elif num % 5 == 0:
                li.append("Buzz")
            else:
                li.append(str(num))
        return li
