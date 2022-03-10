// You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

// Your job is to return a list of complete numbers.

// The possible separators are: ["-", ":", ".."]

// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// "1-3, 1-2" --> 1, 2, 3, 11, 12
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611

function shorthand(inputString) {
  let allPartNumData = getAllPartNumData(inputString);

  let allNums = [];
  allPartNumData.forEach(({ isInclusive, partNumStr }) => {
    for (let currentNum = allNums.slice(-1)[0] + 1 || 0; ; currentNum += 1) {
      if (isValidNum(currentNum, partNumStr)) {
        allNums.push(currentNum);
        return;
      } else if (isInclusive) {
        allNums.push(currentNum);
      }
    }
  });

  return allNums;
}

// Get all partial number data
function getAllPartNumData(string) {
  let partNumStrs = string.match(/(?:, |-|\.\.|:)?\d+/g);

  return partNumStrs.map(partNumStr => {
    return {
      isInclusive: !!partNumStr.match(/(-|\.\.|:)/),
      partNumStr: partNumStr.match(/\d+/)[0],
    };
  });
}

function isValidNum(currentNum, partNumStr) {
  return String(currentNum).slice(-partNumStr.length) === partNumStr;
}

console.log(shorthand("1, 3, 7, 2, 4, 1")); // --> 1, 3, 7, 12, 14, 21
console.log(shorthand("1-3, 1-2")); // --> 1, 2, 3, 11, 12
console.log(shorthand("1:5:2")); // --> 1, 2, 3, 4, 5, 6, ... 12
console.log(shorthand("104-2")); // --> 104, 105, ... 112
console.log(shorthand("104-02")); // --> 104, 105, ... 202
console.log(shorthand("545, 64..11")); // --> 545, 564, 565, .. 611
console.log(shorthand("0, 3")); // --> 0, 3
console.log(shorthand("0-3")); // --> 0, 1, 2, 3