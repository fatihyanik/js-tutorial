//* 13. Validate Email.
//? Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.
// NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax), so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:
// The string must contain exactly one "@" character.
// The string must contain at least one "." character.
// The "." and the "@" must be in the appropriate places.
// e.g. "." cannot be the last character.
// e.g. "." cannot be directly before or after "@"
// e.g. there cannot be consecutive "." characters
// e.g. "@" must have at least one character in front of it.
// e.g. "j@example.com" is valid while "@example.com" is invalid.
// e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.
// e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid.

function validateEmail(email) {
	let emailLength = email.length;
	
	let numberOfAts = 0;
	let numberOfDots = 0;
	
	// "@" or "." cannot be either the first or the last character:
	if (email[0] === "@" || email[0] === "." || email[emailLength - 1] === "@" || email[emailLength - 1] === ".") {
		return false;
	}

	for (let i = 0; i < email.length; i++) {

		if (email[i] === "@" ) {
			
			// "@" and "." do not immadiately follow themselves or one another
			if (email[i - 1] === "." || email[i - 1] === "@" || email[i + 1] === "." || email[i + 1] === "@") {
				return false;
			}
			
			// "com" cannot follow "@":
			let comAfterAt = 0;
			for (let c = 0; c < "com".length; c++) {
				if (email[i + 1 + c] === "com"[c]) {
					comAfterAt += 1;
				}
			}
			if (comAfterAt === 3) {
				return false;
			}

			numberOfAts++;
		}

		if (email[i] === ".") {
			if (email[i - 1] === "." || email[i + 1] === ".") {
				return false;
			}
			numberOfDots++;
		}
	}
	// exactly one "@" and at least one "."
	if (numberOfAts !== 1 || numberOfDots < 1) {
		return false;
	}
	
	return true;
}

console.log(validateEmail("john@smith@gmail.com")); //* false
console.log(validateEmail("john@smithgmail.com")); //* true
console.log(validateEmail("john.smith@gmail.com")); //* true
console.log(validateEmail("j@example.com")); //* true
console.log(validateEmail("@example.com")); //* false
console.log(validateEmail("john.smith@com")); //* false
console.log(validateEmail("john..smith@email.com")); //* false
console.log(validateEmail("john.@email.com")); //* false
console.log(validateEmail("john@.email.com")); //* false

// -***********************************************
console.log("*************************************");
// -***********************************************