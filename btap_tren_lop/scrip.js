// // chọn ra thẻ đầu tiên khớp với bộ chọn dc cung cấp
// const h1 = document.querySelector(selectors: ".heading");

// // API của node
// h1.textContent = "hello"

// // API của element
// h1.innerText = "sa"

// // API của

// const nodelement = document.querySelector (".para");

// const content = nodelement.innerText;

// const words = content.split(" ");
// let count = 0;
// for (let i = 0; i < words.length;i++){
//     const word = words[i];
//     if(word.length >= 8){
//         count++;
//         words[i] = `<mark>${word}</mark>`;
//     }
// }
// const newContent = words.join(" ");
// p.innerHTML = newContent;
// document.title = count

//     document.getElementById('');

// function listAdd(event){
// // console.log(event.target.value);
// if(event.target.value == 'ha-noi'){
//     document.getElementById('huyen').innerHTML=
//     `<select name="huyen1" id="huyen">
//         <option value="hai-ba-trung" >ha noi 1</option>;
//         <option value="abc" >ha noi 2</option>
//     </select>`
// }

// else if(event.target.value== 'hai-phong'){
//     document.getElementById('huyen').innerHTML=
// `<select name="huyen1" id="huyen">
// <option value="hai-phong-1" >hai phong 1</option>;
// <option value="hai-phong-2" >hai phong 2</option>
// </select>`
// }
// }
// function listH(event){
//     // console.log(event.target.value);
//     if(event.target.value == 'hai-phong-2'){
//         document.getElementById('quan').innerHTML=
//         `<select name="quan1" id="quan">
//         <option>hai phong city-1</option>;
//         <option>hai phong city-2</option>
//     </select>`
//     }
//     if(event.target.value == 'hai-phong-1'){
//         document.getElementById('quan').innerHTML=
//         `<select name="quan1" id="quan">

//         <option>ố zề</option>;
//         <option>ối dời ôi</option>
//     </select>`
//     }
//     if(event.target.value == 'hai-ba-trung'){
//         document.getElementById('quan').innerHTML=
//         `<select name="quan1" id="quan">
//         <option>hi</option>;
//         <option>hello</option>
//     </select>`
// }
// if(event.target.value == 'abc'){
//     document.getElementById('quan').innerHTML=
//     `<select name="quan1" id="quan">
//     <option>ha noi 2 - 2</option>;
//     <option>ha noi 2-3</option>
// </select>`
// }
// };
//      const nodeTp = document.querySelector('.text_tp')
//       const nodeBtn = document.querySelector(".subbit_cl");
//       nodeBtn.addEventListener("click", handlSubmid);

//       function handlSubmid(event) {
//         event.preventDefault();
//         let tinh_1 = document.forms["addR"].tinh;

//         let quan_1 = document.forms["addR"].quan;
//         console.log(quan_1)
//         let huyen_1 = document.forms["addR"].huyen;

//       nodeTp.innerHTML = `Thanh Pho : ${tinh_1.value} -----
//        Huyen: ${huyen_1.value}---phuong: ${quan_1.value}`;

//       }

//   let myClass = [
//       {name:'phuong', diem:5,ketqua: "tb",sdt:1},
//       {name:'phuon', diem:6,ketqua: "tbk",sdt:2},
//       {name:'phong', diem:7,ketqua: "k",sdt:3},
//       {name:'phu', diem:8,ketqua: "g",sdt:4}
//   ];

// const myInput = document.querySelector('#tbody');

//   let newClass = myClass.map(a => {
//       return `<tr>
//       <td>${a.name}</td>
//       <td>${a.sdt}</td>
//       <td>${a.diem}</td>
//       <td>${a.ketqua}</td>
//   </tr>`
//   });

//   myInput.innerHTML = newClass

//   const xulyInput = (e) => {
//       let b = e.target.value;
//     let seclec =  myClass.filter((a)=>
//     {
//         a.diem>b
//     })

//   myInput.innerHTML  =  seclec.map(a => {
//         return `<tr>
//         <td>${a.name}</td>
//         <td>${a.sdt}</td>
//         <td>${a.diem}</td>
//         <td>${a.ketqua}</td>
//     </tr>`
//     });

//   }

let listCty = [
  {
    nameWord: "Nhân viên lái xe cho văn phòng",
    name: "TNHH công nghệ",
    luong: {
      min: 8,
      max: 12,
    },
    adrees: "Đà Nẵng",
  },
  {
    nameWord: "Phó Giám đốc kinh doanh",
    name: "Công Ty CP XNK Hóa Chất & Thiết Bị Kim Ngưu",
    luong: {
      min: 20,
      max: 30,
    },
    adrees: "Cần Thơ",
  },
  {
    nameWord: "Cửa Hàng trưởng - Manager ",
    name: "Dalat Hasfarm",
    luong: {
      min: 12,
      max: 15,
    },
    adrees: "Hồ Chí Minh",
  },
  {
    nameWord: "Quản lý và Giám sát An Ninh - Cameraman  ",
    name: "Wipro Consumer Care Vietnam",
    luong: {
      min: 7,
      max: 10,
    },
    adrees: "Bình Dương",
  },
  {
    nameWord: "Chuyên VIÊN TƯ VẤN DỰ ÁN [QUẬN 2]  ",
    name: "Công Ty TNHH Thương Mại Giải Pháp Ưu Việt",
    luong: {
      min: 12,
      max: 20,
    },
    adrees: "Hồ Chí Minh",
  },
  {
    nameWord: "Nhân VIÊN KINH DOANH SHOWROOM [QUẬN 7]  ",
    name: "Công Ty TNHH Thương Mại Giải Pháp Ưu Việt",
    luong: {
      min: 8,
      max: 18,
    },
    adrees: "Hồ Chí Minh",
  },
];

