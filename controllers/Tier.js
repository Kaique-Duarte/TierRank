let titulo = document.getElementById("titulo");
let tierBlocks = document.querySelectorAll("div.dropitem");
let dragElement = "";
//targets são as divs onde o elemento pode ser dropado.
let targets = document.querySelectorAll("div.dropzone");

//O evento dragstart é acionado quando o usuário começa a arrastar um elemento
tierBlocks.forEach((tierBlock) => {
  
  tierBlock.addEventListener("dragstart", (e) => {
    dragElement = e.currentTarget;
    /* console.log(dragElement); */
  });
});
//O evento dragover é necessário para permitir que o elemento seja dropado no target.
targets.forEach((target) => {
  target.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  //o evento drop é acionado quando o usuário solta o elemento em um target
  target.addEventListener("drop", (e) => {
    if (e.target.tagName == "DIV"){
      console.log("DIV")
      target.appendChild(dragElement);
    }
    if (e.target.tagName == "IMG"){
      const img = e.target// item
      const parent = img.parentElement
      const rect = img.getBoundingClientRect()
      const position = (rect.right + rect.left) / 2
      
     console.log(rect)
       if (position < e.clientX){
        target.insertBefore(dragElement, parent.nextElementSibling)
        console.log("POS1: ", position,"OFFset: ", e.clientX)
      }
      if (position > e.clientX){
        target.insertBefore(dragElement, parent)
        console.log("POS2: ", position, "OFFset: ",  e.clientX)
      }
    }
  });
});

document.addEventListener("mousemove", (e) =>{
const x = e.clientX
const y = e.clientY 
})

