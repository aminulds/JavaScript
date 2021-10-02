var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var rowSpace1 = lines.shift().split(' ');

var A = parseFloat(rowSpace1.shift());
var B = parseFloat(rowSpace1.shift());
var C = parseFloat(rowSpace1.shift());

console.log('TRIANGULO:', (0.5 * A * C).toFixed(3));
console.log('CIRCULO:', (3.14159 * (C * C)).toFixed(3));
console.log('TRAPEZIO:', (0.5 * (A + B) * C).toFixed(3));
console.log('QUADRADO:', (B * B).toFixed(3));
console.log('RETANGULO:', (A * B).toFixed(3));