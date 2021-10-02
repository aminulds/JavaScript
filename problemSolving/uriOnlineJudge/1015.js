var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var rowSpace = lines.shift().split(' ');

var x1 = parseFloat(rowSpace.shift());
var x2 = parseFloat(lines.shift());

var y1 = parseFloat(rowSpace.shift());
var y2 = parseFloat(lines.shift());

var x = Math.pow((x2 - x1), 2);
var y = Math.pow((y2 - y1), 2);
var distance = x + y;
distance = Math.sqrt(distance).toFixed(4);
console.log(distance);