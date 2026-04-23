const addrankbtn = document.getElementById("addrank")
const tierlist = document.querySelector(".tierlist")

addrankbtn.addEventListener("click", () => {
  const novorank = document.createElement("div")
  novorank.className = "dropzone";

  const span = document.createElement("span")
  span.contentEditable = "true"
  span.className = "tierName"
  span.textContent = "Novo"

  const div = document.createElement("div")

  const btnUp = document.createElement("button")
  btnUp.textContent = "⬆️"

  const btnDown = document.createElement("button")
  btnDown.textContent = "⬇️"

  const btnDelete = document.createElement("button")
  btnDelete.textContent = "❌"
  btnDelete.className = "removerank"

  div.append(btnUp, btnDown, btnDelete)
  novorank.append(span, div)
  tierlist.append(novorank)
});