var math = require('mathjs');

function isPositive (x) {
	return x > 0;
}
function sortByLength (a, b) {
	return a.length - b.length;
}    
console.log(math.to(math.unit('2 inch'), 'cm'));   
console.log(math.to(math.unit(16, 'bytes'), 'bits'));   
console.log(math.clone(3.5));    
console.log(math.clone([[1, 2], [3, 4]]));   
console.log(math.clone("hello world"));    
console.log(math.filter([6, -2, -1, 4, 3], isPositive));   
console.log(math.filter(["23", "foo", "100", "55", "bar"], /[0-9]+/));    
math.forEach([1, 2, 3], function(value) {
	console.log(value);
});    
console.log(math.sort([5, 10, 1]));   
console.log(math.sort(['C', 'B', 'A', 'D']));  
console.log(math.sort(['Langdon', 'Tom', 'Sara'], sortByLength));   
console.log(math.typeof(3.5)); 
console.log(math.typeof('hello world'));  
console.log(math.typeof(math.unit('45 deg')));  
console.log(math.print('Lucy is $age years old', {age: 0})); 
console.log(math.print('The value of pi is $pi', {pi: math.pi}, 10));  
console.log(math.print('Hello $user.name! The date is $date', {
	user: {
		name: 'Mary',
	},
	date: new Date(2013, 2, 23).toISOString().substring(0, 10)
})); 
console.log(math.format(6.4));  
console.log(math.format(1240000));  
console.log(math.format(1/3, 3));  
console.log(math.format(21385, 2));  
console.log(math.format(12.071, {notation: 'fixed'}));  
console.log(math.format(2.3,    {notation: 'fixed', precision: 2}));  
console.log(math.format(52.8,   {notation: 'exponential'}));  