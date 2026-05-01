import { saveTier } from "../../../config/storage.js"
const zone = document.querySelector(".itens")
const tierlist = document.querySelector(".tierlist")
let dragElement = null;

const targets = document.querySelectorAll(".dropzone");

document.addEventListener('dragstart', (e) => {
  dragElement = e.target.closest(".dropitem")
})
zone.addEventListener("dragover", (e) => {
  e.preventDefault()

})
zone.addEventListener('drop', (e) => {
  zone.appendChild(dragElement)
  console.log('drop')
})

tierlist.addEventListener("dragover", (e) => {
  e.preventDefault()
})
tierlist.addEventListener('drop', (e) => {
  const target = e.target // elemento onde o item foi dropado
  const dropzone = target.closest(".dropzone") // pega a div dropzone mais próxima
  
  if (!dropzone) return // se não encontrou dropzone, sai
  
  if (target.classList.contains("dropzone") && target.tagName == "DIV"){
    target.appendChild(dragElement)
  }
  
  if (target.tagName == "IMG"){
    const img = target // item
    const parent = img.parentElement
    const rect = img.getBoundingClientRect()
    const position = (rect.right + rect.left) / 2
    
    if (position < e.clientX){
      dropzone.insertBefore(dragElement, parent.nextElementSibling)
    }
    if (position > e.clientX){
      dropzone.insertBefore(dragElement, parent)
    }
  } 
  saveTier()
})
  
