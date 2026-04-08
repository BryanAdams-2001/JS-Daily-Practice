// ============================================================
// EXERCISE — String Inspector
// Write a function called stringStats(str)
// It accepts a string
// Return an object with:
//   — length: total number of characters
//   — wordCount: number of words
//   — hasNumbers: true or false
//   — reversed: the string reversed
//   — uppercase: the string in all caps

// stringStats("Hello World 123")
// Expected:
// {
//   length: 15,
//   wordCount: 3,
//   hasNumbers: true,
//   reversed: "321 dlroW olleH",
//   uppercase: "HELLO WORLD 123"
// }


// RED — set up function stringStats(str)
// str accepts the string this function will require
// once ran you should see undefined — object not declared yet
function stringStats(str) {
    let obj = {
        length: str.length,
        wordCount: str.split(" ").length,
        hasNumbers: /\d/.test(str),
        reversed: str.split("").reverse().join(""),
        uppercase: str.toUpperCase(),
    };
    return obj;
}

console.log(stringStats("Hello World 123"))

// ============================================================
// REFLECTION
// ============================================================

// Completed April 7 — daily commit, topic-7-string-manipulation

// ── The Approach ─────────────────────────────────────────
// Coming into this one I felt pretty confident with arrays
// so I wanted to test myself with strings specifically.
// Declared the object upfront with placeholder values first
// then filled in each property one at a time.
// That structure kept me from getting overwhelmed trying to solve everything at once.

// ── What I Got Wrong ─────────────────────────────────────
// 1. was limit testing and Had true || false for hasNumbers as a placeholder
//    learned quickly that That expression always evaluates to true — even if it's not
//    a toggle it is just true. Placeholder should have been false.
//
//
// 2. Reversed the words instead of the characters
//    split(" ") breaks by spaces so you get word chunks
//    split("") breaks by nothing so you get individual letters
//    That one character difference completely changes the result.
//    Cost me a whole wrong output before I caught it.

// ── What I Learned ───────────────────────────────────────
// split("") vs split(" ") — this was the biggest takeaway.
// The separator you pass in determines what gets broken apart.
// Empty string = individual characters.
// Space = words. One character, completely different behavior.

// hasNumbers — I had never used or seen /\d/.test() before this exercise.
// Regular expressions felt intimidating but this use case is actually clean and simple.
// /\d/ is the pattern meaning any digit 0 through 9.
// .test(str) runs that pattern against the string
// and just returns true or false. That is it.
// Now I know I can use regex for quick pattern checks
// without it being complicated.

// Building an object with computed values was also new territory.
// Every property value is being calculated on the fly from str.
// No hardcoding, no predeclaring extra variables for each one.
// The object does all the work in one clean structure.

// ── Result ───────────────────────────────────────────────
// All five properties matched expected output exactly.
// length: 15, wordCount: 3, hasNumbers: true,
// reversed: '321 dlroW olleH', uppercase: 'HELLO WORLD 123'

// ── Real World ───────────────────────────────────────────
// String inspection like this shows up constantly.
// Password validators check for numbers and special characters.
// Search bars count words and reverse lookups.
// Form validators check input format before sending to a server.
// This exact pattern, loop through properties, test the string,
// return a structured result, is something I will use again.