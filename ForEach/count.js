//Use forEach to write a function count(arr, callback). It should return the number of elements for which callback is true.

function count(arr, callback) {}

/*
You must use forEach.
count.toString().includes('forEach');
*/

// Maybe these console.logs could help you
console.log(count(["a", "b"], (e) => e === "d")); //Expected: 0
console.log(count([2, 1, 4, 5, 2, 8], (e) => e === 2)); //Expected: 2
console.log(count([1, 2, 3, 4], (e) => e > 1)); //Expected: 3
console.log(count([1, 2, 3, 4], (e) => e === 3)); //Expected: 1
