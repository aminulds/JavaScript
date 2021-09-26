//While
var num = 0;
while (num < 10) {
    console.log(num);
    num++;
}

// For
for (var i = 0; i <= 10; i++){
    console.log(i);
}

var ages = [20, 21, 22, 24, 21, 34];
for (var i = 0; i < ages.length; i++){
    console.log(ages[i]);
}

var friends = ['Arzu', 'Talha', 'Riaz', 'Jui'];
for (var i = 0; i < friends.length; i++){
    console.log(friends[i]);
}

// Switch

switch ('RA') {
    case 'D':
        console.log("Dhaka");
        break;
    case 'R':
    case 'RA':
        console.log('Rajshahi & Rangpur');
        break;
    case 'K':
        console.log("Rangpur");
        break;
    case 'M':
        console.log("Maymnosingh");
        break;
    case 'S':
        console.log("Shylet");
        break;
    case 'C':
        console.log("Chattogram");
        break;
    case 'B':
        console.log("Barishal");
        break;
    default:
        console.log('Not Valid!');
        break;
}