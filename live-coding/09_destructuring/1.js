// destructuring assignments
// array destructuring
let [a, b, c] = [10, 20, 30, 40, 50];
console.log(a);
console.log(b);
console.log(c);

// array destructuring with gaps
let [firstName2, , title] = ['Julius', 'Caesar', [1, 2, 3], 'of the Roman Republic'];
console.log(firstName2); // Julius
console.log('title: ', ...title); // title:  1 2 3

// array destructuring with rest parameter
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [ 30, 40, 50 ]

// string destructuring (strings, like arrays, are iterables)
let [char1, char2, char3] = 'abc'; // ['abc' 'def']
console.log(char1);
console.log(char2);
console.log(char3);

// object destructuring
let obj = { a: 10, b: 20 };
({ a: first, b: second } = obj);
console.log(first); // 10
console.log(second); // 20

// object destructuring with rest parameter
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(rest); // { c: 30, d: 40 }

// function parameter destructuring (destructuring binding)
function swap([a, b]) {
    return [b, a];
}
console.log(swap([1, 2])); // [2, 1]

function sumQuadruple([num1, num2, num3, num4]) {
    return (num1 + num2 + num3 + num4);
}
console.log(sumQuadruple([1, 2, 3, 4])); // 10

const user = {
    id: 46,
    name: 'Joe'
};
function userId({ id }, num) {
    return id + num;
}
console.log(userId(user, 3)); // 49