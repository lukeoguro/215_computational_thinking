function isBalanced(string) {
  let tally = 0;
  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    if (char === '(') {
      tally += 1;
    } else if (char === ')') {
      tally -= 1;
    }
    if (tally < 0) return false;
  }

  return tally === 0;
}

// function isBalanced(string) {
//   let regex = /\([^()]*?\)/;
//   while (regex.test(string)) {
//     string = string.replace(regex, '');
//   }

//   return !/[()]/.test(string);
// }

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false