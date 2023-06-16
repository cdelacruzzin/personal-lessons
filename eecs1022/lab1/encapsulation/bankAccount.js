
class BankAccount {
    #balance; // truly private field
  
    constructor(accountNumber, accountHolder) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountHolder;
      this.#balance = 0;
    }
  
    deposit(amount) {
      if (amount < 0) throw new Error('Invalid deposit amount');
      this.#balance += amount;
    }
  
    withdraw(amount) {
      if (amount < 0 || amount > this.#balance) throw new Error('Invalid withdrawal amount');
      this.#balance -= amount;
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  const myAccount = new BankAccount('12345678', 'John Doe');
myAccount.deposit(500);
// console.log(myAccount.getBalance()); // This will result in a SyntaxError

class BankAccount2 {
    constructor(accountNumber, accountHolder) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountHolder;
      this._balance = 0;  // Intended as private, but not actually private
    }
  
    deposit(amount) {
      if (amount < 0) throw new Error('Invalid deposit amount');
      this._balance += amount;
    }
  
    withdraw(amount) {
      if (amount < 0 || amount > this._balance) throw new Error('Invalid withdrawal amount');
      this._balance -= amount;
    }
  
    getBalance() {
      return this._balance;
    }
  }
  
  const myAccount2 = new BankAccount2('12345678', 'John Doe');
  myAccount2.deposit(500);
  console.log(myAccount2._balance); // This will print 500, even though _balance is intended as private
  


