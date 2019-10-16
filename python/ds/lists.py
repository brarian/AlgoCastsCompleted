letters = ["a", "b", "c"]
matrix = [[3, 4, 5], [8, 9, 0]]
zeros = [0] * 100
# creates array of 100 0's
combined = matrix + letters
# [3, 4, 5], [8, 9, 0], 'a', 'b', 'c']
# print(combined)

numbers = list(range(20))
# print(numbers)
# prints all numbers 0 - 20, not including 20

#l = list("hello world")
# returns an array of hello world

chars = len(list("hello world"))
# print(chars) - returns char count


alpha = ["b", "r", "a", "r", "i", "a", "n"]
alpha[3] = "Q"
# print(alpha[::2])
# ::# step throught a list
# every other index skipped

numbers = list(range(21))

# print(numbers[::-1])


for letter in enumerate(letters):
    print(letter[0])
