// 9-PB-operators-logical

// 0. Declare two variables: "dogIsBetter" with the value of true, and "dogIsBetter" with the value of false.

// SORRY! I switched the values because it hurt otherwise!
let catIsBetter = true;
let dogIsBetter = false;

// 1. Check the result of:

// - a) dogIsBetter AND catIsBetter.
console.log("dogIsBetter AND catIsBetter:", dogIsBetter && catIsBetter); // false (only one condition is met)

// - b) dogIsBetter OR catIsBetter.
console.log("dogIsBetter OR catIsBetter:", dogIsBetter || catIsBetter); // true (one condition is met, which is enough for the OR operator)

// - c) NOT (dogIsBetter AND catIsBetter).
console.log("NOT (dogIsBetter AND catIsBetter):", !(dogIsBetter && catIsBetter)); // true (the reverse of the first example)

// 2. Declare three more variables "atoms", "sandGrains", "starsInSky". Give these variables number values.
let atoms = 133000000000000000000000000000000000000000000000000;
// Carl Sagan once stated that “there are more stars in our Universe than there are grains of sand on all the beaches on Earth”.
let sandGrains = 5000000000000000000000;
let starsInSky = 10000000000000000000000;

// 3. Check the result of whether:

// - a) atoms is greater than starsInSky AND atoms is greater than sandGrains.
console.log("atoms > starsInSky AND atoms > sandGrains:", atoms > starsInSky && atoms > sandGrains); // true (both statements are met)

// - b) atoms is NOT equal to sandGrains.
console.log("atoms is NOT equal to sandGrains:", atoms !== sandGrains); // true (the values don't match)

// - c) starsInSky is less than sandGrains OR starsInSky is greater than atoms.
console.log("starsInSky < sandGrains OR starsInSky > atoms:", starsInSky < sandGrains || starsInSky > atoms); // false (both statements are false)

// - d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.
console.log("atoms is equal to starsInSky OR atoms is NOT equal to sandGrains:", atoms === starsInSky || atoms !== sandGrains); // true (the second statement evaluates to true)

// - e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10.
console.log("atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10:", atoms >= 10 && sandGrains <= 10); // false (only the first statement evaluates to true)

// - f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100.
console.log("atoms multiplied by starsInSky is less than 100 OR atoms multiplied by sandGrains is greater than 100:", atoms * starsInSky < 100 || atoms * sandGrains > 100); // true (one of the statements — the second one — evaluates to true)

// 4. BONUS: Explain in words the logic of each result in a comment after the result.

