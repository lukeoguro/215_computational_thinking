function totalArea(rectangles) {
  return rectangles.reduce((acc, rectangle) => {
    return acc + rectangle[0] * rectangle[1];
  }, 0)
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141


function totalSquareArea(rectangles) {
  return rectangles.reduce((acc, rectangle) => {
    if (rectangle[0] === rectangle[1]) {
      acc += rectangle[0] * rectangle[1]
    }
    return acc;
  }, 0)
}

rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121
