const colors = ["red", 9999, "green", "blue", 777, "yellow", "black", "purple", "brown"];

const ranColorPicker = (e) => {
    let randomColor = e[Math.floor(Math.random() * e.length)];
    if (isNaN(randomColor)) {
        console.log(randomColor);
    } else {
        randomColor = e[randomColor];
        randomColor = " "; 
        console.log(randomColor);
    }
}

ranColorPicker(colors);