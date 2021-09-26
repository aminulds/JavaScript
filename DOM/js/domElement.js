let varName = document.getElementById('id');
let varName = document.getElementsByTagName('p');
let varName = document.getElementsByClassName('intro');

//div id and then get all child p in main id
const x = document.getElementById('main');
const y = x.getElementsByTagName('p');


//Query selector get css selector
let varName = document.querySelectorAll('p.intro'); //select all matches selector
let varName = document.querySelector('p.intro') //select first matches selector

let varName = document.getElementById('intro'); //get document object and extract each element
for (let i = 0; i < varName.length; i++) {
    const name = varName[i];
    console.log(name);
}

// document.body
// document.documentElement
// document.embeds
// document.forms
// document.head
// document.images
// document.links
// document.scripts
// document.title

