<template>
  <div>
    <div 
      v-if="loading || !actualPokemon" 
      class="spinner-border text-danger m-auto absolute top-0 left-0 right-0 bottom-0" 
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
    <Card v-else :pokemon="actualPokemon" :onOtherPokemon="getPokemon" :onSave="savePokemon"/>
  </div>
</template>

<script>
import Card from '@/components/PokemonCard.vue'
import {useStore} from 'vuex'
import {computed, onMounted} from 'vue'
export default {
  title: 'Pokemon aleatorio',
  components: {
    Card
  },
  setup(){
    const store = useStore()
    const actualPokemon = computed(()=>store.state.actualPokemon)
    const loading = computed(()=>store.state.loading)
    const getPokemon = () => store.dispatch("getPokemon");
    const savePokemon = () => {
      store.dispatch("setSavePokemon")
      getPokemon()
    };
    onMounted(()=> {
      getPokemon()
    })
    return {
      actualPokemon,
      getPokemon,
      savePokemon,
      loading
    }
  }
}
</script>