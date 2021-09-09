export const classify = (n) => {
  if (n < 1) { throw new Error('Classification is only possible for natural numbers.')}
  const factors = get_factors(n)
  const sum_of_factors = factors.reduce((sum, f) => sum+=f, 0)
  if (sum_of_factors == n) {
    return "perfect"
  } else if (sum_of_factors > n) {
    return "abundant"
  } else {
    return "deficient"
  }
};

function prime_factors(n) {
  let possible_prime = 2
  let prime_factors = []
  while (possible_prime**2 <= n) {
    if (n%possible_prime == 0) {
      n/=possible_prime
      prime_factors.push(possible_prime)
    } else {
      possible_prime+=1
    }
  }
  if (n > 1) { prime_factors.push(n) }
  return prime_factors
}

function prime_factors_count(prime_factors) {
  return prime_factors.reduce((counts, pf) => {
    counts[pf] = (counts[pf] || 0) + 1;
    return counts;
  }, {});
}

function range(n) {
  return Array(n).fill(1).map((_, i) => i);
}

function get_factors(n) {
  const pfs = prime_factors(n);
  const pf_counts = prime_factors_count(pfs);

  let factors = [];
  for (let [factor, count] of Object.entries(pf_counts)) {
    for (let exponent of range(count+1)) {
      if (!factors.includes(factor**exponent)) {
        factors.push(factor ** exponent)
      }
    }
  }

  factors.forEach(f1 => {
    factors.forEach(f2 => {
      if (f1*f2 < n && n%(f1*f2)==0 && !factors.includes(f1*f2)) {
        factors.push(f1*f2)
      }
    })
  })
  return factors.filter(f => f!=n)
}

