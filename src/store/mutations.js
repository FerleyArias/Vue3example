export default {
  setActualPokemon(state, payload) {
    state.actualPokemon = payload;
    state.loading = false;
  },
  setSavePokemon(state, payload) {
    state.savePokemon = payload;
  },
  setLoading(state) {
    (state.loading = true), (state.error = null);
  },
  setError(state, payload) {
    (state.loading = false), (state.error = payload);
  },
};
