def steps(n, count=0):
    if n < 1:
        raise ValueError('n should be greater than 1')
    if n==1:
        return count
    else:
        n=3*n+1 if n%2==1 else n/2
        return steps(n, count+1)
