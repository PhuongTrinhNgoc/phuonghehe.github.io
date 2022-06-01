const myUl = document.querySelectorAll("ul");

for(let i=0;i<myUl.length;i++){
    console.log(myUl[i].firstElementChild.textContent = "first");
    console.log(myUl[i].lastElementChild.textContent = "last"); 
}
