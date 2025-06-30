function isEnoughCapacity(products, containerSize) {
  //First solution
  const values = Object.values(products);
  const reduced = values.reduce((acc, elem) => elem + acc);

  return reduced <= containerSize;

  //Second solution
  const arr = [];
  let overall = 0;

  for (value in products) {
    arr.push(products[value]);
  }
  console.log(arr);

  for (const elem of arr) {
    overall += elem;
  }

  return overall <= containerSize;
}


console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); // false