/*
#### 1.

| Input  | Output |
| :----: | :----: |
|  2, 5  |   5    |
| 0, 100 |  100   |
| 52, 35 |   52   |
*/

//* two elements are compared, and the largest one of the two is logged

let a = 2;
let b = 5;

if (a > b) {
	console.log(a);
} else if (b > a) {
	console.log(b);
}

/*
#### 2.

| Input  | Output |
| :----: | :----: |
|  5, 5  |  true  |
| 40, 40 |  true  |
| 50, 51 | false  |
*/

//* two elements are compared. if they are equal, the output is true. if not, the output is false

let c = 5;
let d = 5;

if (c === d) {
	console.log(true);
} else {
	console.log(false);
}

// or a bit simpler:
// let cAndDAreEqual = c === d;
// console.log(cAndDAreEqual);

/*
#### 3.

|  Input   | Output |
| :------: | :----: |
| 110, 100 |  true  |
| 150, 100 |  true  |
| 50, 100  | false  |
*/

//* if the first element is larger than the second one, the output is true. if not, the output is false

let e = 150;
let f = 100;

if (e > f) {
	console.log(true);
} else {
	console.log(false);
}

// or:
// let eLargerThanF = e > f;
// console.log(eLargerThanF);