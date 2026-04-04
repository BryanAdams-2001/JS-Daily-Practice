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

// Coming into this one I had never used flat() or reduce() before.
// The hint said two array methods chained together, which
// immediately told me the answer lives in the method, not the logic.
// So I went and looked up what flat() does first.

// flat() takes a nested array and pulls everything out into
// one single-level array, like unpacking boxes inside boxes.
// [[1,2],[3,4],[5]] becomes [1, 2, 3, 4, 5]
// Once everything is on one level, the problem becomes simple.

// reduce() was the harder one to wrap my head around.
// It takes an array and reduces it down to a single value.
// It takes two arguments: a callback and a starting value.
// The callback receives two things on every iteration:
//   acc  — the accumulator, running total of everything so far
//   num  — the current number being looked at
// Starting value of 0 means the total begins at zero
// and each number gets added to it as the loop runs.

// The chain reads like plain English once you see it:
// flatten the array first, then add everything up.

// What tripped me up:
// reduce() looks intimidating because of the acc parameter.
// I kept thinking acc needed to be declared somewhere.
// Realized it is just a running variable that reduce() manages
// internally — you just give it a starting value, and it handles
// the rest every iteration.

// What clicked:
// Chaining methods is powerful. flat() returns a new array
// and reduce() runs immediately on that result.
// No need to store the flattened array in a variable first.
// One line does the whole job cleanly.

// What I would do differently:
// Next time I hit an unfamiliar method, I will read the MDN docs
// first before guessing. flat() and reduce() have extra options
// like flat(Infinity) for deeply nested arrays that would have
// taken me a while to find without documentation.

