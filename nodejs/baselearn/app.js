var circle = require('./circle.js');
console.log('The area of a circle of radius 5 is ' + circle.area(5));
console.log('The circumference of a circle of radius 5 is ' + circle.circumference(5));

var square = require('./square.js');
var mySquare = square(4);
console.log('The area of my square is ' + mySquare.area());