document.querySelector(".body").innerHTML = listCty
  .map((a) => {
    return `<div class="listW">
        <h2> ${a.nameWord} </h2>
        <p> ${a.name} </p>

               <p> ${a.luong.min} tr</p>
              <p> ${a.luong.max} tr</p>
               <p> ${a.adrees} </p></div>
               `;
  })
  .join(",")
  .replaceAll(/,/g, " ");

let luong = [3, 5, 7, 10, 15, 20, 30, 40, 50, 60, 70];

// let val =[3,5 , 7, 10,15,20,30,40,50,60,70];

let rank = [
  "Sinh viên/thực tập sinh",
  "Mới tốt ngiệp",
  "Nhân viên",
  "Trưởng nhóm/giám sát",
  "Quản lý",
  "Quản lý cấp cao",
  "Điều hành cấp cao",
];

let style = [
  "nhân viên chính thức",
  "tạm thời/dự án",
  "thời vụ/nghề tự do",
  "thực tập",
];

const newWage = document.getElementById("select-1");
const newVal = document.getElementById("select-2");
const newRank = document.getElementById("select-3");
const newStyle = document.getElementById("select-4");

const resut= document.querySelector(".body");

let newWage2 = luong.map((a) => {
  return `<option value=${a}>từ ${a}.000.000</option>`;
});

newWage.innerHTML += newWage2;
let newRank2 = rank.map((b) => {
  return `<option value=${b}>${b}</option>`;
});
newRank.innerHTML += newRank2;

let newStyle2 = style.map((b) => {
  return `<option value=${b}>${b}</option>`;
});
newStyle.innerHTML += newStyle2;

function clickHere(e) {
  e.preventDefault();
  let clickCty = listCty.filter((a) => {
    return (a.luong.min >= newWage.value || a.luong.max >= newWage.value)&&
        a.nameWord.includes(newRank.value)||(a.luong.min>=20 && (a.nameWord.includes("Quản")||a.nameWord.includes("Phó")));
    // return (a.luong.min >= newWage.value || a.luong.max >= newWage2.value) &&
    //   (a.nameWord.toLowerCase().includes(newRank.value.toLowerCase()));
  });
  console.log(clickCty)

  let newArr = clickCty.map((a) => {
    return `<div class="listW">
                  <h2> ${a.nameWord} </h2>
                  <p> ${a.name} </p>
                    <p> ${a.luong.min} tr</p>
                  <p> ${a.luong.max} tr</p>
                   <p> ${a.adrees} </p></div>`;
  });

  resut.innerHTML = newArr
    .join(",")
    .replaceAll(/,/g, " ");
  // console.log(clickCty)
}

//   a.nameWord.toLowerCase().includes(newRank.value.toLowerCase())

// const nodeElementSelec1 = document.getElementById("1");
// const nodeElementSelec2 = document.getElementById("2");
// const nodeElementSelec3 = document.getElementById("3");

// const nodeElementSelecDiv = document.querySelector(".name-build");

// nodeElementSelec1.innerHTML += luong.map((a) => {
//   return `<option value=${a}>Từ ${a}.000.000</option>`;
// });
// nodeElementSelec2.innerHTML += rank.map((a) => {
//   return `<option value=${a}>${a}</option>`;
// });
// nodeElementSelec3.innerHTML += infoWork.map((a) => {
//   return `<option value=${a}>${a}</option>`;
// });

// let myAray= inforBuild.map((a) => {
//     let b='';
//     if(a.work.length>20){
//         b+=a.work.slice(0,18) +'...';
//     }else b+=a.work;
//   return `<div class='info'>
//         <div class='info-item'>
//         <h3>${b}</h3>
//         <h6>${a.name}</h6>
//         <span>Từ ${a.cD.min} Tr - ${a.cD.max} Tr</span>
//         <p>${a.adres}</p></div></div>`;
// });
// nodeElementSelecDiv.innerHTML=myAray.join(',').replaceAll(/,/g,' ')

// let abc=document.forms['selec'].helo;
// let abcd=Array.from(abc)
// let handlClick=(e)=>{
//     e.preventDefault();
//     let newAry = abcd.map(x=>x.value)
// console.log(newAry)
//     let sear=inforBuild.filter(a=>{
//            return (a.cD.min>=newAry[0]||a.cD.max>=newAry[0])&&
//         (a.work.includes(newAry[1])|| a.work.includes('Chuyên')||a.work.includes('Phóng'))&&
//         a.tyle.includes(newAry[2]);

//     })
//  let myAray2=sear.map((a) => {
//         let b='';
//         if(a.work.length>20){
//             b+=a.work.slice(0,18) +'...';
//         }else b+=a.work;
//       return `<div class='info'>
//             <div class='info-item'>
//             <h3>${b}</h3>
//             <h6>${a.name}</h6>
//             <span>Từ ${a.cD.min} Tr - ${a.cD.max} Tr</span>
//             <p>${a.adres}</p></div></div>`;
//     });

//     nodeElementSelecDiv.innerHTML=myAray2.join(',').replaceAll(/,/g,' ')
//     elemenClasOM.style.display='none'

// }

// const elemenClasOM=document.querySelector('.om');

// const handlShow=()=>{
//     elemenClasOM.style.display='block'

// }

// const handlClick_1 = ()=>{
//     window.location.reload()
// }
