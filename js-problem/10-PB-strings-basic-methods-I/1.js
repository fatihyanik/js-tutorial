// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
let naturalistsStatement = "I can walk in the park all day!";
console.log("logs the word \"park\" with the help of .slice():", naturalistsStatement.slice(18, 22));

// 2. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
let language = "JavaScript";
console.log("getting aSc from JavaScript:", language.slice(3, 6));

// 3. Check if the sentence "nice shoes" contains the letter l or n.
let compliment = "nice shoes";
console.log(`"${compliment}" contains the letter l: ${compliment.indexOf("l") === -1 ? "false" : "true"}`);
console.log(`"${compliment}" contains the letter n: ${compliment.indexOf("n") === -1 ? "false" : "true"}`);

// 4. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".
let myName = "Murat Fatih";
let myFavoriteColor = "blue";
let myHomeCity = "Antalya";
let myCurrentCity = "Leipzig";
let myStatement = `I'm ${myName} and ${myFavoriteColor} is my favorite color. I come from ${myHomeCity} and currently live in ${myCurrentCity}.`;
console.log(myStatement);