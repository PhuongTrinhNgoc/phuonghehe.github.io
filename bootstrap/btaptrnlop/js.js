
var carts = [
    { id: 1, name: 'product 1', qty: 2, price: 9 },
    { id: 2, name: 'product 2', qty: 1, price: 7 },
    { id: 3, name: 'product 3', qty: 1, price: 6 },
];


function showModal() {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
        keyboard: false
    })
    myModal.show();
    function offSp(){
        document.getElementById('spin').style = "display:none"
    }
    setTimeout(offSp, 2000)
}

function render(carts){
 var newCarts =carts.map(a=>{
    return `<div class="row">
        <div class="col-6">
            <div class="row">
                <div class="col-4">
                img
                    <img src="" alt="">
                </div>
                <div class="col-8">
                    ${a.name}
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="row">
                <div class="col-4">
                    ${a.price}
                </div>
                <div class="col-4">
                <input onClick= "clickId(${a.id})" onchange="changeV(event)" name="input" id="id${a.id}" value="${a.qty}" type="number" style="width: 50px;">         
                </div>
                <div id="tol${a.id}" class="col-4">
                    ${a.price * a.qty}
                </div>
            </div>

    </div>`   
}
).join(",")
.replaceAll(/,/g, " ");
document.getElementById('content').innerHTML = newCarts;



}
render(carts)
let idTing = 0;
function clickId(id){
  idTing = id
}

function changeV(e){
    let newArr =  carts.map(a=>{
        if (a.id == idTing) {
           a.qty = e.target.value
       }
       return a
      }
      )
 render(newArr)
 let totalMoney = newArr.reduce((a,b)=>{
    return a + b.price * b.qty
},0)
document.getElementById('tt').textContent = totalMoney
}




document.getElementById('inner').innerHTML = carts.length + ` <i class="fa-solid fa-cart-shopping" ></i>`


const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
function closeW(){
    document.getElementsByClassName("modal-content").style = "display:none"
}
