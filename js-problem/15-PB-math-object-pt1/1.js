// 1) 🚀 Write Program to picking one random character from chrs.
let chrs = 'ABCDEFGH';

let randomChar = chrs[Math.floor(Math.random() * chrs.length)];
console.log("random of ABCDEFGH:", randomChar);

// ---------############------------

// 2) 🚀  Write program to picking one not empty random character from sy.

let sy = '%& § !* @= ';

let syWithNoSpaces = sy.replace(/ /g, "");
console.log(syWithNoSpaces);
let randomSy = syWithNoSpaces[Math.floor(Math.random() * syWithNoSpaces.length)];
console.log("random of sy which is not empty:", randomSy);

// -------------###########------------------

// 3) Write program to generates Random rgba background color.
let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);

let backgroundColor = `rgb(${red}, ${green}, ${blue})`;
console.log(backgroundColor);