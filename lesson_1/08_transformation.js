function myMap(array, func) {
  let new_arr = [];

  for (let i = 0; i < array.length; i += 1) {
    new_arr.push(func(array[i], i, array));
  }

  return new_arr;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]