// EXERCISE 2 — Flatten and Sum
// Write a function called flatSum(arr)
// It accepts a nested array like [[1,2], [3,4], [5]]
// Returns the sum of all numbers across all nested arrays
// Hint: you will need two array methods chained together

// flatSum([[1, 2], [3, 4], [5]])
// Expected: 15

// flatSum([[10, 20], [5, 5], [1, 1, 1]])
// Expected: 43

function flatSum(arr) {
  return arr.flat().reduce((acc, num) => acc + num, 0)
}
console.log(flatSum([[1, 2], [3, 4], [5]]));
console.log(flatSum([[10, 20], [5, 5], [1, 1, 1]]));


