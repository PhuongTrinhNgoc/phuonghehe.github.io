// function power(x, n) {
//   return n == 1 ? x : x * power(x, n - 1);
// }

// function power(x, n) {
//   let rel = 1;
//   for (let i = 0; i < n; i++) {
//     rel *= x;
//   }
//   return rel;
// }
const data = [
  {
    name: "Company 1",
    members: [
      { name: "staff 1", salary: 0.2 },
      { name: "staff 2", salary: 0.1 },
    ],
    subCompanies: null,
  },
  {
    name: "Company 2",
    members: [
      { name: "staff 3", salary: 10.1 },
      { name: "staff 4", salary: 10.2 },
    ],
    subCompanies: [
      {
        name: "sub 1 - Company 1",
        members: [
          { name: "staff 5", salary: 9.7 },
          { name: "staff 6", salary: 9.1 },
        ],
        subCompanies: null,
      },
    ],
  },
];

function sumSalaries(department) {
    if (Array.isArray(department)) {
      return department.reduce((prev, current) => prev + current.salary, 0); 
    } else {
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); 
      }
      return sum;
    }
  }
  
  console.log(sumSalaries(data));


// function calculateSalary(data) {
//   if (data.next) {
//     calculateSalary(data.next);
//   }

//   console.log(data.value);
// }
