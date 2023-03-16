// 1. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
let helloString = "Hello World";
let upperCaseHelloString = helloString.toUpperCase();
console.log(upperCaseHelloString);

// 2. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.
let greetingString = "Hello Earthling";
let lowerCaseGreetingString = greetingString.toLowerCase();
console.log(lowerCaseGreetingString);

// 3 .Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB.
let givenString = "Amethyst deceiver";

let firstLetter = givenString.substring(0, 1);
let newString = firstLetter + givenString + firstLetter;
console.log(newString);

// 4. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch.
let lastThreeLetters = givenString.slice(-3);
let secondNewString = lastThreeLetters + givenString + lastThreeLetters;
console.log(secondNewString);

// 5. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB.
let lastLetter = givenString.slice(-1);
let switchedCharactersString = lastLetter + givenString.slice(1, -1) + firstLetter;
console.log(switchedCharactersString);

// 6. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
let foxVariable = "the quick brown fox";
let capitalizedPhrase = foxVariable[0].toUpperCase() + foxVariable.slice(1);
console.log(capitalizedPhrase);