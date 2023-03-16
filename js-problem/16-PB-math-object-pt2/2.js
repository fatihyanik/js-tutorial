const ranHexColGenerator = () => {
    let ranHexCol = Math.floor(Math.random() * 16777216);
    let Hex = "#"+ranHexCol.toString(16);
    console.log(Hex); 
}

ranHexColGenerator();