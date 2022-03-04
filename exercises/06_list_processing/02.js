function alphabeticNumberSort(array) {
  return [...array].sort(wordSort);
}

function wordSort(a, b) {
  const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven",
    "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
    "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

  let wordA = WORDS[a];
  let wordB = WORDS[b];

  if (wordA < wordB) {
    return -1;
  } else if (wordA > wordB) {
    return 1;
  } else {
    return 0;
  }
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]