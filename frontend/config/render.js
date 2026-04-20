import syncStorage from "./storage.js";
import { state } from "./tierbase.js";
//essa função renderiza a tierlist depois de ler o json
function render(state) {
  syncStorage()
  const tierlist = document.querySelector(".tierlist");

  tierlist.innerHTML = "";

  state.tiers
    .sort((a, b) => a.order - b.order)
    .forEach((tier) => {
      const div = document.createElement("div");
      const span = document.createElement("span");
      span.className = "tierName";
      span.textContent = tier.name;
      span.contentEditable = true;
      div.className = "dropzone";

      div.appendChild(span);

      tierlist.appendChild(div);
    });
}

render(state);
