import { saveTier } from "../../../config/storage.js"
document.querySelector('.tierlist').addEventListener('input', (e) =>{
        if (e.target.matches('[contenteditable]')){
            console.log('tá Salvo')
            saveTier()
        }else{
            console.log('Erro de salvamento')
        }
})
