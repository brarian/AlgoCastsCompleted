# 3. Write a Python program to display the current date and time.

import time
import math


def getDate():
    t = time.localtime()
    return str(t.tm_year) + "-" + str(t.tm_mon) + "-" + str(t.tm_mday) + " " + str(t.tm_hour) + ":" + str(t.tm_min) + ":" + str(t.tm_sec)


# 4. Write a Python program which accepts the radius of a circle from the user and compute the area.
def getArea(r=2):
    return math.pi * math.pow(r, 2)


# 5. Write a Python program which accepts the user's first and last name and print them in reverse order with a space between them.
def nameReversed(f="aaaa", n="bbb"):
    return n + " " + f


# Write a Python program which accepts a sequence of comma-separated numbers from user and generate a list and a tuple with those numbers.


def listAndTuple(*args):
    list1 = []
    tuple1 = ()
    for i in args:
        list1.append(i)
    print(list1)
    print(tuple(list1))


print(listAndTuple(1, 2, 3, 4, 5))
