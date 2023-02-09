//https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
function validParentheses(parens) {
	while (parens != parens.replace('()', '')) {
		parens = parens.replace('()', '') ;
	}
	return (!parens.length)
}	