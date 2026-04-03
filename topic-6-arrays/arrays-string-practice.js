// ============================================================
// EXERCISE SET — Arrays, Strings, and Core JS Concepts
// ============================================================
// EXERCISE 1 — String Transformer
// Write a function called transformWords(arr)
// It accepts an array of strings
// Returns a new array where:
//   — words longer than 4 characters are UPPERCASED
//   — words 4 characters or shorter are reversed
// No loops allowed — use map() only

// transformWords(["hello", "cat", "world", "hi", "javascript"])
// Expected: ["HELLO", "tac", "WORLD", "ih", "JAVASCRIPT"]

// ============================================================
// EXAMPLE 1 — Full Scalable Code
// ============================================================

function transformWords(arr){
    return arr.map(word => {
        if (word.length > 4) {
            return word.toUpperCase()
        } else{
            return word.split("").reverse().join("")
        }
    })
}

console.log(transformWords(["mouse","cat","horse"]))

// ============================================================
// EXAMPLE 2: — getting the code to match the output
// ============================================================
// function transformWords(arr){
//     console.log(arr.map(word => {
//         if (word.length > 4) {
//             return word.toUpperCase()
//         } else{
//             return word.split("").reverse().join("")
//         }
//     }))
// }

// transformWords(["mouse","cat","horse"])
// transformWords(["hello", "cat", "world", "hi", "javascript"])

// [ "MOUSE", "tac", "HORSE" ]
// [ "HELLO", "tac", "WORLD", "ih", "JAVASCRIPT" ]


// ============================================================
// Exercise 1/2 (BREAKDOWN)— String Transformer
// map(), toUpperCase(), split(), reverse(), join()
// ============================================================

// Coming into this I understood what map() does on the surface
// but had never built a conditional transformation inside one.
// First question I had — do I predeclare a/the array as a const
// or pass it directly into the function?
// I figured out though that the array belongs in the function call at the bottom
// not hardcoded inside the function itself that would nto make the code as versatile as it is now.
// That clicked fast once I thought about what the param is for.

// The split().reverse().join() chain tripped me up at first
// because I had never thought about why you need all three.
// Working through it step by step:
// split("") breaks the string into individual characters depending on your separator in this case its ("")
// while reverse() flips the array no separator needed
// join("") puts it back together as a string also depends on the chosen separator in this case its ("")
// Made sense once I looked back in my coursera notes

// Biggest confusion — I kept thinking console.log inside
// the function was the same as return outside.
// Realized the difference when I asked myself why the array was showing
// as a simple display one output over the other and not in the form of the array like the output suggested
// return sends the result forward so other code can use it. making code scalable and versatile
// console.log inside just displays and drops it. Leaving it as a DEAD END.
// For scalability return is always the right call.
// console.log inside works for display only situations but kills the result for anything downstream.

// Final version works — moved console.log to wrap the call outside the function. Tested with both arrays.
// Both outputs matched expected exactly. however i know return is gonna be my best friend in large scale projects

// What I would do differently:
// Use return inside the function from the start.
// Wrapping console.log around the call outside is cleaner and lets it age better for when i go back and want to do something with this code

// EXERCISE 1B — Number Transformer
//
// Write a function called transformNumbers(arr)
// It accepts an array of numbers

// Returns a new array where:
//   — numbers greater than 10 are squared (num * num)
//   — numbers 10 or under are turned into a string like "small: 3"
// Use map() only — no loops
//
// transformNumbers([3, 15, 7, 20, 10, 4])
// Expected: ["small: 3", 225, "small: 7", 400, "small: 10", "small: 4"]

// function transformNumbers(arr){
//     return arr.map(number => {
//         if (number > 10) {
//             return number**2
//         }else {
//             return  `small: ${number}`
//         }
//     })
// }

// console.log(transformNumbers([3, 15, 7, 20, 10, 4]))

// ============================================================
// WHAT I NOTICED — Function and Map Hierarchy
// ============================================================
//
// There are three levels working together here:
//
// 1. transformNumbers(arr)
//    The outer function — stores the whole operation
//    and gives it a name we can call later.
//    arr is just a placeholder waiting for a real array.
//
// 2. arr.map()
//    The array method — loops through every item in arr
//    and transforms each one based on the condition.
//    map() is what does the actual iteration work.
//
// 3. number
//    The temporary variable inside map() —
//    holds one item at a time as the loop runs.
//    It is not a stored variable, just a placeholder
//    for each item during that single iteration.
//
// The function stores everything.
// map() does the looping.
// number holds the current item.
// All three work together every time map() runs.