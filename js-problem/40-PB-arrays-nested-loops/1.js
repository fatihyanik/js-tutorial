//* Use NESTED LOOPS in each instance

//* Write a program to construct the following pattern:
// /	*
// /	* *  
// /	* * *  
// /	* * * * 

const printPattern = (sym, num) => {
    for (let i = 1; i <= num; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += sym;
        }
        console.log(row);
    }
}
printPattern('*', 4);

//* Write a program which prints the elements of the following array:
let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// And creates the following output:
// row 0 
//  1 
//  2 
//  1
//  24
// row 1

const printArrayElementsInRow = (array) => {
    let output = '';
    for (let i = 0; i < array.length; i++) {
        output += `row ${i}\n`;
        let subarray = array[i];
        for (let el of subarray) {
            output += ` ${el}\n`
        }
    }
    console.log(output);
}

printArrayElementsInRow(arr);

//* Write a program that will output the following using loops:
// 1 1 1 2 2 2 3 3 3 4 4 4
for (let i = 1; i <= 4; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(i);
    }
}

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(j);
    }
}
