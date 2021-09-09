export const compute = (strand1, strand2) => {
  if (strand1 == '' && strand2 == '') { return 0 }
  if (!strand1) {throw new Error('left strand must not be empty')}
  if (!strand2) {throw new Error('right strand must not be empty')}
  if (strand1.length != strand2.length) {throw new Error('left and right strands must be of equal length')}

  return [...strand1].reduce((diff, n, index) => {
    return (n === [...strand2][index] ? diff : diff+=1);
  },0);
};
