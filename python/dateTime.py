# 3. Write a Python program to display the current date and time.

import time
import math


def getDate():
    t = time.localtime()
    return str(t.tm_year) + "-" + str(t.tm_mon) + "-" + str(t.tm_mday) + " " + str(t.tm_hour) + ":" + str(t.tm_min) + ":" + str(t.tm_sec)


# 4. Write a Python program which accepts the radius of a circle from the user and compute the area.
def getArea(r=2):
    return math.pi * math.pow(r, 2)


print(getArea())
