// ============================================================
// LAB — Little Lemon Receipt Maker
// Functions: getPrices() and getDiscount()
// First time applying Red Green Refactor in a real lab setting
// ============================================================
// ============================================================
// DATASET
// ============================================================
const dishData = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 },
]
const tax = 1.20
// ============================================================
// FUNCTION 1 — getPrices()
// ============================================================
// ---- RED — What should this function do? ----
//
// Accept one parameter: taxBoolean
// Loop over every dish in dishData using a for loop
// Declare finalPrice inside the loop without assigning a value
// If taxBoolean is true → multiply dish price by tax and store in finalPrice
// If taxBoolean is false → store raw dish price in finalPrice
// If taxBoolean is anything else → log error message and exit the function
// After the if/else block, still inside the loop, log the dish name and finalPrice
//
// Expected outputs:
// getPrices(true)  → each dish price multiplied by 1.20
// getPrices(false) → each dish price as-is
// getPrices("hi")  → "You need to pass a boolean to the getPrices call!"

// ---- GREEN — Minimum code to make it work ----
function getPrices(taxBoolean) {
    for (let i = 0; i < dishData.length; i++) {
        let finalPrice
        if (taxBoolean === true) {
            finalPrice = dishData[i].price * tax
        } else if (taxBoolean === false) {
            finalPrice = dishData[i].price
        } else {
            console.log("You need to pass a boolean to the getPrices call!")
            return
        }
        console.log(`Dish: ${dishData[i].name} Price: $${finalPrice}`)
    }
}
// ---- WHAT WENT WRONG IN MY FIRST ATTEMPT ----
//
// BUG 1 — Used let inside the if block, which created a brand new variable
//   let finalPrice = dishData[i].price * tax  ← new variable, original untouched
//   finalPrice = dishData[i].price * tax      ← correct, assigns to existing variable
//   Lesson: let DECLARES. No keyword ASSIGNS. Never use let twice for the same variable.
//
// BUG 2 — Assignment was backwards in the else if block
//   dishData[i].price = finalPrice  ← wrong, overwrites the data
//   finalPrice = dishData[i].price  ← correct, stores the value
//   Lesson: left side receives, right side provides. Always.
//
// BUG 3 — Used dishData.name and dishData.price instead of dishData[i].name
//   dishData is the whole array, it has no .name or .price property
//   dishData[i] is the specific object at position i  that is where .name lives
//   Lesson: inside a loop, always use [i] to access a specific item
//
// BUG 4 — console.log was placed inside the else block after return
//   Anything after return never runs  the function, already exited
//   The console.log needed to live AFTER the if/else block, still inside the loop
//   Lesson: code after an if/else block keeps running unless it is stopped by a return

// ============================================================
// FUNCTION 2 — getDiscount()
// ============================================================
// ---- RED — What should this function do? ----
//
// Accept two parameters: taxBoolean and guests
// First line must call getPrices() passing taxBoolean as the argument
// Use defensive coding to validate guests before any discount logic
//   guests must be typeof number
//   guests must be greater than 0
//   guests must be less than 30
//   all three must be true simultaneously  use &&
// If valid:
//   declare discount = 0
//   if guests < 5 → discount = 5
//   else → discount = 10
//   log "Discount is: $" + discount
// If invalid:
//   log "The second argument must be a number between 0 and 30."
//
// Expected outputs:
// getDiscount(true, 2)   → prices with tax + "Discount is: $5"
// getDiscount(false, 10) → prices without tax + "Discount is: $10"
// getDiscount(true, 50)  → "The second argument must be a number between 0 and 30."

// ---- GREEN — Minimum code to make it work ----
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean)
    if (typeof guests === 'number' && guests > 0 && guests < 30) {
        let discount = 0
        if (guests < 5) {
            discount = 5
        } else {
            discount = 10
        }
        console.log("Discount is: $" + discount)
    } else {
        console.log("The second argument must be a number between 0 and 30")
    }
}

// ---- WHAT WENT WRONG IN MY FIRST ATTEMPT ----
//
// BUG 1 — Used guests === Number instead of typeof guests === 'number'
//   Number is a data type, not a value  that check always fails
//   typeof returns a string like 'number'  that is what you compare against
//
// BUG 2 — Used || instead of &&
//   || means OR, only one condition needs to be true
//   50 > 0 is true so it would pass with || even though 50 >= 30
//   && means AND  ALL conditions must be true simultaneously
//
// BUG 3 — Nested the discount logic outside the outer if block
//   The discount if/else needs to live INSIDE the valid guests block
//   Otherwise, it runs even when guests are invalid
// ---- REFACTOR — What was cleaned up ----
//
// Removed redundant else if (guests >= 5), replaced with plain else
// If the number of guests is not less than 5, it is automatically 5 or greater
// Removed unnecessary semicolons for consistency
// Confirmed all tests still passed after cleanup
// ============================================================
// TEST CALLS
// ============================================================
getDiscount(true, 2)
getDiscount(false, 10)
// ============================================================
// FIRST TIME USING RED GREEN REFACTOR — HONEST REFLECTION
// ============================================================
//
// Going into this lab, I had just learned about TDD and the
// red green refactor cycle for the first time. I had never
// applied it to real code before, so this was my first real attempt.
//
// Writing the RED comments before touching the code felt slow at first.
// My instinct was to just start coding and figure it out as I went.
// But the moment I started writing out what each function was supposed to be
// to do in plain language, I started catching problems before they happened.
// I noticed the console.log placement issue in my RED comments before
// I even wrote a single line of real code.
//
// The GREEN phase is where I learned the most. Writing minimum code
//Passing is harder than it sounds. I kept wanting to add more than
// was needed. The discipline of stopping once it works and not
//Overbuilding is something I have to keep training for.
//
// The bugs I ran into were not random; they were all the same
// category of mistake: not thinking carefully about what each
// operator actually does. let vs no keyword. === vs typeof.
// || vs &&. Left side vs right side of assignment.
// These are not syntax issues; they are thinking issues.
// Red Green Refactor forced me to slow down and think first.
//
// Going forward, this is the standard. Write the expectation.
// Build the minimum. Clean it up. Confirm it still works.
// Every single time.
// ============================================================
// KEY TAKEAWAYS
// ============================================================
//
// 1. dishData[i].property  always [i] inside a loop
//    arrays do not have properties, objects inside them do

// 2. left = right  receiver on left, value on right
//    getting this backwards silently corrupts your data
//
// 3. let declares  no keyword assigns
//    using let twice creates two separate variables

// 4. code after if/else keeps running unless it is stopped with a return
//    the else block is not a wall, only return exits

// 5. Defensive coding wraps the logic
//    validate ALL inputs before doing any work

// 6. && requires ALL conditions true  || only needs one
//    validation logic almost always needs &&

// 7. Red Green Refactor is not just a process
//It is a way of thinking before you touch the keyboard

