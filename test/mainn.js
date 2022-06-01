// function fullName1(text) {

//     return text[0].toUpperCase() + text.slice(1).toLowerCase();
//     var nameString = 
//   }
//   console.log(fullName1())


//   function nameString(s1){
//      return s1.replaceALL(' ','-');
//   }
//   console.log(nameString('phuong he he'));
  

  // function printContent(){
  //     for (let i = 1;i<=20;i+=2){
  //     document.write()
  //     }
  // };

  // bai1
function printString(string) {
  let result = "";
for (let i = 1; i <= 10; i++) {
  result += `${string}-`;
}
return result.slice(0,result.length-1)
}

// bai2
function factorial(n){
 var result = 1;
  for (let i = 1;i<=n;i++){
  result *= i;
  }
  return result;
}

// bai3
function reverse(text) {
let result = "";
for (let i = text.length -1; i >= 0; i--) {
  // console.log(text[i]+' ')
  result += text[i];
}
document.write(result);
}


// bai4
function printNumber(){
  for (let i =1;i<=100;i++){
      if (i % 2 == 0){
          document.write(`<h2 style="color:blue">${i}</h2>`)
      }
      else {
          document.write(`<h2 style="color:red">${i}</h2>`)
      }
  }
}


;