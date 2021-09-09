export function triplets({sum, ...options}) {
  let minFactor = options['minFactor'] || Math.floor(sum/25) || 1
  let maxFactor = options['maxFactor'] || Math.round(sum/2)
  let triplets = []
  for (let a of range(minFactor, maxFactor)) {
    for (let b of range(a, maxFactor)) {
      let c = Math.sqrt(a*a + b*b)
      if (Math.round(c) == c && c < maxFactor && (a+b+c) == sum) {
        triplets.push(new Triplet(a,b,c))
      }
    }
  }
  return triplets
}

class Triplet {
  constructor(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }

  toArray() {
    return [this.a, this.b, this.c]
  }
}

function range(start, end, step=1) {
  return Array(Math.round((end-start)/step)).fill(1).map((_, i) => start+(i*step))
}
