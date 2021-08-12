// Importar llos llamados a la API
import * as api from '@/api/';

export const getSavePokemon = ({commit}) => {
  if (localStorage.getItem('savePokemon')) {
    commit('setSavePokemon', JSON.parse(localStorage.getItem('savePokemon')));
  }
}

// Retorna el pokemon aleatorio
export const getPokemon = async ({commit, state}) => {
  try {
    const savePokemon = state.savePokemon
    let pokemon, flag = true
    commit('setLoading')
    while(flag){
      pokemon = await api.getPokemon();
      let pokemonIndex = savePokemon.findIndex( item => {
        return item.id === pokemon.id
      })
      if(pokemonIndex === -1) {
        flag = false
      }
    }
    commit('setActualPokemon', pokemon)
  } catch(error) {
    console.log(error)
    commit('setError', error)
  }
}

// Guardamos el pokémon en el localStorage
export const setSavePokemon = ({commit,state}) => {
  const actualPokemon = state.actualPokemon
  const updateSavePokemon = state.savePokemon
  updateSavePokemon.push(actualPokemon)
  commit("setSavePokemon", updateSavePokemon)
  localStorage.setItem('savePokemon', JSON.stringify(updateSavePokemon));
}

export const removePokemon = ({commit,state},index) => {
  const updateSavePokemon = state.savePokemon
  updateSavePokemon.splice(index,1)
  commit("setSavePokemon", updateSavePokemon)
  localStorage.setItem('savePokemon', JSON.stringify(updateSavePokemon));
}