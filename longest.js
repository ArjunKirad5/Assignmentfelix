/*Write a JavaScript function that accepts a string as a parameter and finds the longest 
word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/

function longest(string) {
    let words = string.split(' ');

    let longWord = '';
    for (let word of words) {
        if (word.length > longWord.length) {
            longWord = word;
        }
    }

    return longWord;
}

let inputString = 'This is the biggest name in the city';
let result = longest(inputString);
console.log(result); 