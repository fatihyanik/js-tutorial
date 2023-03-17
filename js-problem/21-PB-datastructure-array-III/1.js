// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];

// 2. Change the first item in the array to "Berlin".
euroCities.splice(0, 1, "Berlin");
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]

// 3. Print the length of the array "euroCities".
console.log(euroCities.length); // 5

// 4. Remove the last item of the array "euroCities". 
euroCities.pop();
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague' ]

// 5. Use an array method to add "Budapest" to the euroCities array.
euroCities[euroCities.length] = "Budapest";
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Budapest' ]

// euroCities.push("Budapest");
// console.log("euroCities5:>> ", euroCities);

// 6. **Bonus**: Remove the second and third items from the euroCities array.
euroCities.splice(1, 2);
console.log(euroCities); // [ 'Berlin', 'Prague', 'Budapest' ]

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
const asianCities = ["Tokyo", "Ulaanbaatar", "Beijing", "Seoul", "Hanoi", "Manila"];

// 8. **Bonus**: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
const threeAsianCities = asianCities.slice(1, 4);
console.log(threeAsianCities); // [ 'Ulaanbaatar', 'Beijing', 'Seoul' ]

// 9. **Bonus**: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).
const worldCities = euroCities.concat(asianCities);
console.log(worldCities); // ['Berlin', 'Prague', 'Budapest', 'Tokyo', 'Ulaanbaatar', 'Beijing', 'Seoul', 'Hanoi', 'Manila']

// 10. Reverse the order of worldCities.
worldCities.reverse();
console.log(worldCities); // ['Manila', 'Hanoi', 'Seoul', 'Beijing', 'Ulaanbaatar', 'Tokyo', 'Budapest', 'Prague', 'Berlin']

// 11. **Bonus**: Replace the 3rd item in the array of worldCities with "Toronto".
worldCities.splice(2, 1, "Toronto");
console.log(worldCities); // ['Manila', 'Hanoi', 'Toronto', 'Beijing', 'Ulaanbaatar', 'Tokyo', 'Budapest', 'Prague', 'Berlin']

// 12. **Bonus**: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 0, "Washington");
console.log(worldCities); // ['Manila', 'Washington', 'Hanoi', 'Toronto', 'Beijing', 'Ulaanbaatar', 'Tokyo', 'Budapest', 'Prague', 'Berlin']

// 13. **Bonus** Write a program to join all elements of the result (worldCities) into a string. 
// Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
// Expected Outputs: 
// "Berlin , London, Bangkok, Phnom Penh"
// "Berlin+London+Bangkok+Phnom Penh"
let worldCitiesString = worldCities.join(", ");
console.log(worldCitiesString); // "Manila, Washington, Hanoi, Toronto, Beijing, Ulaanbaatar, Tokyo, Budapest, Prague, Berlin"

// **Bonus**

// 1. Write a program to reverse the string: "Hello World".
let helloString = "Hello World";
let reversedHelloString = helloString.split("").reverse().join("");
console.log(reversedHelloString); // "dlroW olleH"

// **Extra Practice**

// Print the results to the console.

// 1. Make an array of your siblings' names or your favorite movie characters' names.
const favCharactersArray = ["Daenerys", "Aria", "Thyrion", "Varys", "Brandon"];

// 2. Make an array of your parents' names.
const parentsArray = ["Fatma", "Abidin"];

// 3. Combine these two arrays.
const superPeopleArray = parentsArray.concat(favCharactersArray);
console.log(superPeopleArray); // ['Fatma', 'Abidin', 'Daenerys', 'Aria', 'Thyrion', 'Varys', 'Brandon']

// 4. Add your pets' names.
superPeopleArray.push("Tarcin");
console.log(superPeopleArray); // ['Fatma', 'Abidin', 'Daenerys', 'Aria', 'Thyrion', 'Varys', 'Brandon', 'Tarcin']

// 5. Reverse the order of the array.
superPeopleArray.reverse();
console.log(superPeopleArray); // ['Tarcin', 'Brandon', 'Varys', 'Thyrion', 'Aria', 'Daenerys', 'Fatma', 'Abidin']

// 6. Access one of your parents' names.
console.log(superPeopleArray[superPeopleArray.length - 2]); // Abidin

// 7. Update the name of one of your parents. 
superPeopleArray[superPeopleArray.length - 2] = "Abidin Yanik";
console.log(superPeopleArray); // ['Tarcin', 'Brandon', 'Varys', 'Thyrion', 'Aria', 'Daenerys', 'Fatma', 'Abidin Yanik']