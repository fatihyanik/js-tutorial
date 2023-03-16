const colors = ["red", 9999, "green", "blue", 777, "yellow", "black", "purple", "brown"]; 

// with Math.random() ==> get random item from colors array, if the item is number set it to '' 

let randomNumber = Math.floor(Math.random() * colors.length);

let randomColor = typeof colors[randomNumber] === "number" ? "" : colors[randomNumber];
// console.log(Math.random);

console.log(randomColor);