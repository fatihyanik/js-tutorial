// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let integer1 = Math.floor(Math.random() * 150);
console.log("integer1:", integer1);
let integer2 = Math.floor(Math.random() * 150);
console.log("integer2:", integer2);

let withinTheRange = (integer1 >= 50 && integer1 <= 99) || (integer2 >= 50 && integer2 <= 99);

if (withinTheRange) {
	console.log("one of the integers (or both of them) are within the range:", withinTheRange);
}

// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
let integer3 = Math.floor(Math.random() * 150);
console.log("integer3:", integer3);

let oneOrMoreWithinTheRange = (integer1 >= 50 && integer1 <= 99) || (integer2 >= 50 && integer2 <= 99) || (integer2 >= 50 && integer2 <= 99);

if (oneOrMoreWithinTheRange) {
	console.log("one or more integers are within the range:", oneOrMoreWithinTheRange);
}

// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.
let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);
let c = Math.floor(Math.random() * 10);
console.log(`a is ${a}, b is ${b}, c is ${c}`);

if (a > b && a > c) {
	console.log("a is the largest:", a);
} else if (b > c && b > a) {
	console.log("b is the largest:", b);
} else if (c > a && c > b) {
	console.log("c is the largest:", c);
} else {
	console.log("some values are equal");
}

// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
const stringsArr = ["Ladies", "Py", "Language"];
const stringsArrLength = stringsArr.length;

let givenString = stringsArr[Math.floor(Math.random() * stringsArrLength)];

if (givenString.startsWith("Py")) {
	console.log(`printing the original string: ${givenString}`);
} else {
	let newString = "Py".concat(givenString);
	console.log(`given string: ${givenString}, new string: ${newString}`);
}

// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
let integer4 = Math.floor(Math.random() * 50);
let integer5 = Math.floor(Math.random() * 50);
let sum = integer4 + integer5;

console.log(`integer4 is ${integer4}, integer5 is ${integer5}, their sum is ${sum}`);

if (sum >= 50 && sum <= 80) {
	console.log(65, "— because the sum is between 50 and 80");
} else {
	console.log(80, "— because the sum is outside of the 50-80 range");
}

// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
let difference = Math.abs(integer4 - integer5);
console.log(`integer4 is ${integer4}, integer5 is ${integer5}, their difference is ${difference}`);

if (sum === 8 || difference === 8) {
	console.log(`sum or difference is 8!`);
}

// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
if (integer4 === 15 || integer5 === 15 || sum === 15) {
	console.log(`one of the two integers and/or their sum is 15!`);
}

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
let multipleOfSevenEleven = integer4 % 7 === 0 || integer5 % 7 === 0 || integer4 % 11 === 0 || integer5 % 11 === 0;

if (multipleOfSevenEleven) {
	console.log(`one of two integers is a multiple of 7 or 11: ${multipleOfSevenEleven}`);
}

// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
if (integer4 === integer5) {
	console.log(`triple sum: ${sum * 3}!`);
}

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
let specifiedNumber = Math.floor(Math.random() * 100);

let differenceAgain = Math.abs(specifiedNumber - 19);

if (specifiedNumber > 19) {
	console.log(`as the specified number (${specifiedNumber}) is greater than 19, I've tripled the difference between it and 19: ${differenceAgain * 3}`);
}

// 11. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc.