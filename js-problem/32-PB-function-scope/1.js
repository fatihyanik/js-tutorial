//* 1. Print Exponential Values
//? Write a function that accepts two numbers and validate that they are numbers.
//? After that, the function should print y exponential values starting from x.

function printExponentialValues(start, count) {
	if (typeof start !== "number" || typeof count !== "number") {
		return console.log("The function should accept only numbers!");
	}
	for (let i = 1; i <= count; i++) {
		console.log(start ** i);
	}
}
printExponentialValues(2, 8); // 2 4 8 16 32 64 128 256
printExponentialValues("2", 8); // The function should accept only numbers!

//1. soru Kisa cevap
function printExponentialValues2(base, count) {
  for (let i = 1; i < count; i++) {
    console.log(base**i);
  }
}

printExponentialValues2(3, 5);
printExponentialValues2(2, 8);


//* 2. Fruits
//? Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".

let myFavFruit = "banana";

function printFavoriteFruit() {
	myFavFruit = "granatapfel";
	console.log(`My favorite fruit is ${myFavFruit}.`);
}

printFavoriteFruit(); // My favorite fruit is granatapfel.

// #### 3. Multiply a Number by Itself
// * Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`.
// * Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.

// We obtain ReferenceError: result is not defined because the variable is inside the scope function and out of the scope is not defined.

function exponent(num1, num2) {
  let result = "";
  for (let i = 1; i <= num2; i++) {
    result = num1 ** i;
  }
  return result;
}
console.log(exponent(3, 5));

