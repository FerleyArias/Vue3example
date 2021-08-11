// Importar llos llamados a la API
import * as api from '@/api/';

export const getSavePokemon = ({commit}) => {
  if (localStorage.getItem('savePokemon')) {
    commit('setSavePokemon', localStorage.getItem('savePokemon'));
  }
}

// Retorna el pokemon aleatorio
export const setPokemon = async ({commit, state}) => {
  try {
    const savePokemon = state.savePokemon
    let pokemon, flag = true
    while(flag){
      pokemon = await api.getPokemon();
      let pokemonIndex = savePokemon.findIndex( item => {
        return item.id === pokemon.id
      })
      if(pokemonIndex === -1) {
        flag = false
      }
    }
    commit('setPokemon', pokemon)
  } catch(error) {
    console.log(error)
  }
}

// Guardamos el pokémon en el localStorage
export const setSavePokemon = ({commit,state}) => {
  const actualPokemon = state.actualPokemon
  const updateSavePokemon = state.savePokemon
  updateSavePokemon.push(actualPokemon)
  commit("setSavePokemon", updateSavePokemon)
  setPokemon()
}