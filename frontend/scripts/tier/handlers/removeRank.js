import { saveTier } from "../../../config/storage.js"
document.querySelector(".tierlist").addEventListener("click", (e) => {
    if (e.target.classList.contains("removerank")) {
        const confirmado = window.confirm("Tem certeza que deseja deletar esta tier?")
        if (confirmado) {
            const tierRow = e.target.closest(".dropzone")
            if (tierRow) {
                tierRow.remove()
                saveTier()
            }
        }
    }
})
