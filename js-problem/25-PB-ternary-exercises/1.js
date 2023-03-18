// Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'
let isDog = true ? console.log("pat, pat") : console.log("find me a dog to pat!");

// Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.
let speedLimit = 50;
let speed = 80;

let speedCheck = speed > speedLimit ? console.log("you're going too fast!") : console.log("You're driving below the speed limit, Oma");

// Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".
let age = 20;

let beerOrButterBeer = age < 16 ? console.log("serve butter beer") : console.log("serve beer");

// Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".
let occupation = "Student";

let isStudent = (occupation.toLowerCase() === "student") ? console.log("Ticket costs €5,00") : console.log("Ticket costs €12,00");

// Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".
let string = "we have cake";

let okMarie = string.includes("cake") ? console.log("Let them eat cake") : console.log("Oh, bother");

// Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
// 30
// 939
// 40.9

let number = 40.9;

let evenOrOdd = Number.isInteger(number) ? number % 2 === 0 ? console.log(`${number} is even`) : console.log(`${number} is odd`) : console.log(`${number} is not an integer`);