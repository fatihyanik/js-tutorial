// prototypal inheritance
const gritti = {
    location: 'Venice',
    stars: 5
}

// const danieli = {
//     location: 'Venice',
//     stars: 5,
//     restaurant: true
// }

// const cipriani = {
//     location: 'Venice',
//     stars: 5,
//     gym: true
// }
const danieli = Object.create(gritti);
danieli.restaurant = true; // own property of danieli
console.log(danieli.location); // inherited from its prototype gritti
danieli.location = 'Trieste';
console.log(danieli.location); // Trieste
console.log(gritti.location); // Venice
console.log(danieli.stars); // 5
gritti.location = 'Rome';
console.log(gritti.location); // Rome
console.log(danieli.location); // Trieste
console.log(danieli);

// prototypal inheritance
const ahmet = {
    location: 'Berlin',
    age: 34
}

const zeynep = Object.create(ahmet);
zeynep.person = true;
console.log(zeynep.location);
zeynep.location = 'Leipzig';
console.log(zeynep.location);
console.log(zeynep.age); // 34
ahmet.location = 'Rome';