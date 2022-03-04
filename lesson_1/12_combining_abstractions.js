function mostFrequentStartingLetter(names) {
  let counts = names.reduce((acc, name) => {
    let letter = name[0];
    acc[letter] = acc[letter] + 1 || 1;
    return acc;
  }, {})

  return Object.keys(counts).reduce((acc, letter) => {
    return counts[letter] > counts[acc] ? letter : acc;
  })
}

let names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];

console.log(mostFrequentStartingLetter(names)); // letter is "K"