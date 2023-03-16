// 1. NaN

// Question: What does NaN stand for? 
// "Not a Number"

// * Check if `"hello"` is NaN.
console.log("\"hello\" is NaN:", isNaN("hello")); // true

// * Check if `3` is NaN.
console.log("3 is NaN:", isNaN(3)); // false

// * What is the type of NaN?
console.log("type of NaN:", typeof NaN); // number

// 2. Infinity

// * Divide Infinity by `0`. 
console.log("Infinity / 0:", Infinity / 0); // Infinity

// * Divide Infinity by Infinity.
console.log("Infinity / Infinity", Infinity / Infinity); // NaN (!)

// * Divide `1` by `0`.
console.log("1 / 0", 1 / 0); // Infinity