const grade = 12;
let letter = "";
let result = "";
if(97 <= grade && grade <= 100)
{
    letter = "A+";
}
else if(93 <= grade && grade <= 96)
{
    letter = "A";
}
else if(90 <= grade && grade <= 92)
{
    letter = "A-";
}
else if(87 <= grade && grade <= 89)
{
    letter = "B+";
}
else if(83 <= grade && grade <= 86)
{
    letter = "B";
}
else if(80 <= grade && grade <= 82)
{
    letter = "B-";
}
else if(77 <= grade && grade <= 79)
{
    letter = "C+";
}
else if(73 <= grade && grade <= 76)
{
    letter = "C";
}
else if(70 <= grade && grade <= 72)
{
    letter = "C-";
}
else if(67 <= grade && grade <= 69)
{
    letter = "D+";
}
else if(63 <= grade && grade <= 66)
{
    letter = "D";
}
else if(60 <= grade && grade <= 62)
{
    letter = "D-";
}
else if(0 <= grade && grade < 60)
{
    letter = "F";
}
switch(letter)
{
    case 'A+':
    case 'A':
    case 'A-':
    case 'B+':
    case 'B':
    case 'B-':
    case 'C+':
    case 'C':
    case 'C-':
        result = "You passed!";
        break;
    default:
        result = "You failed!";

    
}
console.log("Your grade is " + grade + " which corresponds to " + letter + ". " + result);