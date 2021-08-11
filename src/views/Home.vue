<template>
  <div>
    <Card :pokemon="pokemon"/>
  </div>
</template>

<script>
import Card from '@/components/PokemonCard.vue'
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {
  title: 'Pokemon aleatorio',
  components: {
    Card
  },
  setup(){
    const store = useStore()
    const pokemon = computed(()=>store.state.actualPokemon)
    return {
      pokemon
    }
  }
}
</script>