// Post API
const divContainer = document.querySelector('.post');
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => displayPosts(json))
function displayPosts(posts){
    const postTitles = posts.map(post => post.title);
    for (let i = 0; i < 10; i++){
        const title = postTitles[i];
        const p = document.createElement('p');
        p.innerHTML = title;
        divContainer.appendChild(p);   
    } 
}

// Activity API
const boaredActivity = document.getElementById('boaredActivity');
const activityData = (apiLink) => {
    fetch(apiLink)
    .then(res => res.json())
    .then(data => {
    boaredActivity.textContent = data.activity;
    });
}
activityData('http://www.boredapi.com/api/activity');

//Random Name API
const randomName = document.getElementById('randomName');
const nameAPI = () => {
    fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data => {
    const name = data.results[0].name;
    const fullName = `${name.title} ${name.first} ${name.last}`;
    randomName.innerHTML = fullName;
    })
}
nameAPI();

