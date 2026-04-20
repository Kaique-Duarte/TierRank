import { state, defaultState } from "./tierbase.js"

export default function syncStorage(){
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


