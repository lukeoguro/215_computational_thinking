function isAllUnique(string) {
  string = string.toLowerCase().replace(/ /g, '');

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];

    if (string.indexOf(char) !== idx) return false;
  }

  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true