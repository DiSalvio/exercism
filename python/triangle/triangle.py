def legit_triangle(s):
    return s[0] + s[1] > s[2] and s[0] + s[2] > s[1] and s[1] + s[2] > s[0]

def equilateral(s):
    return legit_triangle(s) and s[0] == s[1] and s[1] == s[2]

def isosceles(s):
    return legit_triangle(s) and (s[0] == s[1] or s[1] == s[2] or s[0] == s[2])

def scalene(s):
    return legit_triangle(s) and s[0] != s[1] and s[1] != s[2] and s[0] != s[2]
