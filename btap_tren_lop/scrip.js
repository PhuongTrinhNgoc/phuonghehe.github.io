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
function clickButton(){
    document.getElementById('red').style.display="block";
}
function listAdd(event){
// console.log(event.target.value);
if(event.target.value == 'ha-noi'){
    document.getElementById('huyen').innerHTML=
    `<select name="huyen" id="huyen">
        <option value="hai-ba-trung" >ha noi 1</option>;
        <option value="abc" >ha noi 2</option>
    </select>`
}

if(event.target.value== 'hai-phong'){
    document.getElementById('huyen').innerHTML=
`<select name="huyen" id="huyen">
<option value="hai-phong-1" >hai phong 1</option>;
<option value="hai-phong-2" >hai phong 2</option>
</select>`
}
}




function listH(event){
    // console.log(event.target.value);
    if(event.target.value == 'hai-phong-2'){
        document.getElementById('quan').innerHTML=
        `<select name="quan" id="quan">
        <option value="" >hai phong city-1</option>;
        <option value="" >hai phong city-2</option>
    </select>`
    }
    if(event.target.value == 'hai-phong-1'){
        document.getElementById('quan').innerHTML=
        `<select name="quan" id="quan">
        <option value="" >ố zề</option>;
        <option value="" >ối dời ôi</option>
    </select>`
    }
    if(event.target.value == 'hai-ba-trung'){
        document.getElementById('quan').innerHTML=
        `<select name="quan" id="quan">
        <option value="" >hi</option>;
        <option value="" >hello</option>
    </select>`
}
if(event.target.value == 'abc'){
    document.getElementById('quan').innerHTML=
    `<select name="quan" id="quan">
    <option value="" >ha noi 2 - 2</option>;
    <option value="" >ha noi 2-3</option>
</select>`
}
}