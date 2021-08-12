<template>
  <div class="cards_container">
    <Card 
      v-for="(item,index) in savePokemon" 
      :key="index" 
      :isList="true" 
      :index="index"  
      :pokemon="item"
      :onRemove="removePokemon"
    />
  </div>
</template>

<script>
  import Card from '@/components/PokemonCard.vue'
  import {useStore} from 'vuex'
  import {computed} from 'vue'
  export default {
    title: 'Lista de pokémon',
    components:{
      Card
    },
    setup(){
    const store = useStore()
    const savePokemon = computed(()=>store.state.savePokemon)
    const removePokemon = (index) => store.dispatch("removePokemon",index);
    return {
      savePokemon,
      removePokemon
    }
  }
  }
</script>

<style>
  .cards_container {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill, 300px);
    justify-content: center;
  }
</style>