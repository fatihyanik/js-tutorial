// arrays
const names = ['Jim', 'Joe', 'Bill']; // array: ordered collection of elems inside square brackets
const nums = [1, 2, 3];
const mix = [1, 'Hi', [0, 1]];

// accessing arrays using bracket notation
let firstNum = nums[0];
console.log(firstNum);

// changing an array element
nums[0] = 0;
console.log(nums) // nums is now [0, 2, 3]

console.log(nums.length); // 3

// accessing the last element of an array
console.log(nums[nums.length - 1])

// converting arrays to strings
console.log(typeof nums.toString()) //string
const numStr = nums.toString(); 
console.log(numStr); //0,2,3
console.log(nums); //[ 0, 2, 3 ]

// adding to the end of an array with push
nums.push(4);
console.log(nums); //[ 0, 2, 3, 4 ]

// add to the beginning of an array with unshift
nums.unshift(5);
console.log(nums);//[ 5, 0, 2, 3, 4 ]

// remove an element from the end of an array
nums.pop();
console.log(nums); //[ 5, 0, 2, 3 ]
console.log(nums.pop()) // 3
console.log(nums); // [5, 0, 2]

// remove an element from the beginning of an array
nums.shift();
console.log(nums); //[ 0, 2 ]
console.log(nums.shift()); //0
console.log(nums); //[ 2 ]
nums.splice(1, 1);
console.log(nums); //[ 2 ]

// replace element at index
nums.splice(1, 1, 11);
console.log(nums);

// concatenating arrays
// const namesNums = names.concat(nums);
// console.log(namesNums);

// slicing an array
const rest = mix.slice(1);
console.log(rest);