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
      <router-link :class="`nav-link ${path === '/'? 'bg-danger text-white':'bg-light text-danger'}`" to="/"
        >Pokémon</router-link
      >
    </li>
    <li class="nav-item">
      <router-link :class="`nav-link ${path === '/list'? 'bg-danger text-white':'bg-light text-danger'} ml-10`" to="/list"
        >Lista Pokémon</router-link
      >
    </li>
  </ul>
  <div class="m-0 vh-100 row justify-content-center align-items-center">
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
  margin-right: 10px;
}

li {
  margin-left: 10px;
}

.my-nav {
  margin-top: 30px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>