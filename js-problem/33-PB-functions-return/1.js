//* 1. Add Up.
//? Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function sumIntFrom1ToN(int) {
    let sum = 0;
    for (let i = 1; i <= int; i++) {
        sum += i;
    }
    return sum;
}

// console.log(sumIntFrom1ToN(4)); // 10
// console.log(sumIntFrom1ToN(13)); // 91
console.log(sumIntFrom1ToN(600)); // 180300

// -***********************************************
console.log("*************************************");
// -***********************************************

//* 2. Cubed.
//? Create a function that takes in three numbers and returns the sum of its cubes.

function sumOfCubes(num1, num2, num3) {
    return (num1 ** 3 || 0) + (num2 ** 3 || 0) + (num3 ** 3 || 0);
}

console.log(sumOfCubes(1, 5, 9)); // 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
console.log(sumOfCubes(2)); // 8
console.log(sumOfCubes()); // 0

// -***********************************************
console.log("*************************************");
// -***********************************************


// 2.yol
function sumOfCubes1(num1, num2, num3) {
    return Math.pow(num1, 3) + Math.pow(num2, 3) + Math.pow(num3, 3);
}

console.log(sumOfCubes1(1, 5, 9));

//* 3. String Check.
//? Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

function isStrInWord(str, word) {
    // return word.startsWith(str); //! — lazy solution!

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== word[i]) {
            return false;
        }
        return true;
    }
}

console.log(isStrInWord("bu", "button")); // true
console.log(isStrInWord("tri", "triplet")); // true
console.log(isStrInWord("beau", "pastry")); // false

// -***********************************************
console.log("*************************************");
// -***********************************************

//* 4. Less Than or Equal to Zero?
//? Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function isLEQZero(num) {
    return num <= 0;
}

console.log(isLEQZero(3)); // false
console.log(isLEQZero(0)); // true
console.log(isLEQZero(-4)); // true
console.log(isLEQZero(10)); // false

// -***********************************************
console.log("*************************************");
// -***********************************************

//* 5. Count Occurrences.
//? Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

function countOccurrences(string, letter) {
    let counter = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            counter++;
        }
    }

    return `There are ${counter} occurrence of ${letter} inside "${string}"`;
}

console.log(countOccurrences("this is a string", "i")); // There are 3 occurrence of i inside "this is a string"

// -***********************************************
console.log("*************************************");
// -***********************************************

//* 6. X To The Power of X.
//? Create a function that takes a base number and an exponent number and returns the calculation. NB: All test inputs will be positive integers.

function calcBaseToExponent(base, exp) {
    return base ** exp;
}

console.log(calcBaseToExponent(5, 5)); // 3125
console.log(calcBaseToExponent(10, 10)); // 10000000000
console.log(calcBaseToExponent(3, 3)); // 27

// -***********************************************
console.log("*************************************");
// -***********************************************

//* 7. Dog Years.
//? Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the puppy's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

function dogAge(humanYears) {
    return `Your doggo is ${humanYears * 7} years old in dog years!`;
}
console.log(dogAge(4)); // Your doggo is 28 years old in dog years!

// -***********************************************
console.log("*************************************");
// -***********************************************

//* 8. A Lifetime Supply...
//? Create a function to calculate how much you'll actually be getting for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. Bonus Accept floating point values for amount per day and round the result.

let favoriteSnack = "cricket bellies bar";
const maxAge = 90;

function calcLifetimeSupply(currentAge, dailyAmount) {
    let supply = Math.round((maxAge - currentAge) * dailyAmount * 365);
    return `You will need approximately ${supply} ${supply === 1 || supply % 10 === 1 ? favoriteSnack : favoriteSnack + "s"} till the age of ${maxAge}.`
}

console.log(calcLifetimeSupply(40, 3)); // You will need approximately 41063 cricket bellies bars till the age of 90.

// -***********************************************
console.log("*************************************");
// -***********************************************

//* 9. Where's Waldo?
//? Create a function that takes a string and returns true if Waldo is found, and false if he's not.

function isWaldoHere(str) {
    // return str.toLowerCase().includes("waldo"); //! lazy solution!

    let waldo = "waldo";
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === waldo[0]) {
            for (let w = 1; w < waldo.length; w++) {
                if (waldo[w] !== str[i + w]) {
                    return false;
                }
            }
            return true;
        }
    }
}

console.log(isWaldoHere("is there wal here ?")); // false
console.log(isWaldoHere("I found you Waldo!")); // true
console.log(isWaldoHere("is wally here?")); // false
console.log(isWaldoHere("waldo is here")); // true

// -***********************************************
console.log("*************************************");
// -***********************************************

//* 10. Pie.
//? Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

function isEqualSlices(slices, people, each) {
    return slices >= people * each;
}

console.log(isEqualSlices(11, 5, 3)); // false // 5 people x 3 slices each = 15 slices > 11 slices
console.log(isEqualSlices(8, 3, 2)); // true
console.log(isEqualSlices(8, 3, 3)); // false
console.log(isEqualSlices(24, 12, 2)); // true

// -***********************************************
console.log("*************************************");
// -***********************************************

//* 11. XO
//? Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.

function hasEqualXAndO(str) {
    let xCount = 0, oCount = 0;
    for (let char of str.toLowerCase()) {
        if (char === 'x') {
            xCount++;
        } else if (char === 'o') {
            oCount++;
        }
    }
    return xCount === oCount;
}

console.log(hasEqualXAndO("ooxx")); // true: 2 = 2
console.log(hasEqualXAndO("xooxx"));
console.log(hasEqualXAndO("ooxXm"));
console.log(hasEqualXAndO("zpzpzpp"));

//* 12. isPrime?
//? Create a function that returns true if a number is prime and false if it's not. NB: a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

function isPrime(num) {
	// trial division — check up to square root of the number: https://en.wikipedia.org/wiki/Prime_number#Computational_methods
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(9)); // false
console.log(isPrime(10)); // false
console.log(isPrime(13)); // true
console.log(isPrime(22)); // false

// -***********************************************
console.log("*************************************");
// -***********************************************