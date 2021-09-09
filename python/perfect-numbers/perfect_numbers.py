import collections
import itertools

def classify(number):
    if number < 1:
        raise ValueError("Not a positive integer")
    # first solution way too slow: ~7secs
    # sum_of_divisors = sum(filter(lambda divisor: number % divisor == 0, range(1,int(number/2 + 1))))

    # solution using prime factors: ~.05secs
    # harder to read and longer, but 2 orders of magnitude faster
    divisors = list(get_divisors(number))
    sum_of_divisors = sum(divisors[0:len(divisors)-1])
    if sum_of_divisors == number:
        return "perfect"
    elif sum_of_divisors > number:
        return "abundant"
    else:
        return "deficient"

def prime_factors(number):
    possible_prime_factor = 2
    while possible_prime_factor * possible_prime_factor <= number:
        if number % possible_prime_factor == 0:
            number /= possible_prime_factor 
            yield possible_prime_factor
        else:
            possible_prime_factor += 1

    if number>1:
        yield number


def product(iterable):
    prod = 1
    for factor in iterable:
        prod *= factor
    return prod


def get_divisors(number):
    pf = prime_factors(number)
    pf_with_counts = collections.Counter(pf)

    powers_of_pf = [
            [factor ** exponent for exponent in range(count+1)]
            for factor, count in pf_with_counts.items()
    ]
    for pf_powers_combo in itertools.product(*powers_of_pf):
        yield product(pf_powers_combo)

