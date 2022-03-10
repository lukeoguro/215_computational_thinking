// The problem we will look at compares software version numbers.

// While version numbers often appear to be decimal numbers, they are, in fact, a convenient notation for a more complicated number system. The following are all legal version numbers:

// 1
// 1.0
// 1.2
// 3.2.3
// 3.0.0
// 4.2.3.0

// Write a function that takes any two version numbers in this format and compares them, with the result of this comparison showing whether the first is less than, equal to, or greater than the second version:

// If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, we should return 0.
// If either version number contains characters other than digits and the . character, we should return null.
// Here is an example of version number ordering:

// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

// i: two strings (version1, version2)
// o: number (1, -1, 0) or null (if input is invalid)

// rules:
// compare version numbers (1 if v1 > v2, -1 if v1 < v2, 0 if v1 === v2)
// if version number is invalid (it contains anything other than digits or period) return null
// subversion can be greater or equal to 10

// ds: split parts into arrays (ex: [1, 2, 0, 0])

// algorithm:
// check for edge cases (v1, v2 containing anything but digits and periods) -> return null
// split version numbers into arrays
// compare element-by-element (up to the longest length)
//   if element is undefined, make equal to 0
//   if e1 > e2: return 1
//   else if el1 < el2: return -1
//   else: don't terminate early, just continue
// return 0

function compareVersions(v1, v2) {
  let pattern = /^\d+(.\d+)*$/;
  if (!pattern.test(v1) || !pattern.test(v2)) return null;

  let v1Arr = getVersionArray(v1);
  let v2Arr = getVersionArray(v2);

  let length = Math.max(v1Arr.length, v2Arr.length);

  for (let i = 0; i < length; i += 1) {
    let el1 = v1Arr[i] || 0;
    let el2 = v2Arr[i] || 0;

    if (el1 > el2) {
      return 1;
    } else if (el1 < el2) {
      return -1
    }
  }

  return 0;
}

function getVersionArray(version) {
  return version.split('.').map(Number);
}

console.log(compareVersions('1', '1') === 0);
console.log(compareVersions('1.1', '1.0') === 1);
console.log(compareVersions('2.3.4', '2.3.5') === -1);
console.log(compareVersions('1.a', '1') === null);
console.log(compareVersions('.1', '1') === null);
console.log(compareVersions('1.', '2') === null);
console.log(compareVersions('1..0', '2.0') === null);
console.log(compareVersions('1.0', '1.0.0') === 0);
console.log(compareVersions('1.0.0', '1.1') === -1);
console.log(compareVersions('1.0', '1.0.5') === -1);