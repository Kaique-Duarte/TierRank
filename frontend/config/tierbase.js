export const defaultState = {
  tiers: [
    {
      id: "tier-s",
      name: "S",
      color: "#ff4d4d",
      order: 0,
      items: [],
    },
    {
      id: "tier-a",
      name: "A",
      color: "#ff944d",
      order: 1,
      items: [],
    },
    {
      id: "tier-b",
      name: "B",
      color: "#ffd24d",
      order: 2,
      items: [],
    },
    {
      id: "tier-c",
      name: "C",
      color: "#b3ff66",
      order: 3,
      items: [],
    },
    {
      id: "tier-d",
      name: "D",
      color: "#66ccff",
      order: 4,
      items: [],
    },
    {
      id: "tier-e",
      name: "E",
      color: "#b366ff",
      order: 5,
      items: [],
    },
    {
      id: "tier-f",
      name: "F",
      color: "#999999",
      order: 6,
      items: [],
    },
     
  ],
};
// Cria uma cópia profunda do estado padrão para poder modificar sem alterar o original
export let state = structuredClone(defaultState)

