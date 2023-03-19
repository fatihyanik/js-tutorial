//* 1. Reverse
//? Create a function to reverse a number.
// Examples:
// reverse(34532) -> expected output: 23543
// solution 1
let numberToReverse = 34532;

function numberReverser(number) {
	let numberString = number + "";
	
	let newNumberString = "";

	let length = numberString.length;

	for (let i = length - 1; i >= 0; i--) {
		newNumberString = newNumberString.concat(numberString[i]);
	}
	let reversedNumber = Number(newNumberString);
	return reversedNumber;
}

console.log(`reversed ${numberToReverse}: ${numberReverser(numberToReverse)}`); // 23543

//solutuion 2
function reverse(num1) {
    let toStringSplitRevJoin = num1.toString().split("").reverse().join("");
  
    return toStringSplitRevJoin;
  }
  console.log("reverse :>> ", reverse("9087"));

  // solution 3
 function reverse() {
    let randomNumbers = Math.floor(Math.random() * 34532) + 1;
    let array = randomNumbers.toString().split("");
    array.reverse();
    let joinArray = parseInt(array.join(""));
    return joinArray;
    console.log(randomNumbers);
}
console.log(`1. Reverse ==> ` + reverse());

// SOLUTION 4

let number = 735;

function reverseNumber(number)
{
    let reversedNo = Number( number.toString().split("").reverse().join("") );

    return reversedNo;
}

console.log(`Fourth Solution: The reverse of the number ${number} is ==> ${reverseNumber(number)}`);

// Solution 5

let number1 = 735;
function reverseNumber(number1){
    //CONVERTS NUMBER INTO STRING
    let numAsStr = number1.toString();
    console.log(numAsStr, typeof numAsStr);
    
   // CONVERTS STRING INTO ARRAY
    let strToArray = numAsStr.split("");
    console.log(strToArray);
    
   // REVERSE THE ARRAY ELEMENTS
    strToArray.reverse();
    console.log(strToArray);
   // CONVERTS ARRAY INTO STRING
    let reversedStr = strToArray.join("");
    console.log(reversedStr, typeof reversedStr);
   // CONVERT STRING INTO NUMBER
    let strToNum = parseInt(reversedStr); 
   // let strToNum = Number(reversedStr);
    console.log(strToNum, typeof strToNum);
    return strToNum;
}
console.log(`The reverse of the number ${number} is ==> ${reverseNumber(number)}`);

//* 2. Alphabetical Order
//? Create a function to sort a string into alphabetical order. Examples:
// alphaOrder("webdev") -> expected output: "bdeevw"
// Note: Assume numbers, symbols and punctuation are not included in the string.

let stringToSort = "keyAapoint";

function alphabeticalSorter(string) {
	let sortedString = string.split("").sort().join("");
	return sortedString;
}
console.log(alphabeticalSorter(stringToSort));



 
