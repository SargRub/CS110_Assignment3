let num = 7;
let result = "";

while(num != 0)
{
    remainder = num % 2;
    result += remainder;
    num = (num - remainder) / 2;
}

let reversed = "";

for(let i = result.length-1; i >= 0; i--)
{
    reversed += result[i];
}

console.log(reversed);