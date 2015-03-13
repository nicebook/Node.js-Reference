var math = require('mathjs');

var cm = math.unit('5 cm');
var mm = math.unit('2.1 mm');
var km = math.unit('18 km');
var km2 = math.unit('2.1 km');
var km3 = math.unit('500m');
var divide1 = [[7, -6], [13, -4]];
var divide2 = [[1, 2], [4, 3]];
var dotval1 = [[9, 5], [6, 1]];
var dotval2 = [[3, 2], [5, 2]];    
var dotval3 = [[1, 2], [4, 3]];
var multiply1 = [[1, 2], [4, 3]];
var multiply2 = [[1, 2, 3], [3, -4, 7]];
function isOdd(x) {
	return math.mod(x, 2) != 0;
}    
console.log(math.abs(3.5));  
console.log(math.abs(-4.2));  
console.log(math.abs([3, -5, -1, 0, 2]));  
console.log(math.add(2, 3));   
console.log(math.add([1, 2, 3], 4));   //[5, 6, 7]
console.log(math.add(cm, mm));   //Unit 52.1 mm
console.log(math.ceil(3.2));   
console.log(math.ceil(-4.7));   
console.log(math.ceil([3.2, 3.8, -4.7]));  //[4, 4, -4]
console.log(math.cube(2));  
console.log(math.cube([1, 2, 3, 4]));   //[1, 8, 27, 64]
console.log(math.divide(2, 3));   // 0.6666666666666666
console.log(math.divide(divide1, divide2));  //[[-9, 4], [-11, 6]]
console.log(math.divide(km, 4.5));   // 4 km
console.log(math.dotDivide(2, 4));   
console.log(math.dotDivide(dotval1, dotval2));  // [[3, 2.5], [1.2, 0.5]]
console.log(math.divide(dotval1, dotval2));  // [[1.75, 0.75], [-1.75, 2.25]]
console.log(math.dotMultiply(2, 4));   
console.log(math.dotMultiply(dotval1, dotval2));   // [[27, 10], [30, 2]]
console.log(math.multiply(dotval1, dotval2));   // [[52, 28], [23, 14]]
console.log(math.dotPow(2, 3));   
console.log(math.dotPow(dotval3, 2));   // Array [[1, 4], [16, 9]]
console.log(math.pow(dotval3, 2));  // Array [[9, 8], [16, 17]]
console.log(math.exp(2));   // 7.3890560989306495
console.log(math.exp([1, 2, 3]));   // [2.718281828459045, 7.3890560989306495, 20.085536923187668]
console.log(math.fix(3.8));  
console.log(math.fix(-4.7));   
console.log(math.fix([3.2, 3.8, -4.7]));   //[3, 3, -4]
console.log(math.gcd(8, 12));  
console.log(math.gcd(25, 15, -10));   
console.log(math.gcd([8, -4], [12, 6]));   // [4, 2]
console.log(math.lcm(4, 6));  
console.log(math.lcm(6, 21, 5));   
console.log(math.lcm([4, 6], [6, 21]));   // [12, 42]
console.log(math.log(3.5));   // 1.252762968495368
console.log(math.log(10000, 10));   
console.log(math.log(10000) / math.log(10));  
console.log(math.log(1024, 2));   
console.log(math.log10(0.00001));   
console.log(math.log10(10000));  
console.log(math.mod(8, 3));   
console.log(math.mod(11, 2));   
console.log(isOdd(3));  
console.log(math.multiply(4, 5.2));  
console.log(math.multiply(multiply1, multiply2));   // Array [[7, -6, 17], [13, -4, 33]]   
console.log(math.multiply(3, km2));   // 6.3 km
console.log(math.norm([3, 4], 2));  
console.log(math.norm([3, 4]));   
console.log(math.norm([[1, 2], [3, 4]], 1));   
console.log(math.norm([[1, 2], [3, 4]], 'inf'));  
console.log(math.norm([[1, 2], [3, 4]], 'fro'));   // 5.477225575051661
console.log(math.nthRoot(9, 2));   //3^2 == 9
console.log(math.nthRoot(9));  
console.log(math.nthRoot(64, 3));   
console.log(math.pow(2, 3));   
console.log(math.pow([[1, 2], [4, 3]], 2));   // [[9, 8], [16, 17]]
console.log(math.round(3.2));   
console.log(math.round(-4.7));  
console.log(math.round(math.pi, 3));   //3.142
console.log(math.round([3.2, 3.8, -4.7]));   //[3, 4, -5]
console.log(math.sign(3.5));   
console.log(math.sign(-4.2));   
console.log(math.sign(0));  
console.log(math.sign([3, 5, -2, 0, 2]));  //[1, 1, -1, 0, 1]
console.log(math.sqrt(25));   
console.log(math.sqrt(-4));   
console.log(math.square(2));  
console.log(math.square([1, 2, 3, 4]));   //[1, 4, 9, 16]
console.log(math.subtract(5.3, 2));   
console.log(math.subtract([5, 7, 4], 4));  //[1, 3, 0]
console.log(math.subtract(km2, km3));  // 1.6 km
console.log(math.unaryMinus(3.5));   
console.log(math.unaryMinus(-4.2));  
console.log(math.unaryPlus(3.5));   
console.log(math.unaryPlus(-4.2));    
console.log(math.xgcd(8, 12));  
console.log(math.xgcd(36163, 21199));  
