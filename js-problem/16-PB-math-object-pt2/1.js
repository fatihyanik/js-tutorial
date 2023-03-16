// # 16-PB-math-object-pt2

// **Write program to generate random HEX color

let red = Math.floor(Math.random() * 256).toString(16);
red = red.length === 2 ? red : "0".concat(red);

let green = Math.floor(Math.random() * 256).toString(16);
green = green.length === 2 ? green : "0".concat(green);

let blue = Math.floor(Math.random() * 256).toString(16);
blue = blue.length === 2 ? blue : "0".concat(blue);

let randomHexColor = `#${red}${green}${blue}`;
console.log(randomHexColor);