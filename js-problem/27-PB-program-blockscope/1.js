//TODO 1. Updater
// Depending on the value of a variable (determiner), assign a value to x.
// If determiner is less than 0, x's value should be "Less than 0"
// If determiner is greater or equal 0, x's value should "Greater or equal to 0".

let determiner = Math.floor((Math.random() - 0.5) * 200); // generates a determiner between -100 and 100 (excluding 100)
let x;

if (determiner < 0) {
	x = "Less than 0";
} else {
	x = "Greater or equal to 0";
}
console.log(`determiner: ${determiner}, x: ${x}`);

//TODO 2. New Variables
// Depending on the value of the determiner, assign a value to another variable (updater) and create another variable.
let updater;

// If determiner is greater of equal to 0, updater's value should be "Greater or equal to 0" and create another variable called message, assign a value of "Positive Integer" and print message.
// If determiner is less than 0, updater's value should be "Less than 0".

if (determiner >= 0) {
	updater = "Greater or equal to 0";
	let message = "Positive Integer";
	console.log(message);
} else {
	updater = "Less than 0";
}

console.log(`updater: ${updater}`);

// Question: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.
//* let is a block-scope variable, which means that, once declared within the if statement block, it would be unavailable from outside of it

//TODO 3. Ternary v.s. If statement
// When do you use a ternary v.s. an if statement? Give an example.

//* a ternary operator is used inside a logical/math expression, while an if statement is, well, a statement. expressions are evaluated (return a value which can be used to assign it to a variable), statements contain blocks of code that is executed.
let a = determiner > 0 ? "a is greater!" : "a is less or equal!";
console.log(a); // print the value of a after having evaluated the expression on the right

let b;
// the code below sets the value of b
if (determiner > 0) {
	b = "b is greater!"; // sets b
	console.log(b); // prints the value of b after having (1) evaluated the condition and (2) executed the code inside the block
} else {
	b = "b is less or equal!";
	console.log(b);
}