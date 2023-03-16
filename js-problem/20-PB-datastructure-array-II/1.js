// Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let europeanCapital = euroCities[1];
console.log("cities:", euroCities, "2nd capital:", europeanCapital);

// Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
console.log("cities:", euroCities);

// Print the length of the array "euroCities".
console.log("number of cities:", euroCities.length);

// Delete the last item of the array "euroCities".
euroCities.pop();
console.log("cities minus the last one:", euroCities);

// Add "Budapest" to the euroCities array.
euroCities.push("Budapest");
console.log("cities - now with Budapest!", euroCities);

// Delete the second and third items from the euroCities array.
euroCities.splice(1, 2);
console.log("the list of capitals reduced:", euroCities);

// Create another variable named asianCities and assign an array to the variable. Clone the array asianCities.
const asianCities = ["Mumbai", "Tokyo", "Ulaanbaatar", "Beijing", "Astana", "Kuala Lumpur"];
const newAsianCities = asianCities.slice();

console.log("Asian cities array:", asianCities, "its copy:", newAsianCities);