// 0. Declare two variables "snackServings" and "guests" and assign them number values.
let snackServings = 12;
let guests = 3;
console.log("snackServings, guests:", snackServings, guests);

// 1. Add snackServings and guests.
console.log("snackServings + guests: ", snackServings + guests);

// 2. Subtract guests from snackServings. Then, subtract snackServings from guests.
console.log("snackServings - guests:", snackServings - guests);
console.log("guests - snackServings:", guests - snackServings);

// 3. Multiply snackServings and guests.
console.log("guests * snackServings:", guests * snackServings);

// 4. Divide snackServings by guests.
console.log("snackServings / guests:", snackServings / guests);

// 5. Declare another variable "drinks" with value "10". Multiply snackServings and guests. Then, divide the result by drinks. Store the result in a new variable named "resultOne". Print "resultOne" to the console.
let drinks = 10;
let resultOne = snackServings * guests / drinks;
console.log("resultOne (snack servings multiplied by guests divided by drinks):", resultOne);

// 6. Declare two variables: "monkeys" with value 15, and "bananas" with value 9. Divide monkeys by bananas.
let monkeys = 15;
let bananas = 9;
console.log("monkeys / bananas:", monkeys / bananas);

// 7. Declare another variable "monkeyfights" with value 20. Add monkeys and bananas, then multiply the result by monkeyfights. Store the result in variable "resultTwo". Print "resultTwo" to the console.
let monkeyfights = 20;
let resultTwo = (monkeys + bananas) * monkeyfights;
console.log("resultTwo (a sum of monkeys and bananas multiplied by monkeyfights):", resultTwo);

// 8. Increment monkeys.
monkeys += 1;
console.log("monkeys incremented:", monkeys);

// 9. Decrement bananas.
bananas -= 1;
console.log("bananas decremented:", bananas);

// 10. Subtract monkeys from bananas and store this in a new variable "happiness". Add happiness and monkeyfights.
let happiness = bananas - monkeys;
console.log("happiness (monkeys subtracted from bananas)", happiness);

// 11. Print the remainder when "resultOne" is divided by "resultTwo" to the console.
let remainder = resultOne % resultTwo;
console.log("remainder (resultOne % resultTwo):", remainder);
console.log("Does it make any sense?");