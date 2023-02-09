//https://www.codewars.com/kata/56baeae7022c16dd7400086e
function phone(string, num) {
	string = string.split('\n');

	let search_result = [];
	string.map(el => el.includes(num) ? search_result.push(el) : "")

	if(search_result.length == 0) {
		result = (`Error => Not found: ${num}`)
		return result;
	}
	else if(search_result.length > 1) {
		result = (`Error => Too many people: ${num}`);
		return result;
	}
	else {
		search_result = search_result.toString();
		let number = search_result.match(num);
		search_result = search_result.replace(num,'');
		let name = search_result.match(/<.+>/);
		search_result = search_result.replace(name,'');
    	search_result = search_result.replace(/[+*\/$;:_?!,]/g,' ').trim();
		
    	let search = search_result.split('');
		for (let i = 0; i < search_result.length; i++){
			if(search[i] == ' ' && search[i+2] == ' ') {
				search[i] = '';
			}
		}
		if (search[search.length-2] == ' ') { 
		 	search[search.length-2] = '';
		 }
		search = search.join('').replace(/(\s\s)+/g, ' ');
    
		let result = `Phone => ${number[0]}, Name => ${name[0].replace(/[<>]/g,'')}, Address => ${search}`;
		return result;
	}
}