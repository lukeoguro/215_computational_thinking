// Write a program that cleans up user - entered phone numbers so that they can be sent as SMS messages.Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

// The rules are as follows:

// If the phone number is less than 10 digits, assume that it is a bad number.
// If the phone number is 10 digits, assume that it is good.
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
// If the phone number is 11 digits and the first number is not 1, then it is a bad number.
// If the phone number is more than 11 digits, assume that it is a bad number.
// For bad numbers, just a return a string of 10 0s.

// i: string (unsanitized phone number)
// o: string (sanitized phone number or string of 10 0s)

// rules:
// input phone number can include various special characters that should be ignored
// a valid phone number after stripping characters has 10 digits
// it can also be an 11 digit phone number that has 1 at the beginning.
//   in that case, strip the 1 at the beginning
// if it's a bad number, return string of 10 0s

console.log(cleanNumber('asdf12    3(45)6(7-8 .90     ') === '1234567890');
console.log(cleanNumber('12345678901') === '2345678901');
console.log(cleanNumber('22345678901') === '0000000000');
console.log(cleanNumber('12345') === '0000000000');
console.log(cleanNumber('123456789012') === '0000000000');

// algorithm:
// strip all invalid characters from input string
// if length is 11 and first character is 1, strip first 1
// check length is 0
//   if 10: return string
//   else: return string of 10 0s

function cleanNumber(inputNumber) {
  let outputNumber = inputNumber.replace(/[^\d]/g, '');

  if (outputNumber.length === 10) {
    return outputNumber;
  } else if (outputNumber.length === 11 && outputNumber[0] === '1') {
    return outputNumber.slice(1);
  } else {
    return '0000000000';
  }
}