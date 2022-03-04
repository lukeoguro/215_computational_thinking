function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

function isPalindrome(word) {
  return word.length > 1 && [...word].reverse().join('') === word;
}

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


console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// ["ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo"]

console.log(palindromes('knitting cassettes'));
// returns
// ["nittin", "itti", "tt", "ss", "settes", "ette", "tt"]