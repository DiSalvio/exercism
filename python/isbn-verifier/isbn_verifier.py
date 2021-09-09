import re

def is_valid(isbn):
    numsx = list(''.join(re.findall(r"[0-9]{9}[0-9|X]+", isbn.replace('-', ''))))[::-1]
    return len(numsx) == 10 and sum([num(n)*(i+1) for i, n in enumerate(numsx)]) % 11 == 0

def num(n):
    return 10 if n=='X' else int(n)
