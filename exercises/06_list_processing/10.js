function isItemAvailable(id, transactions) {
  let sum = transactionsFor(id, transactions).reduce((acc, transaction) => {
    if (transaction.movement === 'in') {
      return acc + transaction.quantity;
    } else {
      return acc - transaction.quantity;
    }
  }, 0);

  return sum > 0;
}

function transactionsFor(id, transactions) {
  return transactions.filter(transaction => transaction.id === id);
}

const transactions = [
  { id: 101, movement: 'in', quantity: 5 },
  { id: 105, movement: 'in', quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in', quantity: 12 },
  { id: 103, movement: 'out', quantity: 15 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in', quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in', quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 },
];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true