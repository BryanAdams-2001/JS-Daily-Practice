// Password Validator — practicing defensive programming and loops
// came back and cleaned this up but leaving my original mistakes
// in the comments so i can see how far ive come

// ============================================================
// what i thought this needed to do before writing anything
// ============================================================
//
// - check if the input is actually a string first
// - check the length is long enough
// - check if theres a number in there somewhere
// - i added uppercase on my own because it felt more real
// - log the right message depending on what fails


// ============================================================
// first attempt — had a few problems
// ============================================================
//
// original mistake 1 — used var instead of let everywhere
// didnt think it mattered at the time but learned var is
// function scoped and can cause weird bugs in bigger codebases
//
// original mistake 2 — wrote hasNumber == false in the condition
// instead of === false or just !hasNumber
// loose equality works here but its sloppy and could bite me later
//
// original mistake 3 — forgot that isNaN() on the uppercase check
// was necessary. without it numbers were passing as uppercase because
// "5".toUpperCase() === "5" is true. a digit has no case so it
// always matches itself. took me a while to figure out why
// "alllowercase1" was passing when it shouldnt


function validatePassword(password) {

    // defensive check first — learned this the hard way
    // originally didnt have this and the function just crashed
    // when someone passed in a number
    if (typeof password !== 'string') {
        console.log('Invalid input')
        return
    }

    // tracking variables — start false, flip to true if found
    let hasNumber = false
    let hasUpper = false

    for (let i = 0; i < password.length; i++) {

        // !isNaN confused me at first — double negative
        // isNaN means "is Not a Number" so !isNaN means "IS a number"
        if (!isNaN(password[i])) {
            hasNumber = true
        }

        // this one tripped me up — had to add isNaN() here too
        // otherwise digits were counting as uppercase letters
        if (password[i] === password[i].toUpperCase() && isNaN(password[i])) {
            hasUpper = true
        }
    }

    // conditions in priority order — length check has to come first
    // originally had these in the wrong order and got weird outputs
    if (password.length < 10) {
        console.log("Too short — minimum 10 characters")
    } else if (!hasNumber) {
        console.log("Must contain at least one number")
    } else if (!hasUpper) {
        console.log("Must contain at least one uppercase letter")
    } else {
        console.log("Strong password ✅")
    }
}


// ============================================================
// test calls
// ============================================================

validatePassword("hi1")             // too short
validatePassword("password")        // no number
validatePassword("alllowercase1")   // no uppercase — this one
                                    // caught my isNaN bug
validatePassword("Secure123pass")   // strong password
validatePassword(12345)             // not a string


// ============================================================
// things i want to come back and fix
// ============================================================
//
// TODO: extract the loop logic into helper functions
//   containsNumber(str)
//   containsUppercase(str)
// right now everything is crammed into one function
// which makes it harder to test individual pieces
//
// TODO: write proper Jest tests for each condition
// now that i know TDD i would have caught the isNaN bug
// immediately with a failing test instead of manually
// checking outputs until something looked wrong
//
// TODO: the loop checks both conditions every iteration
// could add an early break once both are true
// no point checking the rest of the string if we already
// know it has a number and an uppercase