let xOverlay = document.querySelector('.overlay');
function onBars(){
    xOverlay.classList.toggle('overlay');
}
function closeX(){
    xOverlay.classList.toggle('overlay');
}
let searchNav = doucument.querySelector('.search-nav')
let btnFocus = document.querySelectorBycla('.search-nav-all')
console.log(btnFocus)
function focusRender(){
    btnFocus.style='display: block'
    console.log(btnFocus)
}



const newfunc = (pa) => {
    pa();
}
const show = () =>{
    console.log("chay luuot 1")
}
const param = () => {
    console.log("chay roi luot 2")
}
newfunc(param);
show();




