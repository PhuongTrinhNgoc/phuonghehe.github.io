//bai tap (diu kien re nhanh) b1
function checkNumber(a, b) {
  if (typeof a == "number" && typeof b == "number") {
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
      result *= i; // result = result * i
    }
    return result;
  } else {
    return "khong phai so nguyen duong";
  }
}
////bai tap (diu kien re nhanh) bai 3
function toString1(x) {
  if (typeof x == "number") {
    if (x >= 8.5 && x <= 10) {
      return "Điểm A";
    }
    if (x >= 7 && x < 8.5) {
      return "Điểm B";
    }
    if (x >= 5.5 && x < 7) {
      return "Điểm C";
    }
    if (x >= 4 && x < 5.5) {
      return "Điểm D";
    }
    if (x >= 0 && x < 4) {
      return "Điểm F";
    }
  }
}

////bai tap (diu kien re nhanh) bai 3 cach 2

function toString(x) {
  if (x >= 8) {
    return "diem a";
  }
  if (x >= 7) {
    return "diem b";
  }
  if (x >= 5.5) {
    return "diem c";
  }
  if (x >= 4) {
    return "diem d";
  } else {
    return " diem f";
  }
}

//bai tap (diu kien re nhanh) b4
function translate(countryCode) {
  switch (countryCode) {
    case 84: {
      return "xin chào";
      break;
    }
    case 66: {
      return "สวัสดี";
      break;
    }
    case 7: {
      return "привет";
      break;
    }
    case 44: {
      return "xin chào";
      break;
    }
    case 82: {
      return "안녕하세요";
      break;
    }

    default: {
      return "xin chào";
    }
  }
}

function translate1(countryCode) {
  if (countryCode == 84) {
    return "xin chao";
  }
  if (countryCode == 66) {
    return "สวัสดี";
  }
  if (countryCode == 7) {
    return "привет";
  }
  if (countryCode == 44) {
    return "hola";
  }
  if (countryCode == 82) {
    return "안녕하세요";
  }
  return "xin chao";
}
// bai trne lop
function printString() {
  for (i = 0; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0)
      document.write(`<h1 style = "color:blue";>${i}</h1>`);
    else if (i % 5 == 0) document.write(`<h1 style = 'color:red'; >${i}</h1>`);
    else if (i % 3 == 0)
      document.write(`<h1 style = 'color:orange'; >${i}</h1>`);
    else document.write(`<h1 style = 'color:black'; >${i}</h1>`);
  }
}

printString();

// bai tren lop
function checkNumber(a, b, c) {
  if (a < b && a < c) {
    return a;
  }
  if (b < a && b < c) {
    return b;
  }
  return c;
}

// bai tap mang? b1

function checkDate() {
  let timeNow = new Date();
  let date = timeNow.getDate();
  let month = timeNow.getMonth() + 1;
  let year = timeNow.getFullYear();
  document.write(date + "/" + month + "/" + year);

  if (month >= 5 && month <= 7) document.write(" mùa hạ");
  else if (month >= 8 && month <= 10) document.write(" mùa thu");
  else if (month >= 11 || month === 1) document.write(" mùa đông");
  else if (month >= 2 && month <= 4) document.write(" mùa xuân");
}

// document.write(date + "/" + month + "/" + year + " mùa hạ");

// bai tap mang? b2

function nameStudent(n) {
  let sum = [];
  for (let i = 0; i < n.length; i++) {
    // lặp các phần tử của n
    sum.push(n[i]); // thêm mỗi phần tử của n sau mỗi lần lặp vào mản sum
  }
  sum.sort();
  for (let i = 0; i < sum.length; i++) {
    // lặp qua mảng sum
    document.write(`<h1>${i + 1}-${sum[i]}</h1>`); // i + 1 để số thứ tự bắt đầu từ 1 not 0
    //   }                                               // lấy 1 ptu của n khi chạy qua 1 vòng lặp
  }
}

let n = ["phuong", "thao", "anh", "bao"];
nameStudent(n);

// bai tap mang? b2

// function nameStudent1(n) {
//   n.sort();
//   for (let i = 0; i < n.length; i++) {
//     document.write(`<h1>${i + 1}.${n[i]}</h1>`); // i + 1 để số thứ tự bắt đầu từ 1 not 0
//   }                                               // lấy 1 ptu của n khi chạy qua 1 vòng lặp
// }

// bai tap mang? b3

//
function myArray(numbers) {
  let sum = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      // number[i]: lấy từng ptu khi chạy qua 1 vòng lặp
      sum.push(numbers[i] * 2); // thêm từng phần tử sau khi lặp vào sum
    }
  }
  return sum;
}
numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// bai tap mang? b4

function minNumber(x) {
  x.sort(function (a, b) {
    return b - a;
  });
  for(let i =0;i<x.length;i++) {
  if(x[0] > x[i+1]){
    return x[i+1]
  } 
}}

minNumber([2, 4, 5, 1, 6,6,5,9]);

const myInfo = {
  name: "Phuong",
  age: 18,
  addres: "HANAM , VN",
  getName: function () {
    return this.name;
  },
};

// bai tap object 1 --------------------

