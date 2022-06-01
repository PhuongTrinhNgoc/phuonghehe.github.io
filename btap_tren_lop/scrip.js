// // chọn ra thẻ đầu tiên khớp với bộ chọn dc cung cấp
// const h1 = document.querySelector(selectors: ".heading");

// // API của node
// h1.textContent = "hello"


// // API của element
// h1.innerText = "sa"

// // API của 

const nodelement = document.querySelector (".para");

const content = nodelement.innerText;

const words = content.split(" ");
let count = 0;
for (let i = 0; i < words.length;i++){
    const word = words[i];
    if(word.length >= 8){
        count++;
        words[i] = `<mark>${word}</mark>`;
    }
}
const newContent = words.join(" ");
p.innerHTML = newContent;
document.title = count
