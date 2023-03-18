//* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

//? 1. Store Mark's and John's mass and height in variables.

let marksMass = 67;
let marksHeight = 1.85;

let johnsMass = 88;
let johnsHeight = 1.80;

//? 2. Calculate both their BMIs and store their BMIs in variables.
let marksBMI = Number((marksMass / (marksHeight ** 2)).toFixed(1));
console.log(`${marksBMI} kg/m2`); // 19.6 kg/m2

let johnsBMI = Number((johnsMass / (johnsHeight ** 2)).toFixed(1));
console.log(`${johnsBMI} kg/m2`); // 27.2 kg/m2

//? 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
let markHasHigherBMI = marksBMI > johnsBMI;

//? 4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").
console.log(`Mark has a higher BMI than John: ${markHasHigherBMI}`);

//? 5. Create an *if* statement which prints the name and BMI of the person with the highest BMI.
if (markHasHigherBMI) {
	console.log(`Mark has a higher BMI: ${marksBMI} kg/m2`);
} else {
	console.log(`John has a higher BMI: ${johnsBMI} kg/m2`);
}