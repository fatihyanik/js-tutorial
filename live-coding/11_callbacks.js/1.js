// callback functions: a callback is a function that is passed as an argument to 
// another function

// In JavaScript, functions are "first-class citizens".  
// Functions are not only used to manipulate values like strings, numbers, booleans, but
// they are themselves values. 
// Functions are "first-class objects", that is, they can be ...
// 1. created via literals
function myFunc() {
    // do something
}
// 2. the values of variables
myFunc = () => { // do something 
};
// 3. the elements of arrays
// 4. the properties of objects (methods)
// 5. the arguments of other functions
// 6. the return values of other functions

// a function that is passed as an argument to a function is called a "callback function";
// a function that takes a function argument is a higher-order function

// A very simple (and useless) example of a callback function
let wrapper = function (callback) {
    return callback();
}
const sayHi = function () {
    return 'Hi';
};
console.log(wrapper(sayHi)); // Hi
console.log(sayHi()); // Hi

let murat = function () {
    return "Murat";
}
console.log(wrapper(murat)); //Murat

wrapper = function (x, y, callback) {
    return callback(x, y);
}
const add = function (x, y) {
    return x + y;
};
console.log(wrapper(2, 3, add)); // 5

// the idea of a callback: a function that is "called back" when some action is completed
// for example, you might request some resource from a server and call some function (the callback)
// when the response arrives
function requestResource(res, cb) {
    // request resource from a server
    // once the server response arrives, do something with the response
    return cb(res);
}

function cb1() {
    console.log('A');
}

// setTimeout is called an "asynchronous" function: it doesn't pause/block the execution of subsequent
// code but returns immediately.  Immediately after setTimeout is called, console.log is called.
// "A" prints after "B"
setTimeout(cb1, 3000);
console.log('B');

function print(val) {
    console.log(val);
}
// synchronous higher-order function; waits until callback is done.
[1, 2, 3].forEach(print);
console.log(11);