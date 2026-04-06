// ============================================================
// EXERCISE 4 — Unique Values Only
// Write a function called removeDuplicates(arr)
// It accepts an array of numbers

// Returns a new array with duplicates removed
// Preserve the original order
// Do not use Set — find another way

// removeDuplicates([1, 2, 3, 2, 4, 1, 5, 3])
// Expected: [1, 2, 3, 4, 5]

// ============================================================

// RED — What I expect before writing any code
// removeDuplicates([1, 2, 3, 2, 4, 1, 5, 3])
// I expect this to return: [1, 2, 3, 4, 5]
// Right now if I call this function it will crash or return undefined
// because the function does not exist yet

function removeDuplicates(arr){
    let obj = {};
    let emptyArray = [];
    for(const number of arr){
        if (obj[number] === undefined) {
            obj[number] = true;
            emptyArray.push(number)
        }
    }
    return emptyArray;
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5, 3]));

// ============================================================
// REFLECTION
// ============================================================

// Completed April 5 — second commit of the day, accounting for missed day April 4.

// ── The Approach
// Instructions said no using Set — which is literally the built-in tool for this.
// So I had to think. Then I realized I just solved this same skeleton in Exercise 3.
// Object, loop, check if key exists, act on it. Pattern was already there.

// ── The New Piece — obj[number] = true
// In Exercise 3 I stored arrays inside the object to group things.
// Here I do not need to store anything real.
// I just need the key to exist so I can check it later.
// Setting it to true is planting a flag "I have been here before."
// Sat on this line longer than I should have trying to store
// something meaningful. Turns out the meaning is just that the key exists.

// ── Where The Debugging Happened
// 1. Had i inside the loop instead of number
//    for...of gives you the value directly there is no i
//
// 2. Had obj[number] === obj[i] as the condition
//    I was comparing two lookups instead of asking the real question
//    does this key exist yet that is === undefined not a comparison
//
// 3. Push was outside the if block
//    That would push every number including duplicates
//    Moved it inside only runs when the number has not been seen
//
// 4. Had emptyArray[number].push(number) — bracket notation on a plain array
//    It is just emptyArray.push(number) — push goes to the end automatically

// ── Result ───────────────────────────────────────────────
// Ran it — got [1, 2, 3, 4, 5] first try after those fixes.

// ── Real World ───────────────────────────────────────────
// Filtering duplicate user IDs from a database response
// Preventing the same product from being added to a cart twice
// Deduplicating tags on a blog post before saving
// Any time you have a messy list and need a clean one — this is the move.
// The object is just the memory that makes it possible.