// ============================================================
// EXERCISE 2C — While Loop With a Flag
// ============================================================
// Generate random numbers between 1 and 10
// Keep generating until you hit the number 7
// Count how many tries it took
// Print: "Found 7 after X attempts"
// ============================================================
// ---- MY FIRST ATTEMPT ---- (commented out)
//
// This is what I came up with using only my notes and the
// initial instructions provided covered by Coursera and outside JS resources like https://overapi.com/javascript and https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting.


var randomNumber = Number;
var attemptS = 0;


function ranGen(){
    for (let i = 1; i <= 30; i++) {
        attemptS++


        randomNumber =Math.floor(Math.random() * 10) + 1
        console.log(randomNumber);
        if (randomNumber <7 && randomNumber >7) {
            console.log(`Value: ${randomNumber}`);
            attemptS = 0;
        } else if (randomNumber === 7){
            console.log(`Got it! There was a total of ${attemptS} attempts before the solution got 7`);
             attemptS = 0;
        }
    }
}
ranGen();


// ---- WHAT I WAS THINKING ----
//
// As for avoiding hardcoded results, I think this was a good step
// in training my brain to think smarter, not harder, when it comes to code.
//
// Looking at the prior exercises, I was able to pull bits and pieces
// from what I had already built. This exercise is essentially another
// counter-based problem similar to Exercise 2A. I looked at how
//The counter variable worked there and applied the same idea here.
//
// That meant setting two variables, one to hold the random number
// and one to track the number of attempts. Since Math.random() generates
// a number I set randomNumber to hold that value and used attemptS
// as an incrementing counter to track how many times the random
// number line was executed.
//
// I used a for loop first because it was what I was most comfortable with
// with after just finishing 2A and 2B. It felt like the natural choice
// at the time.


// ---- WHAT WENT WRONG ----
//
// After reviewing my code, a few issues came up:
//
// 1. The for loop ran a fixed number of 30 times, regardless of whether 7 was found.
//    The instructions specifically say "while loop," and for good reason.
//    What if 7 never appears in 30 tries?
//    What if it appears on try 2 but the loop keeps running anyway?
//    The while loop solves both problems. It runs until 7 is found
//    then stops immediately, no fixed range needed.
//    Once again, this comes back to SCALABILITY.
//
// 2. I wrote an impossible condition:
//    if (randomNumber < 7 && randomNumber > 7)
//    No number can be less than AND greater than 7 at the same time.
//    That block never ran once.
//
// 3. I set randomNumber = Number — a data type, not a value.
//    The goal of this code is for randomNumber to hold a real number
//    so the while condition can actually evaluate it.
//    Setting it to the Number data type caused issues with strict
//    equality checks because of a data type mismatch.
//    Setting it to 0 fixed that immediately.


// ---- THE FIX ----
//
// While loop instead of for loop.
// randomNumber starts at 0 — a real value not a data type.
// The while condition checks: as long as randomNumber is NOT 7, keep going.
// The moment 7 is generated, the condition becomes false, and the loop stops.
// The final result prints AFTER the loop, not inside it.


// ---- IMPROVED SOLUTION ----
var randomNumber = 0;
var attemptS = 0;


function ranGen(){
    while (randomNumber !==7) {
        attemptS++


        randomNumber =Math.floor(Math.random() * 10) + 1
        console.log(randomNumber);
    } if (randomNumber == 7) {
        console.log(`Got it! There was a total of ${attemptS} attempts before the solution got 7`);
        attemptS = 0;
    }
}
ranGen();



