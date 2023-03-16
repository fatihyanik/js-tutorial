// 1. Declare a variable and assign a string as a value. Make sure the string is at least 6 characters long. Print the variable to the console.
let myFancyString = "Pack my box with five dozen liquor jugs";

console.log(`My string is "${myFancyString}". It is ${myFancyString.length} characters long.`);

// 2. Access the 2nd and 6th elements of the string. Print the elements to the console. **Make sure you have selected the right index numbers** 
console.log(`The 2nd element of the string is "${myFancyString[1]}" and the 6th one is "${myFancyString[5]}".`);

// 3. Declare a variable called programmingLanguage and assign the string "JavaScript". Declare a variable called isFun and give it a value of true.    Print "JavaScript is fun: true" to the console, using your declared variables.
let programmingLanguage = "JavaScript";
let isFun = true;

console.log(`${programmingLanguage} is fun: ${isFun}!`);

// 4. Print the J and S of JavaScript from the variable programmingLanguage to the console.
console.log(`The "J" and "S" of "${programmingLanguage}": ${programmingLanguage[programmingLanguage.indexOf("J")]}, ${programmingLanguage[programmingLanguage.indexOf("S")]}`);

// 5. Print the length of the string "JavaScript" to the console.
console.log(`"${programmingLanguage}" is ${programmingLanguage.length} characters long.`);