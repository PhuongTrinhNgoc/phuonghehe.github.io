const fruitList = [
    "apple",
    "banana",
    "tomato",
    "watermelon",
    "strawberry",
    "cherry",
    "coconut",
];
const newUl =  document.querySelector("ul");

for(let i = 0 ; i<fruitList.length;i++){
    newUl.innerHTML += `<li>${fruitList[i]}</li>`
}