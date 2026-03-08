
let titulo = document.getElementById("titulo");
let tierBlocks = document.querySelectorAll("div.dropitem");
let dragElement = "";
let targets = document.querySelectorAll("div.dropzone");

//aqui é onde o drag and drop acontece, o dragElement é a div que está sendo arrastada, e os targets são as divs onde o elemento pode ser dropado. O evento dragstart é acionado quando o usuário começa a arrastar um elemento, e o evento drop é acionado quando o usuário solta o elemento em um target. O evento dragover é necessário para permitir que o elemento seja dropado no target.


tierBlocks.forEach((tierBlock) => {
  tierBlock.addEventListener("dragstart", (e) => {
    dragElement = e.currentTarget;
    console.log(dragElement);
  });
});

targets.forEach((target) => {
  target.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  target.addEventListener("drop", (e) => {
    target.appendChild(dragElement);
    titulo.innerHTML = "Dropou Aqui !!";
    console.log(target);
  });
});
