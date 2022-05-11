// // bai1
// function printString(string) {
//     let result = "";
//   for (let i = 1; i <= 10; i++) {
//     result += string + "-" ;
//   }
//   return result.slice(0,result.length-1)
// }

// // bai2
// function factorial(n){
//    var result = 1;
//     for (let i = 1;i<=n;i++){
//     result *= i;
//     }
//     return result;
// }

// // bai3
// function reverse(text) {
//   let result = "";
//   for (let i = text.length -1; i >= 0; i--) {
//     // console.log(text[i]+' ')
//     result += text[i];
//   }
//   document.write(result);
// }

// // bai4
// function printNumber(){
//     for (let i =1;i<=100;i++){
//         if (i % 2 == 0){
//             document.write(`<h2 style="color:blue">${i}</h2>`)
//         }
//         else {
//             document.write(`<h2 style="color:red">${i}</h2>`)
//         }
//     }
// }

//bai tap (diu kien re nhanh) b1
function checkNumber(a, b) {
  if (typeof a == "number" && typeof b == "number") {
    // kt a,b co phai la 1 so hay k
    if (a > b) {
      return a;
    } else if (b > a) {
      return b;
    } else return a;
  } else {
    return "nothing";
  }
}

//bai tap (diu kien re nhanh) b2

function factorial(n) {
  let result = 1;
  if (n % Math.floor(n) == 0 && n >= 0) {
    for (let i = 1; i <= n; i++) {
      result *= i; // bien result = result * i
    }
    return result; // tra ve result khi kthuc vong for
  } else {
    return "khong phai so nguyen duong";
  }
}
////bai tap (diu kien re nhanh) bai 3
function toString1(x) {
  if (x >= 8.5 && x <= 10) { //  x nằm trong khoảng từ 8.5 ==> 10 thì trả về chuỗi 
    return "Điểm A";
  }
  if (x >= 7 && x <= 8.5) {
    return "Điểm b";
  }
  if (x >= 5.5 && x <= 7) {
    return "Điểm c";
  }
  if (x >= 4 && x <= 5.5) {
    return "Điểm d";
  }
  if (x >= 0 && x <= 4) {
    return "Điểm f";
  }
}

//bai tap (diu kien re nhanh) b4
function translate(countryCode){
  switch(countryCode){
    case +84 :{
      return "xin chào";
      break;
    }
    case +66 :{
      return "สวัสดี";
      break;
    }
    case +7 :{
      return "привет";
      break;
    }
    case +44 :{
      return "xin chào";
      break;
    }
    case +82 :{
      return "안녕하세요";
      break;
    }

    default : {
      return "xin chào";
    }
  }
}
console.log(translate(+82))