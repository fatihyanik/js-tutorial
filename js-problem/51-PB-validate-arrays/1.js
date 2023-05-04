//* Validate arrays

//? Create a function that accepts array of numbers as argument and returns an valid array of numbers (without repeating exciting elements). The function should WORK dynamically.

const shabbyArray = [2, 6, 7, 2, 4, 2, 7, 2];

// a loop inside a loop: O(n**2)-type complexity
function validateArray(array) {
    let newArray = [];
    array.forEach(num => {
        if (newArray.indexOf(num) === -1) {
            newArray.push(num);
        }
    });
    return newArray;
}

let res = validateArray(shabbyArray);
console.log(res);

// two loops: O(n)-type complexity
function validateArray1(array) {
    let newArrayMap = {};
    for (let num of array) {
        if (!newArrayMap[num]) {
            newArrayMap[num] = 'unique';
        }
    }
    let newArray = [];
    for (let key in newArrayMap) {
        newArray.push(Number(key))
    }
    return newArray;
}

let res1 = validateArray1(shabbyArray);
console.log(res1);

// Examples:
// INPUT [5,3,22,4,5,3,3,3,7] ==> Function🤖 ==> OUTPUT [5,3,22,4,7]
// INPUT [1,2,3,2,3,5,3,6,3,1] ==> Function🤖 ==> OUTPUT [1,2,3,5,6]
// INPUT [2,6,7,2,4,2,7,2] ==> Function🤖 ==> OUTPUT [2,6,7,4]