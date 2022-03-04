function myReduce(array, func, initial) {
  let acc;
  let i;

  if (initial === undefined) {
    acc = array[0];
    i = 1;
  } else {
    acc = initial;
    i = 0;
  }

  for (; i < array.length; i += 1) {
    acc = func(acc, array[i], i, array);
  }

  return acc;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49