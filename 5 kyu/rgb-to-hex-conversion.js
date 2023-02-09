https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function rgb(r, g, b){
    return [r,g,b].map( x => 
        ( (x <= 0) ? "00" : ( (x > 255) ? "FF" : (x < (16)) ? "0" + x.toString(16).toUpperCase() : x.toString(16).toUpperCase() ) )
    ).join('');
}