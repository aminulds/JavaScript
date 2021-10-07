// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');
// var rowSpace = lines.shift().split(' ');

var x1 = parseFloat(1.0);
var x2 = parseFloat(7.0);

var y1 = parseFloat(5.0);
var y2 = parseFloat(9.0);
var x = Math.pow((x2 - x1), 2);
var y = Math.pow((y2 - y1), 2);

console.log(Math.sqrt(x + y));