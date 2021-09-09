export class BankAccount {
  constructor() {
    this._balance = 0
    this.status = false
  }

  open() {
    if (!this.status) { this.status = true } else { throw new ValueError }
  }

  close() {
    if (this.status) { this.status = false; this._balance = 0; } else { throw new ValueError }
  }

  deposit(amt) {
    if (this.status && amt > 0) { this._balance += amt } else { throw new ValueError }
  }

  withdraw(amt) {
    if (this.status && amt > 0 && amt <= this._balance) { this._balance -= amt } else { throw new ValueError }
  }

  get balance() {
    if (this.status) { return this._balance } else { throw new ValueError }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
