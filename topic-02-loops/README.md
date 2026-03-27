# Topic 02 — Conditionals and Loops

## What This Folder Covers

Four exercises covering the core loop and conditional structures in JavaScript
FizzBuzz, nested loops, while loops, and switch statements. Each file includes
my first attempt, what went wrong, what I learned, and the improved solution.
The documentation in each file is written in my own words because I believe
understanding why something works matters more than just getting it to run.

---

## Exercises

**Exercise 2A — FizzBuzz**
The classic interview problem. Built it twice, once with the modulo operator
and once without using a counter-based approach. The no-modulo version was the
real challenge and taught me how to think about divisibility differently.
Also learned that the order of conditions matters, FizzBuzz must be checked
before Fizz or Buzz or the logic breaks.

**Exercise 2B — Nested Loop Pattern**
Built a cascading number pattern using nested loops. My first attempt used five
separate hardcoded loops, one per row. It worked, but it was not scalable.
Learned the difference between code that works and code that scales. The improved
version uses two loops where the inner loop dynamically follows the outer loop.
That one change made the solution work for any number of rows, not just five.

**Exercise 2C — While Loop With a Flag**
Generated random numbers until hitting 7 and counted the attempts. Started with
a for loop wrong choice. Learned that a for loop runs a fixed number of times
while a while loop runs based on a condition. When you do not know how many
iterations something will take, the while loop is always the right tool.
Also learned that the print statement belongs after the loop, not inside it.

**Exercise 2D — Switch Statement**
Classified days of the week as Weekday, Weekend, or Invalid. First attempt used
arrays and repeated console.log statements five times. Learned about DRY —
Don't Repeat Yourself and how switch cases can be stacked without a break to
share one return statement across multiple cases. Also learned the difference
between return and console.log return hands the value back, console.log
displays it on the outside.

---

## How This Changed My Thinking

Before these exercises I wrote code that worked for the specific problem in front
of me. After these exercises I started asking a different question  will this
still work if the requirements change? That shift from thinking about the answer
to thinking about the approach is the biggest thing I am taking away from Topic 2.

I also developed a process I now use on every exercise:

1. Read the whole problem once before writing anything
2. Define what the output should look like
3. Identify the smallest possible first step
4. Build one layer at a time and test before moving on
5. Review for scalability and clean code principles after it works

---

## What I Will Remember From Now On

- A for loop runs a fixed number of times, a while loop runs until a condition is met
- The order of conditions in if/else and switch blocks always matters
- Hardcoded solutions work for one case, scalable solutions work for any case
- DRY: Don't Repeat Yourself. If you are copying and pasting logic, something is wrong
- return sends a value back, console.log displays it, they are not the same thing
- Stacked switch cases without a break share one result. Use this to group related conditions
- Always test edge cases, what happens at 0, at the boundary, with invalid input
- Sound out your conditions like a sentence. If it does not read naturally, it probably has a bug

---

*Part of my JS-Daily-Practice repository, one commit per day documenting
the learning process, mistakes, and growth as I work toward full-stack development.*
