var math = require('mathjs');

console.log(math.max(2, 1, 4, 3));  
console.log(math.max([2, 1, 4, 3]));   
console.log(math.max([[2, 5], [4, 3], [1, 7]]));  
console.log(math.max(2.7, 7.1, -4.5, 2.0, 4.1));  
console.log(math.min(2, 1, 4, 3));   
console.log(math.min([2, 1, 4, 3]));  
console.log(math.min([[2, 5], [4, 3], [1, 7]]));  
console.log(math.min(2.7, 7.1, -4.5, 2.0, 4.1));   
console.log(math.mean(2, 1, 4, 3));  
console.log(math.mean([1, 2.7, 3.2, 4]));  
console.log(math.mean([[2, 5], [6, 3], [1, 7]]));   
console.log(math.median(5, 2, 7));  
console.log(math.median([3, -1, 5, 7]));  
console.log(math.sum(2, 1, 4, 3));  
console.log(math.sum([2, 1, 4, 3]));   
console.log(math.sum([[2, 5], [4, 3], [1, 7]])); 