const randomCharPicker = () => {
    let chrs = "ABCDEFGH";
    let randomString = "";
    chrsPick = Math.floor(Math.random() * chrs.length);
    randomString += chrs.substring(chrsPick, chrsPick + 1);
    console.log(randomString);
}

randomCharPicker();


const randomCharPicker2 = () => {
    let sy = "%& § !* @= ";
    sy = sy.replace(/\s/g, "");
    let randomString = "";
    chrsPick = Math.floor(Math.random() * sy.length);
    randomString += sy.substring(chrsPick, chrsPick + 1);
    console.log(randomString);
}

randomCharPicker2();

const randomRGB = () => {
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let background = `rgb(${r}, ${b}, ${g})`;
    console.log(background);
}

randomRGB();