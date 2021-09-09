//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const primeFactors = (n) => {
  // Sol 1 - 1.5246secs
  // let pfs = [];
  // let candidate = 2;
  // while (candidate**2 <= n) {
  //   if (n%candidate==0) {
  //     n/=candidate
  //     pfs.push(candidate)
  //   } else {
  //     candidate+=1
  //   }
  // }
  // if (n > 1) {
  //   pfs.push(n)
  // }
  // return pfs
  //
  //
  //
  //
  // Sol 2 - 1.4668secs
  let pfs = []
  while (n%2==0) {
    pfs.push(2)
    n = Math.floor(n/2)
  }
  for (let i=3; i <= Math.floor(Math.sqrt(n)); i=i+2) {
    while (n % i == 0) {
      pfs.push(i)
      n = Math.floor(n/i)
    }
  }
  if ( n > 2 ) { pfs.push(n) }  
  return pfs
};
