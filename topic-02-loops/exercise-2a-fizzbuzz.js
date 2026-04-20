// EXERCISE 2A — Standard FizzBuzz first
// Print 1-30
// Multiples of 3: "Fizz"
// Multiples of 5: "Buzz"
// Multiples of both: "FizzBuzz"
// Use at least one && operator

function counter() {
    let fizzCount = 0;
    let buzzCount = 0;
    for (let i = 1; i <= 30; i++) {
        fizzCount++
        buzzCount++

        if (fizzCount == 3 && buzzCount == 5) {
            console.log("FizzBuzz");
            fizzCount = 0;
            buzzCount = 0;
        } else if (fizzCount == 3){
            console.log("Fizz");
            fizzCount = 0;
        } else if(buzzCount == 5){
            console.log("Buzz");
            buzzCount = 0;
        } else{
            console.log(i);
        }
    }
}
counter();

// --- STEP BY STEP APPROACH ---
//
// Step 1 — Read the whole problem once before writing anything
// Step 2 — Ask: What should the output look like? Work backwards from that
// Step 3 — Ask: What is the smallest possible first step?
//           Not the whole solution, just the first line
// Step 4 — Build that one step and make it work before moving on
// Step 5 — Read the next instruction with fresh eyes

// ---- WHAT IS THIS CODE ASKING ME TO DO? ----
//
// Use a for loop to count from 1 to 30.
// From that set, find numbers evenly divisible by 3 with no remainder, print "Fizz".
// Find numbers evenly divisible by 5 with no remainder, print "Buzz".
// Find numbers divisible by BOTH 3 and 5 print "FizzBuzz".
// Do all of this without using the modulo operator.

// ---- WHAT SHOULD THE OUTPUT LOOK LIKE? ----
//
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14,
// FizzBuzz, Fizz, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, FizzBuzz,
// 26, Fizz, 28, 29, FizzBuzz

// ---- WHAT IS THE FIRST TINY STEP? ----
//
// 1st — Get the loop running from 1 to 30 inside a function (DONE)
// 2nd — Start with the double condition  divisible by BOTH 3 and 5 first
// 3rd — Create two separate counter variables, one for Fizz and one for Buzz
//        then combine them using && for the FizzBuzz condition
// 4th — Once the loop is working, set up the 3 conditions in order:
//        both divisible → Fizz only → Buzz only
// 5th — Make sure every if block logs the correct output
// 6th — Reset the counter after every successful condition
//        so it keeps cycling and does not get stuck

// ---- REFLECTION ----
//
// This one was tough at first. I already knew the modulo operator
// would make this easy, but I saw a chance to challenge myself, so I did.
//
// The biggest issue I ran into was my assignment operators.
// Standard procedure when writing code is to walk through what
// each task needs to be done like a sentence, and I mean that literally, "sounding it out" is something I heard when first learning how to read and write
// so that's no different here, especially when learning a new coding language.
// An if statement IS an example of that. If you sound it out properly, your
// brain starts thinking differently about the problem, rather than just staring at symbols.
//
// The huge "oh, I get it" moment came when I was working out the output
// and realized one equal sign does something completely different from
// two or three. There are 3 types, and they should never be confused:
//
//   =    assigns a value
//   ==   checks if values are equal (loose)
//   ===  checks if values AND types are equal (strict)
//
// One wrong sign, and the counter never resets; output is completely broken.
// That mistake taught me more than reading about it ever would have.
//
// Going forward, my process for every exercise is:
//   1. Assess the problem
//   2. Decide what the output should look like
//   3. Plan how the code should be structured
//   4. Build one layer at a time and test before adding the next
//
// Testing and debugging is a coder's number one job.
// Keeping track of mistakes and staying detail-oriented is everything.
// If I were working inside a big codebase, one wrong operator could
// break a lot more than a FizzBuzz counter, and now I know that.
