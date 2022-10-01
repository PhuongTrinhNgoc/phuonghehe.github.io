// // bai1
// function printString(string) {
//     let result = "";
//   for (let i = 1; i <= 10; i++) {
//     result += string + "-" ;
//   }
//   return result.slice(0,result.length-1)
// }

// bai2
// function factorial(n){
//    var result = 1;
//     for (let i = 1;i<=n;i++){
//     result *= i;
//     }
//     return result;
// }
// factorial()

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
// function checkNumber(a, b) {
//   if (typeof a == "number" && typeof b == "number") {
//     // kt a,b co phai la 1 so hay k
//     if (a > b) {
//       return a;
//     } else if (b > a) {
//       return b;
//     } else return a;
//   } else {
//     return "nothing";
//   }
// }

// //bai tap (diu kien re nhanh) b2

// function factorial(n) {
//   let result = 1;
//   if (n % Math.floor(n) == 0 && n >= 0) {
//     for (let i = 1; i <= n; i++) {
//       result *= i; // bien result = result * i
//     }
//     return result; // tra ve result khi kthuc vong for
//   } else {
//     return "khong phai so nguyen duong";
//   }
// }
// ////bai tap (diu kien re nhanh) bai 3
// function toString1(x) {
//   if (x >= 8.5 && x <= 10) {
//     //  x nằm trong khoảng từ 8.5 ==> 10 thì trả về chuỗi
//     return "Điểm A";
//   }
//   if (x >= 7 && x <= 8.5) {
//     return "Điểm b";
//   }
//   if (x >= 5.5 && x <= 7) {
//     return "Điểm c";
//   }
//   if (x >= 4 && x <= 5.5) {
//     return "Điểm d";
//   }
//   if (x >= 0 && x < 4) {
//     return "Điểm f";
//   }
// }

// //bai tap (diu kien re nhanh) b4
// function translate(countryCode) {
//   switch (countryCode) {
//     case +84: {
//       return "xin chào";
//       break;
//     }
//     case +66: {
//       return "สวัสดี";
//       break;
//     }
//     case +7: {
//       return "привет";
//       break;
//     }
//     case +44: {
//       return "xin chào";
//       break;
//     }
//     case +82: {
//       return "안녕하세요";
//       break;
//     }

//     default: {
//       return "xin chào";
//     }
//   }
// }

// // bai tap mang? b1
// let timeNow = new Date();
// let date = timeNow.getDate();
// let month = timeNow.getMonth() + 1;
// let year = timeNow.getFullYear();
// document.write(date + "/" + month + "/" + year);

// function checkDate(month){

// if (month <= 6 && month >= 4) document.write(" mùa hạ");

// if (month >= 7 && month <= 9) document.write(" mùa thu");

// if (month >= 10 && month <= 12) document.write(" mùa đông");

// if (month >= 1 && month <= 3) document.write(" mùa xuân");
// }

// // document.write(date + "/" + month + "/" + year + " mùa hạ");

// // bai tap mang? b2

//   function nameStudent(n){

//     let sum = [];
//     for(let i=0;i<n.length;i++){
//     sum.push(n[i]);
//     }
//     sum.sort();
//     for(let i=0;i<sum.length;i++){
//       document.write(`<h1>${i+1}.${sum[i]}</h1>`);
//     }
//   }

//   let n = ['phuong','thao','anh','bao'];
// nameStudent(n);

// // bai tap mang? b2

// function nameStudent(...n) {
//   arguments.n.sort();
//   for (let i = 0; i < n.length; i++) {
//     document.write(`<h1>${i + 1}.${n[i]}</h1>`); // i + 1 để số thứ tự bắt đầu từ 1 not 0
//   }                                               // lấy 1 ptu của n khi chạy qua 1 vòng lặp
// }

// // bai tap mang? b3

// //
// function myArray(number) {
//   let sum = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {  // number[i]: lấy từng ptu khi chạy qua 1 vòng lặp
//       sum.push(numbers[i]);  // thêm từng phần tử sau khi lặp vào sum
//     }
//   }
//   return sum;
// }
// function myArray()

// // bai tap mang? b4

// function minNumber(x) {
//   x.sort(function(a,b){
//     return a-b;
//   });
//   return x[0];
// }

// minNumber([2, 4, 5, 1, 6]);

function sapXep(truyenVao) {
  let rel = truyenVao.reduce((a,b)=>(a<b) ? b : a)
    return rel
}
console.log(sapXep(3,4,6,7,89,9,8,7,6,5,88))