const addrankbtn = document.getElementById("addrank");
const tierlist = document.querySelector(".tierlist");

addrankbtn.addEventListener("click", () => {
  const novorank = document.createElement("div");
  novorank.className = "dropzone";

  const span = document.createElement("span");
  span.contentEditable = "true";
  span.className = "tierName";
  span.textContent = "Novo";

  const div = document.createElement("div");

  const btnUp = document.createElement("button");
  btnUp.textContent = "⬆️";

  const btnDown = document.createElement("button");
  btnDown.textContent = "⬇️";

  div.append(btnUp, btnDown);
  novorank.append(span, div);
  tierlist.append(novorank);
});