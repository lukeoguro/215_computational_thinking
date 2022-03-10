// See interpretive problem solving exercise #3

// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument and returns true if the word can be spelled using the set of blocks, false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

// isBlockWord('BATCH');      // true
// isBlockWord('BUTCH');      // false
// isBlockWord('jest');       // true

// i: string (word)
// o: boolean (if the word can be spelled with the blocks)

// rules:
// the word must be able to be spelled with the blocks
// each block has 2 letters
// each block can only be used once
// 13 blocks in total
// case-insensitive (toLowerCase on string)

// ds: array of blocks

// algorithm:
// create a constant with the blocks as an array (frozen)
// take an input string (upcase)
// create a copy of the blocks array
// iterate over each letter:
//   check if this letter can be spelled with blocks (blocks, letter)
//   if true: delete block
//   if false: return false
// end
// return true

// validLetter:
// take blocks and letter
// for loop over blocksArr, and return true if valid letter

// deleteBlock:
// take letter
//   If block corresponds to letter
//   If true: remove block from blocksArr and return true
// end
// return false

const BLOCKS = [
  "B:O", "X:K", "D:Q", "C:P", "N:A",
  "G:T", "R:E", "F:S", "J:W", "H:U",
  "V:I", "L:Y", "Z:M",
];

Object.freeze(BLOCKS);

function isBlockWord(string) {
  string = string.toUpperCase();
  let blocks = BLOCKS.slice();

  for (let i = 0; i < string.length; i += 1) {
    let letter = string[i];
    if (validLetter(letter, blocks)) {
      deleteBlock(letter, blocks);
    } else {
      return false;
    }
  }

  return true;
}

function validLetter(letter, blocks) {
  return !!blocks.some(block => block.includes(letter));
}

function deleteBlock(letter, blocks) {
  for (let i = 0; i < blocks.length; i += 1) {
    let block = blocks[i];
    if (block.includes(letter)) {
      blocks.splice(i, 1);
      return;
    }
  }
}



console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('@@@@@'));      // false
console.log(isBlockWord('BOXKD'));      // false

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false