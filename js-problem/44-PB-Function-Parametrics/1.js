//* A function which returns "Two for me and one for you" when no arguments are passed

const twofer = (strArg) => {
	return (strArg === undefined ? 'Two for me and one for you' : `Two for me and one for ${strArg}`);
}

console.log(twofer("Fran")); // ---> "Two for me and one for Fran"
console.log(twofer()); // ---> "Two for me and one for you"

//* A function that still calculates the power of a number even if the exp argument is not passed to it. The default exp should be set to 2.

const exponent = (num, exp = 2) => {
	return num ** exp;
}

console.log(exponent(3, 3)); // ---> 27
console.log(exponent(3)); // ---> 9

//* A function which returns the total amount of arguments passed to it.

const howManyArgs = (...args) => {
	return [...args].length;
}

console.log(howManyArgs()); // ---> 0
console.log(howManyArgs(1, false, "hello")); // ---> 3
console.log(howManyArgs("better")); // ---> 1

//* A function which accepts any amount of numbers and return the sum of their addition

const sum = (...args) => {
	return [...args].reduce((acc, curr) => acc + curr );
}

console.log(sum(1)); // ---> 1
console.log(sum(1, 15)); // ---> 16
console.log(sum(25, 25, 20)); // ---> 70

//* A function which accepts any amount of numbers and returns their mean average.

const average = (...args) => {
	let sum = [...args].reduce((acc, curr) => acc + curr, 0);
	let average = sum / [...args].length;
	return average;
}

console.log(average(0)); // ---> 0
console.log(average(1, 2)); // ---> 1.5
console.log(average(1, 3, 6, 10)); // ---> 5
console.log(average(12, 14, 16)); // ---> 14

