let counter = 0;
const numLines = 5;
const character = "+";
let character_line = "";

while(counter < numLines){
    character_line += character;
    counter++;
}
counter = 0;
while(counter < numLines){
    console.log(character_line);
    counter++;
}

