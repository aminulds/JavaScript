
let h1 = document.getElementById('heading'); //variable
    h1.style.color = 'green';

let blogs = document.getElementsByClassName('blog'); //variable
for(i = 0; i < blogs.length; i++){
    let blog = blogs[i];
    blog.style.backgroundColor = 'lightgray';
    // blog.style.border = '2px solid gray';
    blog.style.marginTop = '10px';
    blog.style.padding = '10px';
    blog.style.borderRadius = '10px';
}

let h2 = document.getElementsByTagName('h2'); //variable
for(i = 0; i < h2.length; i++){
    let element = h2[i];
    element.style.color = '#ad5e99';
    element.style.textAlign = 'center';
}

//added special article item
const special = document.getElementById('special');
const p = document.createElement('p');
p.innerHTML = 'Hello I am from JavaScript';
special.append(p);

const changeArticleHeading = document.querySelector('.blog h2');
changeArticleHeading.innerHTML = 'Changed Heading';


