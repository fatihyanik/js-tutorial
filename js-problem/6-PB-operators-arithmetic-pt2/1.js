// ### Basic Arithmetic Problems

// Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold?
let boxOffice = 6450;
let ticketPrice = 15;
let numberOfTicketsSold = boxOffice / ticketPrice;
console.log("The number of tickets sold: " + numberOfTicketsSold + ".");

// Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
let weeklyIncome = 500;
let numberOfWeeksInAYear = 52;
let yearlyIncome = weeklyIncome * numberOfWeeksInAYear;
console.log("Sylvia's yearly income: " + yearlyIncome + " dollars.");

// ### Percentage

// Q3. Calculate the percentage of 17/30. Expected output: number%
let percentage = 17/30 * 100;
console.log("17 makes", percentage, "% of 30.");
console.log("A better-looking percentage of 17/30:", Math.round(percentage), "%.");

// ### Geometry Formulas

// Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.
let sideOfASquare = 4.75;
let perimeterOfASquare = sideOfASquare * 4;
console.log("The perimeter of the square: " + perimeterOfASquare + "cm.");

// Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
let triangleSideOne = 5;
let triangleSideTwo = 6;
let triangleSideThree = 7;
let perimeterOfATriangle = triangleSideOne + triangleSideTwo + triangleSideThree;
console.log("The perimeter of the triangle is " + perimeterOfATriangle + "cm.");

// Q6. Calculate the area of a square. Each side is 5cm.
let squareSide = 5;
let squareArea = squareSide ** 2;
console.log("The area of the square is " + squareArea + "cm2.");