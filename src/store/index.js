import { createStore } from 'vuex'
import * as actions from './actions'
import mutations from './mutations'

const state = {
  actualPokemon: {},
  savePokemon: []
}

export default createStore({
  state, 
  actions, 
  mutations
})