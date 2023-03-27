//* 1. Multiply
//? Multiply two numbers and return the result using an arrow function.

const multiplier = (num1, num2)=>{
    return num1*num2;
}
console.log(multiplier(345, 7592)); // 2619240

const multiplier1 = (num1, num2) => num1 * num2;
console.log(multiplier1(345, 7592)); // 2619240

//* 2. Double The Odds
//? Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2.

const arrayOfNumbers = [3, 5, 67, 12, 34, 4, 9, 30];

const doubleTheOdds = arr => {
	const oddArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			oddArray.push(arr[i]*2);
		}
	}
	return oddArray;
}

console.log(doubleTheOdds(arrayOfNumbers));


// 2.yol advance array methodlariyla cözümü
const array = [3, 5, 67, 12, 34, 4, 9, 30];
const filteredArray = array.filter(number => number % 2 !== 0);
const multipliedArray = filteredArray.map(number => number * 2);

console.log(multipliedArray); // Output: [6, 10, 134, 18]

//* 3. Loopyloop
//? Given an array of numbers, loop through the array and subract 10 from each element using an arrow function. Return the new array.

// const arrayOfNumbers = [3, 5, 67, 12, 34, 4, 9, 30]; // — from the previous example

const minusTen = arr => {
	const subtractedArray = [];
	for (let i = 0; i < arr.length; i++) {
		subtractedArray.push(arr[i] - 10);
	}
	return subtractedArray;
}

console.log(minusTen(arrayOfNumbers)); // [ -7, -5, 57,  2, 24, -6, -1, 20 ]

// The same with the .map() array method and an arrow function as a callback:

const newMinusTen = arrayOfNumbers.map(el => el - 10);

console.log(newMinusTen); // [ -7, -5, 57,  2, 24, -6, -1, 20 ]

//* 4. Filter
//? Given this array: [3,62,234,7,23,74,23,76,92], use the array filter method and an arrow function to create an array of the numbers greater than `70`. Store the result into a variable.

const arrayToFilter = [3,62,234,7,23,74,23,76,92];

const filterFunction = arr => {
	const filteredArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 70) {
			filteredArray.push(arr[i]);
		}
	}
	return filteredArray;
}

console.log(filterFunction(arrayToFilter)); // [ 234, 74, 76, 92 ]

// OR with .filter():

const filteredWithMethod = arrayToFilter.filter(el => el > 70);

console.log(filteredWithMethod); // [ 234, 74, 76, 92 ]

//* 5. Geometrizer
//? Create two functions that calculate the properties of a circle.

//? Create a function called calcCircumfrence:
// - Pass the radius to the function.
// - Calculate the circumference based on the radius, and output "The circumference is NN".

const calcCircumfrence = rad => `The circumference is ${(2 * Math.PI * rad).toFixed(2)}`;

console.log(calcCircumfrence(3)); // The circumference is 18.85

//? Create a function called calcArea:
// - Pass the radius to the function.
// - Calculate the area based on the radius, and output "The area is NN".

const calcArea = rad => `The area is ${(Math.PI * rad ** 2).toFixed(2)}`;

console.log(calcArea(3)); // The area is 28.27