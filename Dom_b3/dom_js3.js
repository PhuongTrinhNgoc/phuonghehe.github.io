// const myUl = document.querySelectorAll("ul");
// for (let i = 0; i < myUl.length; i++) {
//   console.log((myUl[i].firstElementChild.textContent = "first"));
//   console.log((myUl[i].lastElementChild.textContent = "last"));

// };

// const myUl = document.querySelectorAll("ul");
// for (let i = 0; i < myUl.length; i++) {
//   myUl[i].firstElementChild.textContent = "first";
//   myUl[i].lastElementChild.textContent = "last";

//   const firstChild = myUl[i].firstElementChild;
//   const lastChild = myUl[i].lastElementChild;
//   myUl[i].append(firstChild);
//   myUl[i].prepend(lastChild);
// }

// const box = document.querySelector(".box");
//     let with1 = 100;
// function playWith(){
//     with1 += 10 + "px";
// }

// const playTime = document.querySelector(".clock");
 
 
//  function aClock(){
//     let timeNow = new Date();
//     const timeStr = now.tolocaleString("vi",)
//     playTime.textContent = ;
//  }
//  console.log(aClock())

const cities = [
    {id:1,
    locale:"vi",
    name:"ha noi"},
    {id:2,
    locale:"us",
    name:"new york"},
    {id:3,
    locale:"jp",
    name:"tokto"}
]

const select = doucument.querySelector("#city");
function createOptions(city){
        const option = document.querySelector("cites");
        option.textContent = city.name;
        option.value = city.locale;
        return option;
};
function renderOptions(cities){
    for(let i = 0;i<cities.lenght;i++){
        const option = createOptions(city);
        select.append(option);
}
}
renderOptions(cities);

// const clock = doucument.querySelector(".clock");
// function timeN(){
//     const now = new Date();
//     const timeSt = now.toLocaleDateString();
//     clock.textContent = timeSt;
// }
// timeN();