let titulo = document.getElementById("titulo");
let tierBlocks = document.querySelectorAll("div.dropitem");
let dragElement = ''
let target = document.getElementById("tmTarget");

tierBlocks.forEach((tierBlock) => {
  tierBlock.addEventListener("dragstart", (e) => {
     dragElement = e.target;

  });
  
  target.addEventListener('dragover', (e) => {
        e.preventDefault();
    })
    target.addEventListener('drop', (e) => {
        target.appendChild(dragElement)  
        titulo.innerHTML = "Dropou Aqui !!"
        
    })
});
