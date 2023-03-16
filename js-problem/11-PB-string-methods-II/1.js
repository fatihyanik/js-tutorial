// Declare a variable: 'It's hard to say who is right in this matter'. 
let expressionOfDoubt = "It's hard to say who is right in this matter";

// 0. Find the first occurrence of the letter "a" in a string, starting the search at position 17.
console.log(`The first "a" after index 17 in the string "${expressionOfDoubt}" is at position ${expressionOfDoubt.indexOf("a", 17)} `);

// 1. Check if a string includes "righT".
console.log(`"${expressionOfDoubt}" includes "righT": ${expressionOfDoubt.includes("righT")} `);

// 2. Extract 'who' word from the text.
console.log(`Here is the "who" from "${expressionOfDoubt}": ${expressionOfDoubt.slice(expressionOfDoubt.indexOf("who"), expressionOfDoubt.indexOf("who")+"who".length)} `);

// 3. Extract only the last character.
console.log(`Here is the last character of "${expressionOfDoubt}": ${expressionOfDoubt.slice(expressionOfDoubt.length - 1)} `);