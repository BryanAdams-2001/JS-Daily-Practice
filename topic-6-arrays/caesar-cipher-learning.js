// ============================================================
// EXERCISE 5 — Caesar Cipher
// ============================================================
// RED: Before writing code, I expected:
// caesarCipher("hello world", 3) -> "khoor zruog"
// At first when I ran the empty function, it returned undefined,
// which makes sense because nothing is being returned yet.

// RED: My initial misunderstanding:
// I thought non-letters might be removed, but after checking expected output,
// punctuation and spaces should actually stay the same.

// RED: Also originally thought about using an object to store results,
// but realized the output is a string, so I need to build a string instead.

function caesarCipher(str, shift) {
    // RED: Start with an empty string to build the result step by step
    let result = "";

    // RED: Normalize shift so large numbers or negatives don’t break things
    // (this part wasn’t obvious at first, but helps avoid weird edge cases)
    shift = shift % 26;

    // RED: Loop through each character — I went with for...of for readability
    for (const char of str) {

        // RED: Convert character to ASCII code so I can compare ranges
        const code = char.charCodeAt(0);

        // RED: Check if lowercase letter (a-z)
        // I originally forgot to include the equals and missed 'a' and 'z'
        if (code >= 97 && code <= 122) {

            // RED: This part took the most time to understand:
            // - subtract 97 to normalize to 0–25 range
            // - add shift
            // - add 26 before modulo to prevent negative issues
            // - % 26 to wrap around alphabet
            // - add 97 back to return to ASCII
            const shifted = ((code - 97 + shift + 26) % 26) + 97;

            // RED: Convert back to character and append
            result += String.fromCharCode(shifted);

        // RED: Check if uppercase letter (A-Z)
        // I initially messed this up by using 122 instead of 90
        } else if (code >= 65 && code <= 90) {

            const shifted = ((code - 65 + shift + 26) % 26) + 65;

            result += String.fromCharCode(shifted);

        // RED: If not a letter, just keep it as-is
        // This includes spaces, commas, punctuation, etc.
        } else {
            result += char;
        }
    }

    // RED: Return final built string
    return result;
}

// TESTING — verifying behavior matches expectations

console.log(caesarCipher("hello world", 3));
// expected: "khoor zruog"

console.log(caesarCipher("xyz", 2));
// expected: "zab"

console.log(caesarCipher("Hello, World!", 13));
// expected: "Uryyb, Jbeyq!"

console.log(caesarCipher("abc", -1));
// expected: "zab"


//WHAT I LEARNED FROM THIS EXERCISE

//Going into this, I honestly didn’t even know what ASCII really was or how it worked.
//I’ve seen charCodeAt() before, but never understood why you’d actually use it.

//This is the first time I realized that letters are just numbers underneath.
//Once I saw that "a" = 97 and "z" = 122, shifting letters started to make more sense.

//I struggled at first with checking ranges — I forgot to include the endpoints
//(>= and <=), which caused bugs that weren’t obvious right away.

//I also initially tried to compare the character directly instead of converting it
//to a number, which didn’t work. That was a key “aha” moment.

//The hardest part was understanding the wrap-around logic using modulo.
//Thinking of the alphabet as a loop (0–25) instead of ASCII values made it click.

//I learned that sometimes you have to temporarily “normalize” data (subtract 97 or 65),
//do your math, then convert it back.

//Another small but important lesson: strings are built step-by-step.
//I originally thought about using an object, but that didn’t match the output I needed.

//Overall, this exercise forced me to slow down and really think through each step
//instead of guessing — especially with conditionals and edge cases.

//This is probably the first time I felt like I was actually *understanding*
//how characters and strings work under the hood, not just using them.
