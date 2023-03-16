//constructor functions
const drake = {
    rooms: 227,
    booked: 37,
    bars: 3,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
}
console.log(drake);

const langham = {
    rooms: 301,
    booked: 37,
    bars: 2,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
}
console.log(langham);

// constructor functions are regular functions invoked with the "new" keyword
// 2 characteristics:
// 1. their names begin with capital letters (convention)
// 2. they are executed with the "new" keyword
function Hotel(rooms, booked, bars) {
    // this = {}
    this.rooms = rooms;
    this.booked = booked;
    this.bars = bars;
    // this.checkAvailability = function() {
    //     return this.rooms - this.booked;
    // },
    this.available = this.rooms - this.booked;
    // return this;
}
const drake1 = new Hotel(227, 37, 3);
Hotel.prototype.checkAvailability = function() {
    return this.rooms - this.booked;
}
console.log(drake1.booked);
drake.city = 'Chicago';
console.log(drake1);
console.log(drake1.checkAvailability());

// an object that doesn't inherit any properties
const myObj = Object.create(null); // myObj will contain only own properties