
def fizz_buzz(x):
    for number in range(1, x+1):
        if number % 5 == 0 and number % 3 == 0:
            print("fizzbuzz")
        elif number % 3 == 0:
            print("fizz")
        elif number % 5 == 0:
            print("buzz")
        elif number % 5 != 0 and number % 3 != 0:
            print(number)


fizz_buzz(15)
