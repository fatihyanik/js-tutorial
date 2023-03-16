// TODO Declare a variable named myArr and assign an array to the variable e.g. input ==> 

const myArr =  [ 'item1', 'item2', ['subSubItem1', 'subSubItem2' ] ];

// TODO use push and pop and indexing the get the next output:
// * ['Spain', 'item1', 'SET item2', ['Berlin','subSubItem1' ], 'Germany' ]

let subArray = myArr.pop();
subArray[0] = 'Berlin';
subArray[1] = 'subSubItem1';
myArr[0] = 'Spain';
myArr[1] = 'item1';
myArr[2] = 'SET item2';
myArr.push(subArray, 'Germany');

console.log(myArr);

// ************************** //
// ! a more efficient way is to use also the .unshift() method:

const myArr2 =  [ 'item1', 'item2', ['subSubItem1', 'subSubItem2' ] ];
myArr2.unshift('Spain');
myArr2[2] = 'SET item2';
myArr2[3].unshift('Berlin');
myArr2[3].pop();
myArr2.push('Germany');
console.log(myArr2);