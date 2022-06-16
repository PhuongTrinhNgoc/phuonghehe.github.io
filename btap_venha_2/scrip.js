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
      style: 'Nhân viên chính thức'
    },
    {
      nameWord: "Phó Giám đốc kinh doanh",
      name: "Công Ty CP XNK Hóa Chất & Thiết Bị Kim Ngưu",
      luong: {
        min: 20,
        max: 30,
      },
      adrees: "Cần Thơ",
      style: 'Tạm thời/dự án'
    },
    {
      nameWord: "Cửa Hàng trưởng - Manager ",
      name: "Dalat Hasfarm",
      luong: {
        min: 12,
        max: 15,
      },
      adrees: "Hồ Chí Minh",
      style: 'Thời vụ/nghề tự do'
    },
    {
      nameWord: "Quản lý và Giám sát An Ninh - Cameraman  ",
      name: "Wipro Consumer Care Vietnam",
      luong: {
        min: 7,
        max: 10,
      },
      adrees: "Bình Dương",
      style: 'Thực tập'
    },
    {
      nameWord: "Chuyên VIÊN TƯ VẤN DỰ ÁN [QUẬN 2]  ",
      name: "Công Ty TNHH Thương Mại Giải Pháp Ưu Việt",
      luong: {
        min: 12,
        max: 20,
      },
      adrees: "Hồ Chí Minh",
      style: 'Nhân viên chính thức'
    },
    {
      nameWord: "Nhân VIÊN KINH DOANH SHOWROOM [QUẬN 7]  ",
      name: "Công Ty TNHH Thương Mại Giải Pháp Ưu Việt",
      luong: {
        min: 8,
        max: 18,
      },
      adrees: "Hồ Chí Minh",
      style: "Thực tập"
    },
  ];
  
  document.querySelector(".body").innerHTML = listCty
    .map((a) => {
      return `<div class="listW">
      <div class="info-item">
          <h2> ${a.nameWord} </h2>
          <p> ${a.name} </p>
              <p> ${a.style}</p>
                 <p> ${a.luong.min} tr</p>
                <p> ${a.luong.max} tr</p>
                 <p> ${a.adrees} </p>
                 </div>
                 </div>
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
    "Nhân viên chính thức",
    "Tạm thời/dự án",
    "Thời vụ/nghề tự do",
    "Thực tập",
  ];
  
  const newWage = document.getElementById("select-1");
  // const newVal = document.getElementById("select-2");
  const newRank = document.getElementById("select-3");
  const newStyle = document.getElementById("select-4");
  
  let newWage2 = luong.map((a) => {
    return `<option value= ${a}>từ ${a}.000.000</option>`;
  });
  
  newWage.innerHTML += newWage2;
  let newRank2 = rank.map((b) => {
    return `<option value= ${b}>${b}</option>`;
  });
  newRank.innerHTML += newRank2;
  
  let newStyle2 = style.map((b) => {
    return `<option value= ${b}>${b}</option>`;
  });
  newStyle.innerHTML += newStyle2;
  
  
  document.getElementById("button").onclick = function() {
    let clickCty = listCty.filter(a => {
      return    a.nameWord.includes(newRank.value) && (a.luong.min >= newWage.value || a.luong.max >= newWage.value) && a.style.includes(newStyle.value)
   
  }) 
  
    
      
    document.querySelector(".body").innerHTML = clickCty
      .map((a) => {
        return `<div class="listW">
            <div class="info-item">
                    <h2> ${a.nameWord} </h2>
                    <p> ${a.name} </p>
                    <p> ${a.style}</p>
                      <p> ${a.luong.min} tr</p>
                    <p> ${a.luong.max} tr</p>
                     <p> ${a.adrees} </p>
                     </div>
                     </div>`;
      })
      .join(",")
      .replaceAll(/,/g, " ");
    // console.log(clickCty)
  };


