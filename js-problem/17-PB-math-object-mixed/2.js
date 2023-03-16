const countryPicker = () => {
    let countries = "Germany Spain Italy USA";
    countries = countries.split(" ");
    countryArr = countries[Math.floor(Math.random() * countries.length)];
    console.log(countryArr);
}

countryPicker();

const namePicker = () => {
    let names = "Alex Max Tommy";
    names = names.split(" ");
    namesArr = names[Math.floor(Math.random() * names.length)];
    console.log("Hello ", namesArr);
}

namePicker();

const numberPicker = () => {
    let numbers = "-1 7 -33 -8 9";
    numbers = numbers.split(" ");
    numbersArr = numbers[Math.floor(Math.random() * numbers.length)];
    absNumber = Math.abs(numbersArr);
    console.log(absNumber);
}

numberPicker();
