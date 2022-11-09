const arr = [1, 2, 3];
const reversed_arr = [];
for(let i = 0; i < arr.length; i++)
{
    reversed_arr[i] = arr[arr.length-1-i];
}
console.log(reversed_arr);