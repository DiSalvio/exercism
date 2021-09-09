def palindrome_product(possibilities, mn, mx):
    if mn > mx:
        raise ValueError('min factors must be smaller than max factor')
    for p_p in possibilities:
        if str(p_p) == str(p_p)[::-1]:
            factors = palindrome_factors(p_p, mn, mx)
            if factors:
                return (p_p, factors)
    return (None, [])
            
def palindrome_factors(num, mn, mx):
    return [[f1, num//f1] for f1 in range(mn, int(num**0.5)+1) if num%f1==0 and num//f1 in range(mn, mx+1)]

def largest(min_factor, max_factor):
    return palindrome_product(list(range(min_factor, max_factor*max_factor + 1))[::-1], min_factor, max_factor)

def smallest(min_factor, max_factor):
    return palindrome_product(range(min_factor, max_factor*max_factor + 1), min_factor, max_factor)
