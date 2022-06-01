const fruitList = [
    "apple",
    "banana",
    "tomato",
    "watermelon",
    "strawberry",
    "cherry",
    "coconut",
];

    result = [];
for(let i = 0 ; i<fruitList.length;i++){
result += `<li>${fruitList[i]}</li>`
}
document.write(result);