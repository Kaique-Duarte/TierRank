import { postFile } from "../../../tierClient.js";

const sendInput = document.querySelector('.images');
sendInput.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    const formData = new FormData()

    formData.append('image', file)
   try{

      const image = await postFile('/upload/images', formData)
           
           const img = document.createElement('img');
           img.src = image.url;
           const imageDiv = document.createElement('div')
           imageDiv.className = 'dropitem'
           imageDiv.setAttribute('draggable', 'true'); 
           imageDiv.appendChild(img)
           
           const itens = document.querySelector('.itens')
           if (itens) {
             itens.appendChild(imageDiv);
           }

   }catch(error){
       console.error('Error uploading file:', error);
   }})