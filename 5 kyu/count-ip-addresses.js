//https://www.codewars.com/kata/526989a41034285187000de4/solutions/javascript
function ipsBetween(start, end) {
    let startArr = start.split(".").map(Number),
        endArr = end.split(".").map(Number);
    let startIp2bit = (startArr[0] * (256 ** 3)) + (startArr[1] * (256 ** 2)) + (startArr[2] * 256) + startArr[3] + 1,
        endIp2bit = (endArr[0] * (256 ** 3)) + (endArr[1] * (256 ** 2)) + (endArr[2] * 256) + endArr[3] + 1;
    return(endIp2bit - startIp2bit);    
}