//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n, counter=0) => {
  if (n < 1) {
    throw new Error('Only positive numbers are allowed');
  }

  if (n === 1) {
    return counter;
  } else {
    n % 2 == 0 ? n = n/2 : n = 3*n+1;
    return steps(n, counter+1);
  }
};
