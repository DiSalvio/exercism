export const square = (n) => {
  if (n > 64 || n < 1) { throw new Error('square must be between 1 and 64') }
  return BigInt(2**(n-1));
};


export const total = () => {
  return BigInt((2**64))-BigInt(1)
};
