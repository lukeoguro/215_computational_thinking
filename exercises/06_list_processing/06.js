function substrings(string) {
  let substrings = [];

  for (let startIdx = 0; startIdx <= string.length; startIdx += 1) {
    let substring = string.slice(startIdx);
    substrings.push(...leadingSubstrings(substring));
  }

  return substrings;
}

function leadingSubstrings(string) {
  let substrings = [];

  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}

console.log(substrings('abcde'));

// returns
// ["a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e"]