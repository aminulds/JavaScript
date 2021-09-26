const cars = ['Saab', 'Volvo', 'BMW'];
cars[1] = 'Toytoo';
let favCar = cars[2];
console.log(cars);
console.log(favCar);
console.log(typeof favCar); //String
console.log(typeof cars); //Object

var person = ['Aminul', 'Islam', 21]; //Array
console.log(person[0]);
var person = {firstName: "Aminul", lasName: "Islam", age: 21} //Object
console.log(person.lasName);
console.log(person.length);

var letter = ['g', 'x', 'a', 'b', 'c']
console.log(letter.sort());
letter.push('S');
console.log(letter);
letter.pop();
console.log(letter);
console.log(letter);
letter.shift()
console.log(letter);
letter.unshift('z');
console.log(letter);

const point = new Array(3,4,5);
console.log(typeof point);
console.log(Array.isArray(letter));
console.log(letter instanceof Array);
console.log(letter.toString());
console.log(letter.join(1));
letter.splice(2, 1, 'xx', 'bb');

var names = ['a', 'x', 'c'];
var age = [21, 20, 23];
var man = names.concat(age);
console.log(man);
var nAge = man.slice(2);
names.sort();
console.log(names);
names.reverse();
console.log(names);
console.log(Math.max(poin));
