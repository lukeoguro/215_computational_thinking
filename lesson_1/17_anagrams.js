function anagram(word, list) {
  word = sort_word(word);
  return list.filter((candidate) => word === sort_word(candidate));
}

function sort_word(word) {
  return word.split('').sort().join('');
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]