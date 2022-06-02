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

    result = [];
for(let i = 0 ; i<fruitList.length;i++){
result += `<li>${fruitList[i]}</li>`
}


newUl.innerHTML= result;
