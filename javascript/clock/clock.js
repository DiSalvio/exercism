//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours, mins=0) {
    this.hours = ((hours%24 + Math.floor(mins/60))%24+24)%24
    this.mins = (mins%60+60)%60
  }

  toString() {
    return `0${this.hours}`.slice(-2) + `:` + `0${this.mins}`.slice(-2)
  }

  plus(mins) {
    return new Clock(this.hours, this.mins + mins)
  }

  minus(mins) {
    return new Clock(this.hours, this.mins - mins)
  }

  equals(clock) {
    return this.hours === clock.hours && this.mins === clock.mins
  }
}
