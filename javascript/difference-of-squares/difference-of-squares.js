export class Squares {
  constructor(n) {
    this.n = n 
  }

  get sumOfSquares() {
    return this.range(0,this.n).map(x => x*x).reduce((sum, sq) => sum += sq)
  }

  get squareOfSum() {
    return this.range(0,this.n).reduce((sum, x) => sum += x)**2
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares
  }

  range(start, end) {
    return Array(end-start).fill(1).map((_, i) => start+i+1)
  }
}
