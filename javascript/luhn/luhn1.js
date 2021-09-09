export const valid = ([...n]) => {
  n=n.filter(num => num.match(/[^\s]/))
  if (n.length < 2 || n.join('').match(/[^\d]/)) { return false }
  range(0 + ((n.length)%2), n.length-1).forEach(x => {
    n[x]*2 > 9 ? n[x]=n[x]*2-9 : n[x]=n[x]*2 
  });
  return n.map(Number).reduce((sum, num) => sum+=num)%10==0
};

function range(start, end, step=2) {
  return Array(Math.round((end-start)/step)).fill(1).map((_, i) => start+(i*step))
}
