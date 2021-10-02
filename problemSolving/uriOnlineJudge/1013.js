var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var rowSpace = lines.shift().split(' ');

var a = parseInt(rowSpace.shift());
var b = parseInt(rowSpace.shift());
var c = parseInt(rowSpace.shift());

var ab = (a + b + Math.abs(a - b)) / 2;
var abc = (ab + c + Math.abs(ab - c)) / 2;
console.log(abc, 'eh o maior');