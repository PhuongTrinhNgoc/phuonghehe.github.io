


// // $('#btn').click(function() {
// //     let text = $('#input').val();
// //     if (text > 6 && text >= 8){
// //      return  $('.print').html(`<p style = "color:blue">${text}-gioi</p>`)
// //     }
// //     else if (text >= 4 && text <= 6){
// //         return $('.print').html(`<p style = "color:yellow">${text}- dat</p>`)
// //     }
// //     else{
// //         return $('.print').html(`<p style = "color:red">${text}- khong dat</p>`)
// //     }
// // })



// let product = [
//     {id:'1',name:'item1', price:50,qty:1},
//     {id:'2',name:'item2', price:60,qty:2},
//     {id:'3',name:'item3', price:35,qty:3},
// ]

// var newProduct = product.reduce(function(a,b){
//     return a + b.price * b.qty;
// },0);

// // var rel1 = product.reduce(function(a,b){
// //     return a + b.qty
// // },0)

// $('#btn').click(function() {
//    let rel = product.map((a)=>{
//     return `<div>
//         <p>stt:${a.name}</p>
//         <p>gia:${a.price}</p>
//         <p>${a.qty}</p>
//         </div>`
//     }).join(",").replace(/,/g);
//     $('#div').append(`${rel} ${newProduct}`);
//     // rel = $('#div').html();
// })