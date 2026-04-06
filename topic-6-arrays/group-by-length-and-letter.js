// ============================================================
// EXERCISE 3A — Group By Length
// ============================================================

// EXERCISE 3 — Group By
// Write a function called groupByLength(arr)
// It accepts an array of strings

// Returns an object where keys are word lengths
// and values are arrays of words with that length

// OUTPUT:
// groupByLength(["cat", "dog", "elephant", "ant", "bear", "ox"])

function groupByLength(arr){
    let obj = {};
    for (const word of arr) {
        if (obj[word.length] === undefined) {
            obj[word.length] = []
        }
        obj[word.length].push(word)
        }
        return obj;
    }

console.log(groupByLength(["cat", "dog", "elephant", "ant", "bear", "ox"]))
// Expected:
// {
//   2: ["ox"],
//   3: ["cat", "dog", "ant"],
//   4: ["bear"],
//   8: ["elephant"]
// }

//BREAKDOWN
// ============================================================
// Exercise 3A + 3B — Group By Length / Group By First Letter
// Concepts: objects, for...of, dynamic keys, undefined checks
// ============================================================

// Coming into this one I thought Object.keys() or Object.values()
// would be the move. Turns out those are for reading an object that already exists.
// had to go back to basics on this one.

// The output shape threw me off too at first.
// I kept thinking in arrays because that is what I was used to.
// Once I actually looked at the expected output and saw the
// curly braces I realized oh this is an object I am building
// not an array I am transforming. That clicked is when it clicked for me.

// Hardest part was figuring out how to handle duplicate lengths.
// My first instinct was to check for duplicates like I would
// in a regular array. But the real question was simpler
// does this key exist yet or not?
// If obj[word.length] === undefined it does not exist.
// Create the array. Then push.
// If it already exists just push.
// That one check is the whole logic of the exercise.

// I also kept mixing up where return goes.
// Tried putting it inside the loop, inside the else block,
// everywhere except where it belongs after the loop ends.
// return obj at the bottom of the function sends the whole
// completed object back out. Inside the loop it just kills
// everything before it finishes building.

// The refactor was the cleanest moment.
// Original version had if and else if with push in both blocks.
// Realized both cases always push only the if case needs
// to create the array first. Pulled the push outside the if
// and the whole thing got shorter without changing behavior.
// That is the first time a refactor actually felt natural
// instead of just being told to clean something up.


// EXERCISE 3B — Group By First Letter
//
// Write a function called groupByLetter(arr)
// It accepts an array of strings
// Returns an object where keys are the first letter of each word
// and values are arrays of words that start with that letter
//
// groupByLetter(["apple", "avocado", "banana", "blueberry", "cherry", "apricot"])


function groupByLetter(arr){
    let obj = {};
    for(const word of arr){
        if(obj[word[0]] === undefined){
            obj[word[0]] = []
        }
        obj[word[0]].push(word)
    }
    return obj;
}

console.log(groupByLetter(["apple", "avocado", "banana", "blueberry", "cherry", "apricot"]))
// Expected:
// {
//   a: ["apple", "avocado", "apricot"],
//   b: ["banana", "blueberry"],
//   c: ["cherry"]
// }


// ============================================================
// WHAT I TOOK AWAY
// ============================================================

// Building an object dynamically is a pattern that shows up
// everywhere in real code grouping data, counting occurrences,
// mapping relationships. The undefined check before pushing
// is the core move and now it feels obvious.
// It did not feel obvious an hour ago when i started.
// did 3B right after just to make sure it actually stuck and not
// just got lucky the first time it did.

// Real world use case — this exact pattern shows up constantly.
// Think about an e-commerce site grouping products by category.
// Think about a dashboard grouping users by subscription tier.
// Think about a music app grouping songs by genre or artist.
// Any time you have a flat list and need to organize it into
// buckets based on a shared property this is the pattern.
// The key changes, the values change, but the logic is identical:
// check if the bucket exists, create it if not, then drop the
// item in. That is it. Crazy how the same three lines handle all of that.