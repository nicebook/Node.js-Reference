var math = require('mathjs');

console.log(math.eval('2 * (3 + 4)'));        
console.log(math.eval('[[1,2],[3,4]]'));        
console.log(math.eval('max(2, 1, 5)'));    
console.log(math.eval('a=2; b=3; a*b')); 
console.log(math.eval('[1,2;3,4]')); 
console.log(math.eval('a=2 \n b=3 \n a*b')); 
console.log(math.eval('4 + 5')); 
console.log(math.eval('+"4"')); 
console.log(math.eval('7 - 3')); 
console.log(math.eval('-4')); 
console.log(math.eval('2 * 3')); 
console.log(math.eval('[1,2,3] .* [1,2,3]')); 
console.log(math.eval('6 / 2')); 
console.log(math.eval('[9,6,4] ./ [3,2,2]')); 
console.log(math.eval('8 % 3')); 
console.log(math.eval('2 ^ 3'));  
console.log(math.eval('[2,3] .^ [3,3]')); 
console.log(math.eval('[[1,2],[3,4]]')); 
console.log(math.eval('5!')); 
console.log(math.eval('a = 5')); 
console.log(math.eval('15 > 100 ? 1 : -1')); 
console.log(math.eval('1:4')); 
console.log(math.eval('2 inch to cm')); 
console.log(math.eval('2 == 4 - 2')); 
console.log(math.eval('2 != 3')); 
console.log(math.eval('2 < 3')); 
console.log(math.eval('2 > 3'));  
console.log(math.eval('4 <= 3')); 
console.log(math.eval('2 + 4 >= 6'));  
