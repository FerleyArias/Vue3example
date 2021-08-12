import { createStore } from "vuex";
import * as actions from "./actions";
import mutations from "./mutations";

const state = {
  actualPokemon: null,
  savePokemon: [],
  loading: false,
  error: null,
};

export default createStore({
  state,
  actions,
  mutations,
});
