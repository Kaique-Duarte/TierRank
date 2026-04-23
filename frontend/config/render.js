import { syncStorage, saveTier } from "./storage.js";
import { state } from "./tierbase.js";

//essa função renderiza a tierlist depois de ler o json
export function render(state) {
  syncStorage();
  const tierlist = document.querySelector(".tierlist");

  tierlist.innerHTML = null;

  state.tiers
    .sort((a, b) => a.order - b.order)
    .forEach((tier) => {
      const div = document.createElement("div");
      div.className = "dropzone";

      const span = document.createElement("span");
      span.className = "tierName";
      span.textContent = tier.name;
      span.contentEditable = true;

      const divBtn = document.createElement("div");
      const botoes = [
        { text: "Cima", classe: "btn-up" },
        { text: "baixo", classe: "btn-down" },
        { text: "Delete", classe: "removerank"},
      ];
      //aqui cria dois botoes com classes diferentes
      botoes.forEach((botao) => {
        const btn = document.createElement("button");
        btn.textContent = botao.text;
        btn.className = botao.classe;

        divBtn.appendChild(btn);
      });

      div.appendChild(span);
      div.appendChild(divBtn);

      tierlist.appendChild(div);
    });

  }
  
  render(state);

