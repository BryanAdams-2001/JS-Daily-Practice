<!-- // ============================================================
// REFACTOR NOTES — What I added and why
// ============================================================

// This commit adds two things:
// 1. applyInterest(rate) method
// 2. Timestamps on every transaction
// 3. getStatement() updated to show interest

// ============================================================
// applyInterest(rate)
// ============================================================
//
// Calculates interest on current balance using:
// balance * rate / 100
//
// Same defensive check as deposit and withdraw.
// Invalid rate logs "Invalid rate" and returns early.
//
// Pushes an interest object to transactions same as the others.
// Used toFixed(2) on the log so it always shows $10.00 not $10.
// Did not round the stored value — rounding stored data
// causes compounding errors over time.

// ============================================================
// Timestamps
// ============================================================
//
// Added createdAt: new Date().toISOString() to every push.
// Captures the exact moment each transaction happens.
// Looks like: "2026-04-01T21:34:07.123Z"
//
// Not displayed in getStatement yet — storing it now
// so future refactors can filter by date without
// rebuilding the data structure from scratch.

// ============================================================
// getStatement() update
// ============================================================
//
// Added a third condition for interest transactions.
// Before this they were being silently skipped in the loop.
// Small bug — would have been caught immediately with Jest tests.
// Test coverage is next on the list.

// ============================================================
// WHERE I AM
// ============================================================
//
// Day 5 of daily commits. Building a bank account system
// from scratch using OOP from the Meta Frontend Developer
// Certificate — classes, constructors, this keyword,
// defensive programming, array methods.
//
// One layer per commit. Document the process. Come back
// and make it better.
//
// Next up:
// — Shared validation helper method
// — Jest test coverage per method
// — transactionHistory(type) filter
// — Timestamps displayed in getStatement -->