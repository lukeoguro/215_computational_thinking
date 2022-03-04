function myFilter(array, func) {
  let new_arr = [];

  for (let i = 0; i < array.length; i += 1) {
    if (func(array[i], i, array)) {
      new_arr.push(array[i]);
    }
  }

  return new_arr;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

console.log(myFilter([{ a: 3, b: 4, c: 5 },
{ a: 5, b: 12, c: 13 },
{ a: 1, b: 2, c: 3 },], isPythagoreanTriple));

// [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]