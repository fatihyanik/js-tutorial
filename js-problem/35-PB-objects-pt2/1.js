//* 1. Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

// (1) function as method:

const minMaxObject = {
	min: 32,
	max: 64,
	checkRange: function (num) {
		if (num > this.min && num < this.max) {
			return `${num} is within the range!`;
		} else {
			return "no!";
		}
	}
}

console.log(minMaxObject.checkRange(60)); // 60 is within the range!

// (2) external function that takes an object as the second argument:

const minAndMaxObject = {
	min: 32,
	max: 64,
}

const checkRange = (num, obj) => {
	if (num > obj.min && num < obj.max) {
		return `${num} is within the range!`;
	} else {
		return "no!";
	}
}

console.log(checkRange(60, minAndMaxObject)); // 60 is within the range!

// 3.yol en güzel cözüm
const isInRange = (num, object) => {
	return num >= object.min && num <= object.max;
}

console.log(isInRange(3, { min: 0, max: 6 }));

//* 2. Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]

const scrabbleTiles = [{ tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 }];

const calcScore = tiles => {
	let sum = 0;
	for (let i = 0; i < tiles.length; i++) {
		sum += tiles[i].score;
	}
	return sum;
}

console.log(calcScore(scrabbleTiles)); // 28

//* 3. Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.

const isObjectEmpty = obj => Object.entries(obj).length === 0;

console.log(isObjectEmpty({ a: 1 })); // false
console.log(isObjectEmpty({})); // true

//* 4. Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.
// Example:
// countLetters("tree") ➞ {t: 1, r: 1, e: 2}

let someString = "onomatopoeia";

const letterOccurrenceCounter = string => {
	const occurrencesMap = {};

	for (let i = 0; i < string.length; i++) {
		if (!occurrencesMap[string[i]]) {
			occurrencesMap[string[i]] = 1;
		} else {
			occurrencesMap[string[i]]++;
		}
	}

	return occurrencesMap;
}

console.log(letterOccurrenceCounter(someString)); // { o: 4, n: 1, m: 1, a: 2, t: 1, p: 1, e: 1, i: 1 }