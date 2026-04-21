import { state, defaultState } from "./tierbase.js"
//nessa função ela ve se tem algo de tier list no local storage do navegador, se tiver ela usa se não tiver ela cria com um tier list padrão
export function syncStorage(){
    let saved = localStorage.getItem('tier')  
  console.log(state, defaultState)
  if (saved){
    try {
        state.tiers = JSON.parse(saved)
    } catch {
      console.error('Erro ao carregar dados')
    }
  } else {
    localStorage.setItem('tier', JSON.stringify(defaultState.tiers))
  }
}

// essa função le o html atual  e faz um novo array
export function saveTier(){
    
    const tierlist = document.querySelector('.tierlist')
    const ranks = Array.from(tierlist.children)
    console.log(ranks)
    
    return  ranks.map((rank, index)=>{
        
        const name = rank.querySelector('.tierName').textContent
        


        return {
            id: "tier-" + Date.now() + "-" + index,
            name: name,
            color: "#ffff",
            order: index,
            items: []
        }
    })
    
   /*  tiers: [
    {
      id: "tier-s",
      name: "S",
      color: "#ff4d4d",
      order: 0,
      items: [],
    }] */
}

