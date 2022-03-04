function octalToDecimal(numberString) {
  return numberString.split('').reduce((acc, char, index) => {
    let power = numberString.length - index - 1;
    return acc + Number(char) * (8 ** power);
  }, 0)
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9