function nameString(checkInfo) {
  if (
    checkInfo.username != "" &&
    checkInfo.username.length <= 20 &&
    checkInfo.password.length < 33 &&
    checkInfo.password.length > 5 &&
    checkInfo.password === checkInfo.confirm
  ) {
    return "pass";
  } else {
    return "fail";
  }
}
let checkInfo = {
  username: "ngoc phuong",
  password: "12345678",
  confirm: "12345678",
};
// btap object 2

function myArray(y) {
  let sum = [];
  let newArray = [];
  for (i = 0; i < y.length; i++) {
    sum.push(y[i].length); // tạo 1 mảng các số = dộ dài của 1 chuỗi
  }
  sum.sort(function (a, b) {
    return b - a; // tạo ra mảng có thứ tự giảm dần
  });
  let x = sum[0]; // lấy số đầu tiên của mảng sum gán cho bằng x
  for (j = 0; j < y.length; j++) {
    // vòng for này lặp qua từng phần tử của tham số truyền vào
    if (y[j].length == x) {
      // so sánh số lớn nhất của mảng sum với độ dài chuỗi của mảng y
      newArray.push(y[j]); // thêm từng phần tử của y[j] thỏa mãn điều kiện vào mảng mới newArray
    }
  }
  return newArray;
}
let y = ["abc", "abcd", "ab", "a", "abce", "abb", "abbb"];

// bt object b3

function ageCalculation(infoStudent) {
  let result = 0;
  for (i = 0; i < infoStudent.length; i++) {
    result += infoStudent[i].age;
  }
  return result / infoStudent.length;
}
let infoStudent = [
  { name: "huy", age: 21 },
  { name: "H", age: 25 },
  { name: "uy", age: 24 },
  { name: "Hy", age: 29 },
  { name: "y", age: 22 },
];

// Viết 1 function lấy ra 1 số nhỏ nhất trong 1 mảng các số.
function sapxep(arrr) {
  let min = arrr[0]; // khởi tạo 1 biến min có giá trị bằng vị trí đầu tiên của tham số truyền vào
  for (i = 0; i < arrr.length; i++) {
    // lặp từng phần tử của arrr
    if (min > arrr[i])
      // so sánh min với từng phần tử của i để tìm số lớn hơn
      min = arrr[i]; // gán min bằng số lớn nhất tìm dc
  }
  return min;
}
let arrr = [1, 3, 5, 818, 1, 4, -4, 0, 12, 99];
document.write(sapxep(arrr));

// bài 2 (tối ưu code)

function findLongestString(arr) {
  let newArr = [],
    maxLength = 0;

  // Lặp qua từng phần tử trong mảng
  arr.forEach((str) => {
    // Nếu độ dài của phần tử lớn hơn maxLength
    if (str.length > maxLength) {
      // Làm trống newArr
      newArr = [];

      // Đẩy phần tử đó vào newArr
      newArr.push(str);

      // Thay maxLength bằng độ dài của phần tử
      maxLength = str.length;

      // Còn nếu không, nếu độ dài của phần tử bằng maxLength
    } else if (str.length === maxLength) {
      // thì đẩy phần tử đó vào newArr
      newArr.push(str);
    }
  });

  return newArr;
}

// x = ['aba', 'aa', 'ad', 'c', 'vcd']

function maxLength(x) {
  // Sắp xếp lại mảng theo thứ tự độ dài giảm dần
  x.sort(function (a, b) {
    return b.length - a.length;
  });
  // x = ['aba', 'vcd', 'aa', 'ad', 'c']

  let longest = [];

  // Có thể tối ưu bằng cách giảm bớt vòng lặp (dừng vòng lặp khi thấy phần tử có độ dài nhỏ hơn phần tử đầu tiên
  for (let i = 0; i < x.length; i++) {
    if (x[i].length === x[0].length) {
      longest.push(x[i]);
    } else {
      break;
    }
  }

  return longest;
}

// bài tập bài 1

function toString(string1) {
  let text = string1.toLowerCase().split(" "); // biến chuỗi thành 1 mảng viết thường
  for (let i = 0; i < text.length; i++) {
    text[i] =
      text[i].charAt(0).toUpperCase() + //chỉ lấy chữ cái đầu của text[i] và chuyển nó thành viết hoa
      text[i].substring(1); // cộng với từng phần tử của text[i] nhưng bỏ chữ cái đầu
  }

  return text.join(" "); // trả về text và biến thành chuỗi
}

// bài tập 2

function checkString(index) {
  let a = index.toLowerCase().replace(" ", "").split("").reverse().join("");
  let b = index.toLowerCase().replace(" ", "");
  if (a === b) {
    return "true";
  } else {
    return "false";
  }
}
// bai tap 3

function ageArrangement(myObject) {
  myObject.sort(function (a, b) {
    return b.age - a.age;
  });
  return myObject;
}
// bai tap 4

function filterLetters(myObject2) {
  return myObject2.filter(function (a) {
    return a.name[0] === "h" || a.name[0] === "H";
  });
}
myObject2 = [
  { name: "Hu", age: 29 },
  { name: "y", age: 20 },
  { name: "Hy", age: 25 },
  { name: "H", age: 23 },
];
