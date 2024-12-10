/*Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,do,dog,o,og,g
*/

let combinations = (str) => {
    
    let totalLength = str.length;
    
    let result = [];
    
    let currentIndex = 0;
    
    while (currentIndex < totalLength) {
        let char = str.charAt(currentIndex);
        let x;
        let arrTemp = [char];
        for (x in result) {
            arrTemp.push("" + result[x] + char);
        }
        result = result.concat(arrTemp);
        currentIndex++;
    }
    return result;
};
console.log(combinations("dog"));