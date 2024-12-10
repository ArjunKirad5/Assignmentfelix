/*Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223*/

let result = 0;
let number = 56789;

result = Number(String(number).split('').reverse().join(''));

console.log("Reversed number is : "+result);