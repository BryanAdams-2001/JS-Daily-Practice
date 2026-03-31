// ============================================================
// Bank Account System — OOP Practice
// Concepts: classes, constructors, methods, defensive coding,
//           for...of loops, this keyword, array of objects
// ============================================================
// Reinforcing what Coursera taught on OOP — classes, inheritance
// patterns, and the this keyword — but this time building
// something real from scratch instead of just following along with a tutorial.
// ============================================================
// ============================================================
// RED — Task by Task Breakdown
// ============================================================

// TASK 1 — Class skeleton
// Need a constructor with three properties.
// owner gets passed in, balance starts at 0, transaction starts empty array.
// Use this keyword to assign everything.
// Unsure at first whether balance and transaction needed default values
// in the constructor params or just in the body — turns out params work.

// TASK 2 — deposit()
// Defensive check first — must be a number and greater than 0.
// If invalid log the message and return early.
// If valid add to balance and push a transaction object.
// The object needs type, amount, and the updated balance.

// TASK 3 — withdraw()
// Same defensive check as deposit.
// Extra check — if amount is more than balance log insufficient funds.
// Struggled here — wrote amount -= this.balance at first.
// The math was completely backwards. Simple flip fixed it.
// this.balance -= amount is what actually reduces the balance.

// TASK 4 — getStatement()
// Loop through transaction array with for...of.
// Each item is an object so I access properties with dot notation.
// Check the type on each one and format the output accordingly.
// Template literals made the formatting clean.

// TASK 5 — transfer()
// This was the trap. My first instinct was to write all the
// validation again inside this method. Then I realized 
// withdraw() and deposit() already handle all of that.
// Two lines. That was the whole method.
// When it clicked it felt obvious but getting there took a minute.

// TASK 6 — Full run
// Built both accounts and ran every call from the expected output.
// Compared line by line.


// ============================================================
// IMPLEMENTATION
// ============================================================

class BankAccount {
    constructor(owner = "name", balance = 0, transaction = []) {
        this.owner = owner
        this.balance = balance
        this.transaction = transaction
    }

    deposit(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            console.log("Invalid deposit")
            return
        }
        this.balance += amount
        this.transaction.push({ type: "deposit", amount, balance: this.balance })
    }

    withdraw(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            console.log("Invalid withdrawal")
            return
        }
        if (amount > this.balance) {
            console.log("Insufficient Funds")
            return
        }
        this.balance -= amount  // had this backwards — amount -= this.balance originally
        this.transaction.push({ type: "withdrawal", amount, balance: this.balance })
    }

    getStatement() {
        for (let transaction of this.transaction) {
            if (transaction.type === "deposit") {
                console.log(`deposit: +$${transaction.amount} | Balance: $${transaction.balance}`)
            } else if (transaction.type === "withdrawal") {
                console.log(`withdrawal: -$${transaction.amount} | Balance: $${transaction.balance}`)
            }
        }
    }

    transfer(amount, targetAccount) {
        this.withdraw(amount)
        targetAccount.deposit(amount)
    }
}


// ============================================================
// TEST CALLS
// ============================================================

const account1 = new BankAccount("Bryan")
const account2 = new BankAccount("Alex")

account1.deposit(500)
account1.deposit(-50)         // Invalid deposit
account1.withdraw(200)
account1.withdraw(1000)       // Insufficient Funds
account1.transfer(100, account2)
account1.getStatement()
account2.getStatement()

// account1 expected:
// deposit: +$500 | Balance: $500
// withdrawal: -$200 | Balance: $300
// withdrawal: -$100 | Balance: $200

// account2 expected:
// deposit: +$100 | Balance: $100

// ============================================================
// WHAT I WOULD REFACTOR (will revise after some time)
// ============================================================
//
// The else if in deposit() is redundant — if the first block
// returns, everything after is already valid. No else needed.
//
// Would extract validation into a private helper method
// so deposit and withdraw are not repeating the same check.
//
// Would write Jest tests per method next time — the withdraw
// math bug would have been caught immediately by a failing test
// instead of spotted during manual output review.

// ============================================================
// Additions to implement (will revise and add more after some time)
// ============================================================

// Add interest calculation — applyInterest(rate) multiplies balance by the rate and records it as a transaction

// Add transaction timestamps using new Date().toISOString() pushed into each transaction object

// Add a running transaction ID to each push so every transaction is uniquely numbered

// Add a depositLimit and withdrawLimit property — reject transactions above a set threshold

// Add a transactionHistory(type) method that filters and returns only deposits or only withdrawals

// Add a getBalance() method that returns a formatted string like "Current balance: $300" instead of accessing the property directly

// Add an accountNumber property generated automatically using Math.random() when the account is created

// Add a closeAccount() method that sets balance to 0, clears transactions, and logs "Account closed"

// ============================================================
// BIGGEST LESSON
// ============================================================
//
// Throwing myself in the deep end with syntax I learned in the
// certificate but never applied from scratch. That is the point
// of these benchmarks — get reps until it becomes muscle memory.
//
// transfer() is two lines because withdraw() and deposit()
// already do the work. The instinct to rewrite logic that
// already exists is the wrong instinct. Trust what you built.
// Reuse it.

