function buyFruit(list) {
  let items = [];

  list.forEach(([item, times]) => {
    for (let idx = 0; idx < times; idx += 1) {
      items.push(item);
    }
  });

  return items;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]