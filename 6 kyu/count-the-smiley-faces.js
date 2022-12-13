//https://www.codewars.com/kata/583203e6eb35d7980400002a
function countSmileys(arr) {
    var result = arr.toString().match(/(:|;)(D|-D|~D|\)|-\)|~\))/g);
    return result == null ? 0 : result.length;
}