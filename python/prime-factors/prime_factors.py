def factors(value):
    return list(primes(value))

def primes(number):
    possible_prime_factor = 2
    while possible_prime_factor * possible_prime_factor <= number:
        if number % possible_prime_factor == 0:
            number /= possible_prime_factor
            yield possible_prime_factor
        else:
            possible_prime_factor += 1

    if number>1:
        yield number
