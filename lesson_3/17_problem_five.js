// Implement encoding and decoding for the rail fence cipher.

// The Rail Fence cipher is a form of transposition cipher that gets its name from the way in which it's encoded. It was already used by the ancient Greeks.

// In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence, then moving up when we get to the bottom (like a zig-zag). Finally the message is then read off in rows.

// For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .
// Then reads off:

// WECRLTE|ERDSOEEFEAOC|AIVDEN
// To decrypt a message you take the zig-zag shape and fill the ciphertext along the rows.

// ? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// The first row has seven spots that can be filled with "WECRLTE".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// Now the 2nd row takes "ERDSOEEFEAOC".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// Leaving "AIVDEN" for the last row.

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .
// If you now read along the zig-zag shape you can read the original message.

// s: string (cipher)
// o: string (decrypted message)

// HELLOWORLD
// H   O   L  | 3
//  E L W R D | 5
//   L   O    | 2

//1...5...9.
//.2.4.6.8.0
//..3...7...

// order to read the characters
// [0, 4, 8, 12, 16, 20, 24] +4 iteration until length of cipher
// [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23] +2 iteration
// [2, 6, 10, 14, 18, 22] +4 iteration until length of cipher

// [0, 4, 8, 12, 16, 20, 24,
// 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23,
// 2, 6, 10, 14, 18, 22]

// ds: array of subarrays (length: 3; each rail)

// algorithm:
// create orders array
// 3 iterations:
//   idx = 0; idx < cipher.length; idx += 4
//   idx = 1; idx < cipher.length; idx += 2
//   idx = 2; idx < cipher.length; idx += 4

// function decrypt(encryptedString) {
//   let length = encryptedString.length;
//   let conversion = getConversion(length);

//   let decryptedChars = [...Array(encryptedString.length).keys()];
//   return decryptedChars.map(dIdx => {
//     let eIdx = conversion[dIdx];
//     return encryptedString[eIdx];
//   }).join('');
// }

// // eIdx is encryptedIndex, dIndex is decryptedIndex
// function getConversion(length) {
//   let conversion = {};
//   let eIdx = 0;
//   for (let dIdx = 0; dIdx < length; dIdx += 4, eIdx += 1) { conversion[dIdx] = eIdx };
//   for (let dIdx = 1; dIdx < length; dIdx += 2, eIdx += 1) { conversion[dIdx] = eIdx };
//   for (let dIdx = 2; dIdx < length; dIdx += 4, eIdx += 1) { conversion[dIdx] = eIdx };
//   return conversion;
// }

// console.log(decrypt('WECRLTEERDSOEEFEAOCAIVDEN'));
// console.log(decrypt('HOLELWRDLO'));


// IN THE CASE WHERE THE NUM OF RAILS IS NOT SPECIFIED:

// Create a 2D array
// Push order of appearance index into the according subarray
// Index of 2D arrays dictate cipher order
// Create an object with key-value pairs. Key being dIdx and value being cIdx
// Iterate over decrypted order
//   Access corresponding current order character using 2D array

// HIEVERYONE

// H.E.E.Y.N.
// .I.V.R.O.E

// H...E...N.
// .I.V.R.O.E
// ..E...Y...

// HIEVERYONE
// H.....Y...
// .I...R.O..
// ..E.E...N.
// ...V.....E

// Order of Appearance (Decrypted Order)
// 0.....6...
// .1...5.7..
// ..2.4...8.
// ...3.....9

// Order of Cipher (Encrypted Order)
// 0.....1...
// .2...3.4..
// ..5.6...7.
// ...8.....9

function encrypt(decryptedString, numOfRails) {
  const conversion = getConversion(decryptedString.length, numOfRails);

  let encryptedString = '';

  for (let eIdx = 0; eIdx < decryptedString.length; eIdx += 1) {
    let dIdx = conversion[eIdx];
    encryptedString += decryptedString[dIdx];
  }

  return encryptedString;
}

function decrypt(encryptedString, numOfRails) {
  const conversion = invertObj(getConversion(encryptedString.length, numOfRails));

  let decryptedString = '';

  for (let dIdx = 0; dIdx < encryptedString.length; dIdx += 1) {
    let eIdx = conversion[dIdx];
    decryptedString += encryptedString[eIdx];
  }

  return decryptedString;
}

// key: encryptedIdx; value: decryptedIdx
function getConversion(length, numOfRails) {
  let rails = Array(numOfRails).fill().map(_ => []);

  let railNum = 0;
  let increment = 1;

  for (let dIdx = 0; dIdx < length; dIdx += 1) {
    rails[railNum].push(dIdx);
    railNum += increment;

    if (railNum === 0 || numOfRails - 1 === railNum) {
      increment *= -1;
    }
  }

  return rails.flat().reduce((acc, dIdx, eIdx) => {
    acc[eIdx] = dIdx;
    return acc;
  }, {});
}

function invertObj(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[obj[key]] = key;
    return acc;
  }, {});
}

console.log(encrypt('HELLOWORLD', 3) === 'HOLELWRDLO');
console.log(encrypt('HIEVERYONE', 4) === 'HYIROEENVE');

console.log(decrypt('HOLELWRDLO', 3) === 'HELLOWORLD');
console.log(decrypt('HYIROEENVE', 4) === 'HIEVERYONE');