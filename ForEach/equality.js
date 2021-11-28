/*
Write a function eql that checks if two arrays are equal. It doesn't need to work for arrays containing arrays, like [[1], [2]].
It only needs to work for arrays of simple values like [1, 2, 3].
Also remember that forEach accepts a function. A return inside the forEach only returns from the forEach.
It won't return from the function that called forEach.
*/

function equality(arr1, arr2) {
  return true;
}

/* Maybe these console.logs could help you */

console.log(equality([1], [1])); //Expected: True
console.log(equality([1], [2])); //Expected: False
console.log(equality([1, 2, 3, 4], [1, 2, 3, 4])); //Expected: True
console.log(equality([1, 2, 3, 4], [1, 2, 3, 9])); //Expected: False
console.log(equality(["b", "a"], ["a", "b"])); //Expected: False
console.log(equality([], [1])); //Expected: False
console.log(equality(["1"], [1])); //Expected: False
