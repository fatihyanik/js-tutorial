// number literal
let num = 7;
console.log(num); // 7

function add(x, y) {
    return x + y;
}
// function expression
let num1 = add(3, 4);
console.log(num1); // 7

// Immediately Invoked Function Expression (IIFE), pronounced "iffy"
let num3 = function (x, y) { 
    return x + y;
}(3, 4);
console.log(num3); // 7

// Another example
function greet(greeting, name) {
    return `${greeting}, ${name}!`;
}
let elizGreeting = greet('Hi', 'Eliz');
console.log(elizGreeting);

// the same example using an IIFE?
let elizGreeting1 = function (greeting, name) {
    return greeting + ', ' + name + '!';
}('Hi', 'Eliz');
console.log(elizGreeting1);

let elizGreeting2 = (function (greeting, name) {
    return greeting + ', ' + name + '!';
}('Hi', 'Eliz'));
console.log(elizGreeting2);

// example with nested functions
function greetOuter () {
    function greetInner () {
        return 'Hi, Napo';
    }
    return greetInner;
}
let napoGreeting = greetOuter()();
console.log(napoGreeting);

// the same example with IIFE
let napoGreeting1 = function outer() {
    function inner() {
        return 'Hi, Napo';
    }
    return inner;
}()();
console.log(napoGreeting1);

// Assignment: create a variable "maritzagreeting" and log it to the console.  Use again an IIFE!
let maritzaGreeting = function () {
    return function () {
        return 'Hi, Maritza';
    };
}()();
console.log(maritzaGreeting);

// what IIFEs are good for: private (local) variables
let msg = 'Secret message';
console.log(msg);

(function () {
    let msg = 'Secret message';
    console.log(msg);
})();

// immmediately invoked nested arrow function expressions
let chrisGreeting = (() => () => 'Hi, Chris!')()();
console.log(chrisGreeting);

let chrisGreeting1 = () => () => 'Hi, Chris!';
console.log(chrisGreeting1()());