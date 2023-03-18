//TODO Attempt this exercise using only simple "if" conditionals (and only what you have learnt this far into the course, so no loops, functions or arrays just yet!)
// Print your results to the console

//* 1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.
let aleeza1 = 89;
let aleeza2 = 120;
let aleeza3 = 103;

let liz1 = 116;
let liz2 = 94;
let liz3 = 123;

//? 1a) Calculate the average score for each team.
console.log("***** round 1 *****");

let aleezaAveScore = (aleeza1 + aleeza2 + aleeza3) / 3;
let lizAveScore = (liz1 + liz2 + liz3) / 3;
console.log(`Aleeza's team's average score: ${aleezaAveScore}, Liz's team's average score: ${lizAveScore}`);

//? 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
if (aleezaAveScore > lizAveScore) {
	console.log(`Aleeza's team wins with the score: ${aleezaAveScore}`);
} else if (aleezaAveScore < lizAveScore) {
	console.log(`Liz's team wins with the score: ${lizAveScore}`);
} else {
	console.log(`it's a draw! ${aleezaAveScore} : ${lizAveScore}`);
}

//? 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
console.log("***** round 2 *****");

aleeza1 = Math.floor(Math.random() * 70 + 70);
aleeza2 = Math.floor(Math.random() * 70 + 70);
aleeza3 = Math.floor(Math.random() * 70 + 70);

liz1 = Math.floor(Math.random() * 70 + 70);
liz2 = Math.floor(Math.random() * 70 + 70);
liz3 = Math.floor(Math.random() * 70 + 70);

aleezaAveScore = Math.round((aleeza1 + aleeza2 + aleeza3) / 3);
lizAveScore = Math.round((liz1 + liz2 + liz3) / 3);
console.log(`Aleeza's team's average score: ${aleezaAveScore}, Liz's team's average score: ${lizAveScore}`);

if (aleezaAveScore > lizAveScore) {
	console.log(`Aleeza's team wins with the score: ${aleezaAveScore}`);
} else if (aleezaAveScore < lizAveScore) {
	console.log(`Liz's team wins with the score: ${lizAveScore}`);
} else {
	console.log(`it's a draw! ${aleezaAveScore} : ${lizAveScore}`);
}

//? 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
console.log("***** round 3 *****");

let mary1 = 97;
let mary2 = 134;
let mary3 = 105;

let maryAveScore = (mary1 + mary2 + mary3) / 3;
console.log(`Aleeza's team's average score: ${aleezaAveScore}, Liz's team's average score: ${lizAveScore}, Mary's team's average score: ${maryAveScore}`);

if (aleezaAveScore > lizAveScore && aleezaAveScore > maryAveScore) {
	console.log(`Aleeza's team wins with the score: ${aleezaAveScore}`);
} else if (lizAveScore > aleezaAveScore && lizAveScore > maryAveScore) {
	console.log(`Liz's team wins with the score: ${lizAveScore}`);
} else if (maryAveScore > aleezaAveScore && maryAveScore > lizAveScore) {
	console.log(`Mary's team wins with the score: ${maryAveScore}`);
} else {
	console.log(`it's a draw! ${aleezaAveScore} : ${lizAveScore} : ${maryAveScore}`);
}


//? 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.
console.log("***** round 4 *****");

aleeza1 = Math.floor(Math.random() * 70 + 70);
aleeza2 = Math.floor(Math.random() * 70 + 70);
aleeza3 = Math.floor(Math.random() * 70 + 70);

liz1 = Math.floor(Math.random() * 70 + 70);
liz2 = Math.floor(Math.random() * 70 + 70);
liz3 = Math.floor(Math.random() * 70 + 70);

mary1 = Math.floor(Math.random() * 70 + 70);
mary2 = Math.floor(Math.random() * 70 + 70);
mary3 = Math.floor(Math.random() * 70 + 70);

maryAveScore = Math.round((mary1 + mary2 + mary3) / 3);
console.log(`Aleeza's team's average score: ${aleezaAveScore}, Liz's team's average score: ${lizAveScore}, Mary's team's average score: ${maryAveScore}`);

if (aleezaAveScore > lizAveScore && aleezaAveScore > maryAveScore) {
	console.log(`Aleeza's team wins with the score: ${aleezaAveScore}`);
} else if (lizAveScore > aleezaAveScore && lizAveScore > maryAveScore) {
	console.log(`Liz's team wins with the score: ${lizAveScore}`);
} else if (maryAveScore > aleezaAveScore && maryAveScore > lizAveScore) {
	console.log(`Mary's team wins with the score: ${maryAveScore}`);
} else {
	console.log(`it's a draw! ${aleezaAveScore} : ${lizAveScore} : ${maryAveScore}`);
}
