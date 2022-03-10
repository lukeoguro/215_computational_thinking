// The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

// The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number.This number must pass the following test:

// Counting from the rightmost digit and moving left, double the value of every second digit
// For any digit that thus become 10 or more, subtract 9 from the result
// 1111 becomes 2121
// 8763 becomes 7733(from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
// Add all these digits together
// 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
// 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
// If the total(the checksum) ends in 0(put another way, if the total modulo 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid.Thus, 1111 is not valid(as shown above, it comes out to 6), while 8763 is valid(as shown above, it comes out to 20).

// Write a program that, given a number in string format, check if it is valid per the Luhn formula.This should treat, for example, "2323 2005 7766 3554" as valid.You can ignore all non - numeric characters in the input string.

// Will the input always be a string?
// Empty string?
// 2323 2005 7766 3554 treated as one number

function validLuhnNumber(inputString) {
  let checksum = luhnChecksum(inputString);

  return checksum % 10 === 0;
}

function luhnChecksum(inputString) {
  let digits = inputString.match(/\d/g).map(Number).reverse();

  return digits.reduce((acc, num, index) => {
    if (index % 2 === 1) {
      num *= 2;
      if (num >= 10) {
        num -= 9;
      }
    }
    return acc + num;
  }, 0);
}

// console.log(validLuhnNumber('1111')); // false
// console.log(validLuhnNumber('8763')); // true
// console.log(validLuhnNumber('2323 2005 7766 3554')); // true
// console.log(validLuhnNumber('2323 2005 7766.3554')); // true
// console.log(validLuhnNumber('2323 2005 7766.3553')); // false

// Write a function that can add a check digit to make the number valid per the Luhn formula and return the original number plus that digit. This should give "2323 2005 7766 3554" in response to "2323 2005 7766 355"

function addCheckDigit(inputString) {
  if (validLuhnNumber(inputString)) {
    return inputString;
  } else {
    let checksum = luhnChecksum(inputString + '0');
    let checkDigit = 10 - (checksum % 10);
    return inputString + String(checkDigit);
  }
}

console.log(validLuhnNumber(addCheckDigit('1111'))); // false
console.log(validLuhnNumber(addCheckDigit('1123233211'))); // false
console.log(validLuhnNumber(addCheckDigit('111123585851'))); // false
console.log(validLuhnNumber(addCheckDigit('11123412341234123413241'))); // false
console.log(validLuhnNumber(addCheckDigit('11234123412341234i4 234k 32k4 234i234i111'))); // false
console.log(validLuhnNumber(addCheckDigit('8763'))); // true
console.log(validLuhnNumber(addCheckDigit('2323 2005 7766 3554'))); // true
console.log(validLuhnNumber(addCheckDigit('2323 2005 7766.3554'))); // true
console.log(validLuhnNumber(addCheckDigit('2323 2005 7766.3553'))); // false