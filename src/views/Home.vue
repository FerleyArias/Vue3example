<template>
  <div>
    <Card v-if="actualPokemon" :pokemon="actualPokemon" :onOtherPokemon="getPokemon" :onSave="savePokemon"/>
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
      savePokemon
    }
  }
}
</script>