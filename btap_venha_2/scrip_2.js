fetch("https://628b4592667aea3a3e2b48e5.mockapi.io/product")
  .then((response) => response.json())
  .then((data) => {
    $("#main").html();
    console.log(data);
    let newList = data
      .map((a) => {
        return ` 
     <tr class="item-${a.id}">
                  <td>${a.description}</td>
                  <td>${a.id}</td>
                  <td>${a.name}</td>
                  <td>${a.pice}</td>
                  <td><button onclick="fixItem_1(${a.id})" >update</button>
                  <button onclick="clickDele(${a.id})" class="btn_dele" id="btn_del">delete</button></td>
                  
              </tr>`;
      })
      .join(",")
      .replaceAll(/,/g, " ");
    document.querySelector("tbody").innerHTML = newList;
  });
function addItems() {
  const newMain8 = document.querySelector(".main_8");
  newMain8.style = "display:block";
}
let newInput_1 = document.getElementById("full-name");
  let newInput_2 = document.getElementById("full-name_2");
  let newInput_3 = document.getElementById("full-name_3");
    let idTing;
function fixItem_1(id) {
    idTing = id;
    document.querySelector(".main_9").style = "display:block" 
    fetch('https://628b4592667aea3a3e2b48e5.mockapi.io/product' + "/"+ id,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
    })
      .then(response => response.json())
      .then(data => {
        
          document.getElementById("newName").value = data.name;
         document.getElementById("newName2").value = data.description;
        document.getElementById("newName4").value = data.price
    });
  }

function offWindow() {
  const newMain8 = document.querySelector(".main_8");
  const newMain9 = document.querySelector(".main_9");
  newMain8.style = "display:none";
  newMain9.style = "display:none";
}

function printValue() {
  let newInput_1 = document.getElementById("full-name").value;
  let newInput_2 = document.getElementById("full-name_2").value;
  let newInput_3 = document.getElementById("full-name_3").value;
  let abcx = {
    name: newInput_1,
    description: newInput_2,
    price: newInput_3,
  };

  fetch("https://628b4592667aea3a3e2b48e5.mockapi.io/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(abcx),
  })
    .then((response) => response.json())
    .then(function () {
      // let courseItem2 = document.querySelector('.item-'+ id);
      // if(courseItem2){
      //     document.querySelector('tbody').append(courseItem2);
      // }
      window.location.reload();
    });
  document.querySelector(".main_8").style = "display:none";
}
function clickDele(id) {
  fetch("https://628b4592667aea3a3e2b48e5.mockapi.io/product" + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(function () {
      let courseItem = document.querySelector(".item-" + id);
      if (courseItem) {
        courseItem.remove();
      }
    });
}
function upDate(){
    fetch('https://628b4592667aea3a3e2b48e5.mockapi.io/product' + "/"+ idTing,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
    })
      .then(response => {
          window.location.reload();
       return response.json(
          
      )})

      .then(date=>{
          let newData = {
            name: document.getElementById("newName").value ,
            description: document.getElementById("newName2").value,
            price: document.getElementById("newName4").value,
          }
          putItems(newData);
      })
}


function putItems(obj){
    fetch("https://628b4592667aea3a3e2b48e5.mockapi.io/product" + "/" + idTing,{
        method:'PUT',
        headers: {
          'Content-Type': 'application/json'
        },

      body: JSON.stringify(obj)
    })
      .then(response => response.json())
}

function clickUpdate(){
    
    upDate()
    document.querySelector('.main_9').style = 'display:none';

}
