//https://www.codewars.com/kata/5287e858c6b5a9678200083c
function narcissistic(value) {
    let sum = 0;
    let values = Array.from(String(value)).map(i=>Number(i));
    let value_length = value.toString().length;
    for (var i = 0; i < value.toString().length; i++) 
        sum += Math.pow(values[i],value_length);
    return (sum==value);
}