// ============================================================
// EXERCISE 2B — Nested Loop Pattern
// ============================================================
// Print this exact pattern using nested loops:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// ============================================================


// ============================================================
// THINGS I ALREADY KNEW ABOUT NESTED LOOPS GOING IN
// ============================================================
//
// More nested loops = slower code
// Important to test bits of code as you work through each step
// A function will not print anything if you forget to call it
// or forget the console.log inside it


// ============================================================
// THE LEARNING CHALLENGE
// ============================================================
//
// I had never used nested loops in my own code before, so testing
// with them myself was a real experience.
//
// Initially, I thought the answer just lived inside a single function
// with a for loop, but I quickly learned that to get that cascading
// output I needed a completely different approach.
//
// I decided to use an array first, thinking it would give the code
// a fixed set of values to reference when building my conditions
// for the incrementing numbers. I also knew from just finishing
// the template literals lesson that they are the most versatile
// when dealing with specific dynamic values so I ran with that too.




// ============================================================
// MY FIRST ATTEMPT — What went wrong
// ============================================================


const values = [1, 2, 3, 4, 5]


function nLoop() {
  for (let i = 1; i < 2; i++) {
    console.log(`${i}`)
    for (let j = 2; j <= 2; j++) {
      console.log(`${i} ${j}`)
      for (let k = 3; k <= 3; k++) {
        console.log(`${i} ${j} ${k}`)
        for (let l = 4; l <= 4; l++) {
          console.log(`${i} ${j} ${k} ${l}`)
          for (let u = 5; u <= 5; u++) {
            console.log(`${i} ${j} ${k} ${l} ${u}`)
          }
        }
      }
    }
  }
}


nLoop()




// ============================================================
// WHAT WENT WRONG WITH MY FIRST ATTEMPT
// ============================================================
//
// It was only after I finished the code that I realized this approach
// although it works and produces the correct output, that is all it does.
//I mean, just look how distorted it is from an outside perspective; this is not clean, reusable code.
// If a new instruction was added or someone else had to work on my code
//They would need to understand my exact mindset when I wrote it.
// It is too specific and uses too many lines for what the instructions
// actually required.
//
// One of the things I am learning through Coursera is proper documentation
// and how to write scalable code with solid foundations and good habits.
// My first attempt was a poor reflection of that.
//
// "Hardcoded solution" was a term I had not heard before, but after
// looking at my code, I could see exactly what it meant.
// My loops were written for one specific case — change anything
// and the whole thing breaks.
//
// Specific flaws in my first attempt:
//
// FLAW 1 — Five separate hardcoded loops
//   Each loop was written for exactly one row.
//   Need 10 rows? Write 10 loops.
//   Need 100 rows? Write 100 loops.
//   That is not scalable and not how developers write production code, I realized.
//
// FLAW 2 — Outer loop only ran once
//   i < 2 means the loop only runs when i equals 1.
//   It was not really looping at all.
//
// FLAW 3 — The array was declared but never used
//   const values = [1, 2, 3, 4, 5] sat at the top doing nothing.
//   Dead variables are a code quality issue.
//
// FLAW 4 — Not reusable
//   My version only works for this exact 5 row pattern.
//   The improved version works for any number with zero changes.


// ============================================================
// WHAT THE IMPROVED SOLUTION DOES DIFFERENTLY
// ============================================================
//
// The final solution below uses only two loops instead of five.
// The inner loop uses i as its upper limit, which means it grows
// automatically with every row, no hardcoding required.
//
// This is the difference between code that works
// and code that scales.
// ============================================================
// IMPROVED SOLUTION
// ============================================================


function nLoopImproved() {


    // OUTER LOOP — controls how many rows print
    // change 5 to any number and the pattern adjusts automatically
    for (let i = 1; i <= 5; i++) {
        // build the row as a string so everything prints on one line
        let row = ""
        // INNER LOOP — grows with i
        // when i = 1, j runs once:        row = "1"
        // when i = 2, j runs twice:       row = "1 2"
        // when i = 3, j runs three times: row = "1 2 3"
        for (let j = 1; j <= i; j++) {
            row += j + " "
        }
        // .trim() removes the trailing space at the end of each row
        console.log(row.trim())
    }
}
nLoopImproved();



