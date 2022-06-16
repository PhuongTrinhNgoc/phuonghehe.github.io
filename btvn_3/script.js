var jobs = [
  {
    jobName: "Lập trình viên",
    company: "FPT",
    salary: "3.000.000d",
    city: "Ha Noi",
    level: "student",
    time: "1-week",
    status: "nhan-vien-chinh-thuc",
    benefit: "che-do-bao-hiem",
  },
  {
    jobName: "Lập trình viên",
    company: "Zing",
    salary: "6.000.000d",
    city: "Ho Chi Minh",
    level: "student",
    time: "3-days",
    status: "nhan-vien-chinh-thuc",
    benefit: "du-lich",
  },
  {
    jobName: "Kinh Doanh",
    company: "Vin",
    salary: "9.000.000d",
    city: "Da Nang",
    level: "employee",
    time: "3-days",
    status: "thoi-vu-tu-do",
    benefit: "du-lich",
  },
  {
    jobName: "kế Toán",
    company: "Zoo",
    salary: "5.000.000d",
    city: "Campodia",
    level: "employee",
    time: "1-week",
    status: "thoi-vu-tu-do",
    benefit: "che-do-bao-hiem",
  },

  {
    jobName: "Kế Toán",
    company: "JAV",
    salary: "5.000.000d",
    city: "Japan",
    level: "employee",
    time: "3-days",
    status: "thoi-vu-tu-do",
    benefit: "du-lich",
  },

  {
    jobName: "Lập trình viên",
    company: "Casino",
    salary: "9.000.000d",
    city: "Hong Kong",
    level: "student",
    time: "1-week",
    status: "nhan-vien-chinh-thuc",
    benefit: "che-do-bao-hiem",
  },
];

// click nút tìm kiếm -> tìm kiếm từ có trong jobName
// click tìm kiếm nâng cao sẽ hiển thị các ô tìm kiếm kết hợp với điều kiện tìm kiếm nâng cao
//   let btn = $('#input').val();

let newJ = jobs
  .map((a) => {
    return `<div class="listW">
    <div class="info-item">
            <h2> ${a.jobName} </h2>
            <p> ${a.company} </p>
            <p> ${a.salary}</p>
              <p> ${a.city}</p>
            <p> ${a.level}</p>
             <p> ${a.time} </p>
             <p> ${a.status} </p>
             <p> ${a.benefit} </p>
             </div>
             </div>`;
  })
  .join(",")
  .replaceAll(/,/g, " ");
// $('#div').html()=newJ
$("#div").append(newJ);

$("#input").click(function (e) {
  e.preventDefault();
  let valInput = $("#inputValue").val();
  let filJob = jobs.filter((b) => {
    return (
      b.jobName.includes(valInput) ||
      b.company.includes(valInput) ||
      b.salary.includes(valInput) ||
      b.city.includes(valInput) ||
      b.level.includes(valInput) ||
      b.time.includes(valInput) ||
      b.status.includes(valInput) ||
      b.benefit.includes(valInput)
    );
  });

  let okok = filJob
    .map((a) => {
      return `<div class="listW">
        <div class="info-item">
                <h2> ${a.jobName} </h2>
                <p> ${a.company} </p>
                <p> ${a.salary}</p>
                  <p> ${a.city}</p>
                <p> ${a.level}</p>
                 <p> ${a.time} </p>
                 <p> ${a.status} </p>
                 <p> ${a.benefit} </p>
                 </div>
                 </div>`;
    })
    .join(",")
    .replaceAll(/,/g, " ");
  $("#div").html(`${okok}`);
  $("#inputValue").val("");
});

$("#input2").click(function (e) { 
  e.preventDefault();
  let newVal = $("#level").val();
  let newSt = $("#status").val();
  if($('input[name=salary]:checked').val() == "young"){
    let filJob2 = jobs.filter((b) => {
        return parseInt(b.salary) < 18 &&
        b.status.includes(newSt) &&
        b.level.includes(newVal);
      });
      let okok2 = filJob2
        .map((a) => {
          return `<div class="listW">
                      <div class="info-item">
                            <h2> ${a.jobName} </h2>
                            <p> ${a.company} </p>
                            <p> ${a.salary}</p>
                            <p> ${a.city}</p>
                            <p> ${a.level}</p>
                            <p> ${a.time} </p>
                            <p> ${a.status} </p>
                            <p> ${a.benefit} </p>
                            </div>
                            </div>`;
        })
        .join(",")
        .replaceAll(/,/g, " ");
    
      $("#div").html(`${okok2}`);
}
    else if($('input[name=salary]:checked').val() == "mature"){
        let filJob2 = jobs.filter((b) => {
            return parseInt(b.salary) > 18 && parseInt(b.salary) < 30 &&
            b.status.includes(newSt) &&
            b.level.includes(newVal);
          });
          let okok2 = filJob2
            .map((a) => {
              return `<div class="listW">
                          <div class="info-item">
                                <h2> ${a.jobName} </h2>
                                <p> ${a.company} </p>
                                <p> ${a.salary}</p>
                                <p> ${a.city}</p>
                                <p> ${a.level}</p>
                                <p> ${a.time} </p>
                                <p> ${a.status} </p>
                                <p> ${a.benefit} </p>
                                </div>
                                </div>`;
            })
            .join(",")
            .replaceAll(/,/g, " ");
        
          $("#div").html(`${okok2}`);
    }
    else if ($('input[name=salary]:checked').val() == "senior"){
        let filJob2 = jobs.filter((b) => {
            return parseInt(b.salary) > 50&&
            b.status.includes(newSt) &&
            b.level.includes(newVal);
          });
          let okok2 = filJob2
            .map((a) => {
              return `<div class="listW">
                          <div class="info-item">
                                <h2> ${a.jobName} </h2>
                                <p> ${a.company} </p>
                                <p> ${a.salary}</p>
                                <p> ${a.city}</p>
                                <p> ${a.level}</p>
                                <p> ${a.time} </p>
                                <p> ${a.status} </p>
                                <p> ${a.benefit} </p>
                                </div>
                                </div>`;
            })
            .join(",")
            .replaceAll(/,/g, " ");
        
          $("#div").html(`${okok2}`);
    };   
});
// console.log(parseInt($('input[name=salary]:checked').val()));