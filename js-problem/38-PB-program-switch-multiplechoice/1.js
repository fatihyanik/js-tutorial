//* 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

let color = "RED";
switch (color.toLowerCase()) {
	case "red":
		console.log(`${color}: the color of danger!`);
		break;
	case "yellow":
		console.log(`${color}: the color of sunshine!`);
		break;
	case "blue":
		console.log(`${color}: the color of the clear sky!`);
		break;
	case "green":
		console.log(`${color}: the color of summer!`);
		break;
	default:
		console.log(`${color}: it's your turn to come up with analogies!`);
}

//* 2. Grading
// Create a switch statement that prints different comments depending on a grade.

let grade = "A";

switch (grade.toUpperCase()) {
	case "D":
		console.log("bad");
		break;
	case "C":
		console.log("OK");
		break;
	case "B":
		console.log("good");
		break;
	case "A":
		console.log("excellent");
		break;
	default:
		console.log("not a valid grade");
}

//* 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).

let fruit = "cherry";

switch (fruit) {
	case "banana":
		console.log(`${fruit} is overrated`);
		break;
	case "orange":
		console.log(`${fruit} is too sour`);
		break;
	case "strawberry":
		console.log(`${fruit} is artificial`);
		break;
	case "apple":
		console.log(`${fruit} is boring`);
		break;
	case "cherimoya":
		console.log(`${fruit} is the best!`);
		break;
	default:
		console.log(`Can't say anything about ${fruit}`);
}

//* 4. Percentage Complete.
// If percentageComplete is below 30, print "Still a long way to go".
// If the percentageComplete is between 30 and 50, print "Slowly getting there".
// If percentageComplete is between 51 and 80, print "You can do it!".
// If percentageComplete is between 81 and 99, print "This is the last push!".
// If percentageComplete is 100, print "You're there. Well done!".

let percentageComplete = 99;

switch (true) {
	case (percentageComplete < 30):
		console.log("Still a long way to go");
		break;
	case (percentageComplete <= 50 && percentageComplete >= 30):
		console.log("Slowly getting there");
		break;
	case (percentageComplete >= 51 && percentageComplete <= 80):
		console.log("You can do it!");
		break;
	case (percentageComplete >= 81 && percentageComplete <= 99):
		console.log("This is the last push!");
		break;
	case (percentageComplete === 100):
		console.log("You're there. Well done!");
		break;
	default:
		console.log("valid percent required");
}

//* 5. Differences
// When should you use a switch statement versus an if else statement. Comment your answer in your js file.

// Considering the fact that one can write expressions inside the case clauses, switch statement looks truly powerful!
// I would use the switch statement where I have multiple repetitive cases — switch would be just simpler and more readable to use.
// I wouldn't probably use switch in cases like ex.4 where I have to evaluate the expression within each case clause before comparing it to the expression inside the switch parentheses. It looks like the same amount of work as with an if.. statement.