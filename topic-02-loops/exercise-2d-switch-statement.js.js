// ============================================================
// EXERCISE 2D — Switch Statement
// ============================================================
// Write a function called getDayType(day)
// It accepts a string like "Monday" or "Saturday."
// Returns "Weekday" for Mon-Fri
// Returns "Weekend" for Sat-Sun
// Returns "Invalid" for anything else
// Use a switch statement
// ============================================================




// ============================================================
// WHAT I ALREADY KNEW GOING IN
// ============================================================
//
// How to write a function with parameters
// How to use if/else conditions
// Basic understanding of switch statements from Coursera
// This one looked simpler than 2B and 2C at first glance




// ============================================================
// MY FIRST ATTEMPT
// ============================================================
//
// My first instinct was to use arrays to classify the days
// thinking the switch could compare against the whole array


const weekday = ['Monday',' Tuesday',' Wednesday', 'Thursday',' Friday']
const weekend = ['Sunday', 'Saturday']


function getDayType(weekday, weekend) {
    switch(weekday) {
        case "Monday":
            console.log("It's a Weekday!")
            break
        case "Tuesday":
            console.log("It's a Weekday!")
            break
        case "Wednesday":
            console.log("It's a Weekday!")
            break
        case "Thursday":
            console.log("It's a Weekday!")
            break
        case "Friday":
            console.log("It's a Weekday!")
            break
        case "Saturday":
            console.log("Its the Weekend!")
            break
        case "Sunday":
            console.log("Its the Weekend!")
            break
        default:
            console.log("Not a valid day of the week!")
    }
}


getDayType("Monday")




// ============================================================
// WHAT WENT WRONG
// ============================================================
//
// PROBLEM 1 — The arrays served no real purpose
// My original hope was that the switch would look at the arrays
// and match any value stored inside them. That is not how switch
// works. Switch compares one value against specific cases 
// it cannot compare against an entire array.
//
// PROBLEM 2 — Too many repeated lines violate DRY principles
// DRY stands for "Don't Repeat Yourself,"  something Coursera
// emphasizes throughout the course. I was copy-pasting the same
// console.log five times for weekdays and twice for weekend days.
// That is not clean or scalable code.
//
// PROBLEM 3 — console.log inside the function instead of return
// The instructions say the function should RETURN the value.
// console.log just prints; it does not return anything.
// To actually use the result outside the function, you need to return.
//
// PROBLEM 4 — Two parameters when only one was needed
// getDayType(weekday, weekend) takes two parameters but the
// function only needs to know what day has passed in.
// One parameter, day, is all it needs.




// ============================================================
// WHAT I LEARNED
// ============================================================
//
// Switch cases can be stacked without a break between them.
// When cases have no break, they fall through to the next one
// until they hit a return or break. This means Monday through
// Friday can all share one return statement instead of five.
//
// This is the feature that made the arrays completely unnecessary.
// The switch handles the grouping on its own, no arrays needed.
//
// The difference between return and console.log finally clicked here.
// return hands the value back out of the function.
// console.log on the outside is what displays it.
// The kitchen hands you the plate. You look at the plate.




// ============================================================
// IMPROVED SOLUTION
// ============================================================


function getDayType(day) {
    switch(day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            return "Weekday"
        case "Saturday":
        case "Sunday":
            return "Weekend"
        default:
            return "Invalid"
    }
}


console.log(getDayType("Monday"))     // Weekday
console.log(getDayType("Saturday"))   // Weekend
console.log(getDayType("Wednesday"))  // Weekday
console.log(getDayType("Sunday"))     // Weekend
console.log(getDayType("Funday"))     // Invalid




// ============================================================
// KEY TAKEAWAYS
// ============================================================
//
// 1. Switch cases can stack  group shared results without
//    repeating yourself
//
// 2. return sends a value back, console.log displays it outside
//
// 3. Arrays are not always the answer; sometimes the language
//    already gives you the tool you need
//
// 4. DRY — Don't Repeat Yourself, fewer lines, same result,
//    cleaner code

