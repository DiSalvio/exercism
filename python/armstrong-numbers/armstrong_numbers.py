def is_armstrong_number(number):
    return number == sum(map(lambda digit: digit**len(str(number)), map(int, str(number))))
