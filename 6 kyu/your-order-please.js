//https://www.codewars.com/kata/55c45be3b2079eccff00010f
function order(words) {
    if (words === '') return words;
    else {
        let arrayOfStrings = words.split(" "),
            arrayOfNumbers = [];
        for (let i = 0; i < arrayOfStrings.length; i++) {
            arrayOfNumbers[i] = parseInt(arrayOfStrings[i].match(/\d+/));
        }
        for (let i = 0; i < arrayOfNumbers.length-1; i++) {
            for (let j = 0; j < arrayOfNumbers.length-1-i; j++) {
                if (arrayOfNumbers[j+1] < arrayOfNumbers[j]) {
                    let t = arrayOfStrings[j+1]; 
                    arrayOfStrings[j+1] = arrayOfStrings[j]; 
                    arrayOfStrings[j] = t; 
                    let t2 = arrayOfNumbers[j+1]; 
                    arrayOfNumbers[j+1] = arrayOfNumbers[j]; 
                    arrayOfNumbers[j] = t2; 
                }
            }
        }
        console.log(arrayOfNumbers);
        console.log(arrayOfStrings.join(" "));
        return arrayOfStrings.join(" ");
    } 
}