//use json.parse() to ensure onluy json is accepted
var regiments = json.parse(reqimentsJSON);
var num = 0.1 + 0.2;
console.log(num); //0.30000000004

// toFixed() method allow you to select the exact amount of decimal places 
// to dipaly
console.log(num.toFixed(1)); //0.3
console.log(num.toFixed(2)); //0.30

//parsefloat() turns strings with decimals into numbers
function tax(price, percent) {
	return parseFloat((price * percent / 100).toFixed(2));
}

var mailedGlove = 9.85,
	armorTax = 0.75;
var total = mailedGlove + tax(mailedGlove, armorTax);

//parseInt() convert numerical strings without rounding
var num = 9.85;
console.log(parseInt(num)); //9

//When a browser version or user input is not reliable,
//make sure to let parseInt() what number systrm you expect.
var userAge = "021";
parseInt("021", 10);