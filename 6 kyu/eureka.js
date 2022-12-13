//https://www.codewars.com/kata/5626b561280a42ecc50000d1
function sumDigPow(a, b) {
    let result = [];
    for (let i = a; i <= b; i++) {
        let numbers = i.toString().split('');
        let eureka = 0;
        for (let i = 0; i < numbers.length; i++) {
            eureka += Math.pow(numbers[i], i+1);
        }
        if (eureka == i) { 
            result.push(i);
        }
    }
    return result;
}