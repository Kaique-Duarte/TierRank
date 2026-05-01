import { saveTier } from "../../../config/storage.js"

const tierBlocks = document.querySelectorAll(".dropitem");
let dragElement = null;
//targets são as divs onde o elemento pode ser dropado.
const targets = document.querySelectorAll(".dropzone");

//O evento dragstart é acionado quando o usuário começa a arrastar um elemento
tierBlocks.forEach((tierBlock) => {
  
  tierBlock.addEventListener("dragstart", (e) => {
    dragElement = e.currentTarget;
    
  });
});
//O evento dragover é necessário para permitir que o elemento seja dropado no target.
targets.forEach((target) => {
  target.addEventListener("dragover", (e) => {
    e.preventDefault();
    
  });
  //o evento drop é acionado quando o usuário solta o elemento em um target
  target.addEventListener("drop", (e) => {
    
    // aki verifica se o drop foi em uma div
    if (e.target.tagName == "DIV"){
      
      target.appendChild(dragElement);
    }
    //aki verifica se o drop foi em uma imagem
    if (e.target.tagName == "IMG"){
      const img = e.target// item
      const parent = img.parentElement
      const rect = img.getBoundingClientRect()
      const position = (rect.right + rect.left) / 2
      
     
     //esse dois IFs concecutivos fazem logica de dropar o item no meio de outros dois itens   
     if (position < e.clientX){
        target.insertBefore(dragElement, parent.nextElementSibling)
        console.log("POS1: ", position,"OFFset: ", e.clientX)
      }
      if (position > e.clientX){
        target.insertBefore(dragElement, parent)
        console.log("POS2: ", position, "OFFset: ",  e.clientX)
      }
    }
    // essa parte depois do drop salva o estado atual e manda pro local storage
    saveTier()
    

  });
});
