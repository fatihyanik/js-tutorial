//* 1. Array Destructuring
// Declare the variables fruit, vegetable, food. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to food). Use array destructuring assignment to complete this task.

let [fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];

console.log(fruit, vegetable, food); // banana cucumber [ 'bread', 'cakes', 'pizza' ]


//* 2.Object Destructuring
// Create an object which contains key-value pairs of names and the respective halloween costume e.g. fran: "witch". Assign each key pair value to corresponding variable. Print out the object values.

let { emma, viktor, angelina, veroniki, tim } = { emma: 'Fae', viktor: 'Beetlejuice', angelina: 'Marilyn Monroe', veroniki: 'Catwoman', tim: 'Vampire Eric' };

console.log(emma, viktor, angelina, veroniki, tim); // Fae Beetlejuice Marilyn Monroe Catwoman Vampire Eric


//* 3. Parameters: Object Destructuring
// Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.

const badSeeds = {
	name: 'Nick Cave and the Bad Seeds',
	collective: true,
	gender: null,
	origin: 'Australia',
	genres: ['post-punk', 'experimental rock', 'minimal sound', 'ballads'],
	greatestHits: ['Mercy Seat', 'Where the Wild Roses Grow', 'Red Right Hand', 'Jubilee Street']
}

// Then, create a function to display all of the band/musician's data.
// Example:
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.

const info = band => {
	let { name, collective, gender, origin, genres, greatestHits} = band;

	return `${name} is a ${collective ? 'band' : 'musician'} from ${origin}. ${collective ? 'They play' : (gender === 'female' ? 'She plays' : (gender === 'male' ? 'He plays' : 'They play'))} in the following genres: ${genres.join(', ')}, and ${gender === 'female' ? 'her' : (gender === 'male' ? 'his' : 'their')} best-known hits are ${greatestHits.join(', ')}.`;
}

console.log(info(badSeeds));
// Nick Cave and the Bad Seeds is a band from Australia. They play in the following genres: post-punk, experimental rock, minimal sound, ballads, and their best-known hits are Mercy Seat, Where the Wild Roses Grow, Red Right Hand, Jubilee Street.