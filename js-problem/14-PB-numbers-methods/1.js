// 1. NaN

// Question: Comment your answer in your js file: What does NaN stand for?
console.log("NaN stands for Not-A-Number");

// Check if "hello" * 1 is NaN.
console.log('isNaN("hello" * 1):', isNaN("hello" * 1)); // true
console.log('Number.isNaN("hello" * 1):', Number.isNaN("hello" * 1)); // true

// Check if 100em is NaN.
console.log('Number.isNaN("100em"):', Number.isNaN("100em")); // false ==> only values of the type number, that are also NaN, return true
console.log('isNaN("100em"):', isNaN("100em")); // true ==> 1) Number("100em") evaluates to NaN 2) NaN !== NaN (true, the value that is returned)

// What is the type of NaN?
console.log('type of NaN:', typeof NaN); // number

// 2. Rounding

console.log('0.1 * 0.2:', 0.1 * 0.2); // 0.020000000000000004
// Use a method to make sure that only 0.02 is printed.
console.log('fixed (0.1 * 0.2):', Number((0.1 * 0.2).toFixed(2))); // 0.02

// 3. Fix number

// 12.26000000000033 Use a method to make sure that only 12.26 is printed.
let number1 = 12.26000000000033;
console.log('fixed 12.26000000000033:', Number(number1.toFixed(2))); // 12.26

// 0.63783990 Use a method to make sure that only 0.6 is printed.
let number2 = 0.63783990;
console.log('fixed 0.63783990:', Number(number2.toFixed(1))); // 0.6

// 1.842220 Use a method to make sure that only 1.8422 is printed.
let number3 = 1.842220;
console.log('fixed 1.842220:', Number(number3.toFixed(4))); // 1.8422