import { createStore } from 'vuex'
import * as actions from './actions'
import mutations from './mutations'

const state = {
  actualPokemon: null,
  savePokemon: []
}

export default createStore({
  state, 
  actions, 
  mutations
})