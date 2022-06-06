const fruitList = [
    "apple",
    "banana",
    "tomato",
    "watermelon",
    "strawberry",
    "cherry",
    "coconut",
];
const listFrui = document.querySelector('.fruit-list');
for (newList of fruitList){
    listFrui.innerHTML += `<li>${newList}</li>`
}

const newDiv = document.querySelector('.avatar-box');
const img = document.createElement("img");
newDiv.append(img);
img.className = 'img_box';
img.src = 'https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/284175477_5067259726662866_1242611069119944569_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=Clh_fkMxf2kAX_NPEcc&_nc_ht=scontent.fhan3-1.fna&oh=00_AT8AXzarR8iT3faWRVfde9xt2YhNV6KQmGOUZ4Azl8WPKg&oe=62A0A253'
img.style = `
height:300px;
margin-top:50px;
background: gray;
`
document.title = 'hehehe';
const h1 = document.createElement("h1");
newDiv.before(h1);
const video = document.createElement("video");
const body = document.querySelector("body")
body.prepend(video);

