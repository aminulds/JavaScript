var test = 'I am Aminul Islam. I wnat to become a "Web Developer".';
var text = 'I am Aminul Islam. I wnat to become a \"Web Developer\".';
var text = text.length;
text = 'I\'m Aminul';
text = 'Show \\ slash';
text = 'text\b text';
text = 'text\ntext';
text = 'text\tdfh';
text = 'text\vfdfdh';
text = "  Apple, Banana, Banana, Kiwi      ";
text = text.slice(7, 13);
text = text.slice(-12);
text = text.slice(2);
text = text.substring(6, 13);
text = text.substr(1, 4);
text = text.substr(7);
text = text.replace('Banana', 'Mango');
text = text.replace(/'banAnA'/i, 'Fruits'); //insensitive
text = text.replace(/Banana/g, 'Mango');
text = text.toUpperCase();
text = text.toLowerCase();
text = text.trim();

text = '6';
text = text.padStart(5, 1);
text = text.padEnd(3, 2);
text = 'aminul';
text = text.charAt(3);
text = text.charCodeAt(4);
text = text[5];

text = 'a, b, c, d, e';
text = text.split(','); // also can ' ', '|'

text = "Please locate where 'locate' occurs!";
text = text.indexOf('locate');
text = text.lastIndexOf('locate');
text = text.indexOf('locate', 12);
text = text.search('locate');
text = "The rain in SPAIN stays mainly in the plain";
text = text.match(/ain/g);
text = text.match(/ain/gi);
text = text.includes('rain');
text = text.startsWith('The');
text = text.endsWith('rain', 8);

text = `Aminul 

'Islam'`;
var firstName = 'Aminul';
var lastName = 'Islam';
var text = `Welcome ${firstName}, ${lastName}!`;
var price = 10;
var VAT = 0.25;
var total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

console.log(total);