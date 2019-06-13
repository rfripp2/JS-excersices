/*
Write a program that creates an account object with the following characteristics:

A name property set to "Alex".
A balance property set to 0.
A credit method adding the (positive or negative) value passed as an argument to the account balance.
A describe method returning the account description.
Use this object to show its description, crediting 250, debiting 80, then show its description again.
*/

let account = {
  name: "Alex",
  balance: 0,
  credit(value) {
    return (this.balance += value);
  },
  describe() {
    return `owner: ${this.name}, balance ${this.balance}`;
  }
};

console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());
