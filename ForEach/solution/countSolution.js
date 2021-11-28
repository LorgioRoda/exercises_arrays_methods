function count(arr, callback) {
  let values = 0;
  arr.forEach((item) => {
    callback(item) ? values++ : values + 0;
  });

  return values;
}

console.log(count(["a", "b"], (e) => e === "d")); //Expected: 0
console.log(count([2, 1, 4, 5, 2, 8], (e) => e === 2)); //Expected: 2
console.log(count([1, 2, 3, 4], (e) => e > 1)); //Expected: 3
console.log(count([1, 2, 3, 4], (e) => e === 3)); //Expected: 1
