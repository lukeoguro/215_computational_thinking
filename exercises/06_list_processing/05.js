function leadingSubstrings(string) {
  let substrings = [];

  for (let idx = 1; idx <= string.length; idx += 1) {
    substrings.push(string.slice(0, idx));
  }

  return substrings;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]