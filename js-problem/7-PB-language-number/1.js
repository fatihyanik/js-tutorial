// 1. Concatenation. 
// * Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
let introSentence = "hello, my name is Fran and I am";
let age = 25;
let fullSentence = introSentence + " " + age;
console.log(fullSentence);

// * In this case, what is the `+` operator doing? Comment your answer in the js file.
// The '+' operator concatenates the strings. When concatenated with strings, numbers are converted into strings as well.

// 2. Converting 
// * Create a variable with the value of "1005". Convert it to a number.
let number1Str = "1005";
let number1Num = Number(number1Str);
console.log(number1Num, typeof number1Num);
// * Create a variable with the value of "10.05". Convert it to a number.
let number2Str = "10.05";
let number2Num = Number(number2Str);
console.log(number2Num, typeof number2Num);

// 3. Remain There
// Check if the following numbers are even numbers. Use a ternary and if the number is even print `30 is even`, else print that it is odd.
let num1 = 30;
console.log(num1 % 2 === 0 ? num1 + " is even" : num1 + " is odd");

let num2 = 939;
console.log(num2 % 2 === 0 ? num2 + " is even" : num2 + " is odd");

// *** !!!! irregular case !!!! ***
let num3 = 40.9;
// by definition, only integers can be even or odd. so, the ternary operator from the previous two examples will not apply here.
// we have a few options:
// --> turn 40.9 into an integer with parseInt() or Math.round()
console.log(parseInt(num3) % 2 === 0 ? parseInt(num3) + " is even" : parseInt(num3) + " is odd");
// --> add a condition that checks whether our number is an integer:
console.log(Number.isInteger(num3) ? (num3 % 2 === 0 ? num3 + " is even" : num3 + " is odd") : num3 + " is not an integer");