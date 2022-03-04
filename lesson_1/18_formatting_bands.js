function processBands(data) {
  return data.map(band => {
    band = Object.assign({}, band);
    band.name = newBandName(band.name);
    band.country = 'Canada';
    return band;
  })
}

function newBandName(name) {
  return name.replace(/\./g, '')
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

console.log(processBands(bands));
console.log(bands);

// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]