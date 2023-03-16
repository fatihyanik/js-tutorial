function length(str) {
    if (str === '') {
        return 0;
    }
    return 1 + length(str.substring(1));
}
console.log(length("fatih")); // 5
console.log(length("fatihmurat")); // 10

function reverse(str) {
	if (str.length < 2) {
		return str;
	}
	return str[str.length - 1] + reverse(str.substring(0, str.length - 1))
}
console.log(reverse("fatih")); // hitaf
console.log(reverse("fatihmurat")); // tarumhitaf

function factorial(n) {
	if (n < 2) {
		return 1;
	}
	return n * factorial(n - 1);
}
console.log(factorial(5));

function fib(n) {
	if (n < 2) {
		return n;
	}
	return fib(n - 1) + fib(n - 2);
}
console.log(fib(15));
