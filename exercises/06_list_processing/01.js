function sum(int) {
  let digits = [...String(int)].map(char => Number(char));
  return digits.reduce((acc, digit) => acc + digit);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45