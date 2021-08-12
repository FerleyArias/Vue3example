<template>
  <ul class="nav nav-pills position-fixed align-center my-nav">
    <li class="nav-item">
      <img
        src="./assets/logo.png"
        class="card-img-top"
        id="principal"
        alt="Logo"
      />
    </li>
    <li class="nav-item">
      <router-link :class="[path === '/'? 'bg-danger text-white':'bg-light text-danger']" class="nav-link" to="/"
        >Pokémon</router-link
      >
    </li>
    <li class="nav-item">
      <router-link :class="[path === '/list'? 'bg-danger text-white':'bg-light text-danger']" class="nav-link ml-10" to="/list"
        >Lista Pokémon</router-link
      >
    </li>
  </ul>
  <div class="pt-5 d-flex justify-content-center align-items-center min-vh-100 overflow-hidden">
    <router-view class="col-auto p-5" />
  </div>
</template>
<script>
import {watch, ref, onMounted} from 'vue'
import {useStore} from 'vuex'
import { useRoute } from "vue-router";
export default {
  setup(){
    const store = useStore()
    const lookPokemon = () => store.dispatch("getSavePokemon");
    const route = useRoute()
    const path = ref("/")
    watch(route, ()=>{
      path.value=route.path
    })
    onMounted(()=> { 
      lookPokemon()
    })
    return {
      path,
      lookPokemon
    }
  }
};
</script>
<style scoped>
#principal {
  height: 2.5rem;
  width: 2.5rem;
}

li {
  margin-left: 10px;
}

.my-nav {
  margin: 0 auto;
  padding: 19px;
  width: max-content;
  border-radius: 0 0 15px 15px;
  background-color: rgba(200, 200, 200, 0.3);
  z-index: 10;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}
</style>