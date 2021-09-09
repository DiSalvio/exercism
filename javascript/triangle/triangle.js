//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.s = sides;
    this.equality = (this.s[0] + this.s[1] > this.s[2] && this.s[0] + this.s[2] > this.s[1] && this.s[1] + this.s[2] > this.s[0]);
  }

  get isEquilateral() {
    return (this.equality && this.s[0] === this.s[1] && this.s[0] === this.s[2]);
  }

  get isIsosceles() {
    return (this.equality && (this.s[0] === this.s[1] || this.s[1] === this.s[2] || this.s[0] === this.s[2]));
  }

  get isScalene() {
    return (this.equality && this.s[0] != this.s[1] && this.s[1] != this.s[2] && this.s[0] != this.s[2]);
  }
}
