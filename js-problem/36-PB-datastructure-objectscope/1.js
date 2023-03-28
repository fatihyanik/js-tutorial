//* 1. Create the following object:
const student = { 
	firstName: "John", 
	lastName: "Smith", 
	class: 12
};

// Create a method that prints the following:
// "John smith is a student in class 12"

student.summary = function() {
	console.log(`${this.firstName} ${this.lastName} is a student in class ${this.class}`);
}

student.summary();

//* 2. Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".

const person = {
	firstName: "John",
	lastName: "Smith",
	age: 41,
	job: "Full-stack Developer",
	city: "Leipzig",
	summary: function() {
		console.log(`${this.firstName} ${this.lastName} is a ${this.age}-year-old ${this.job} living in ${this.city}`);
	}
}

person.summary();


//* Bonus
// Write a method to get the length of the person object.

const length = function() {
	return Object.keys(this).length;
}

person.size = length;

console.log(person.size()); // 7 including this method!