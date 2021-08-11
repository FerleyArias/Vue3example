<template>
<ul class="nav nav-pills">
  <li class="nav-item">
    //<img src="./assets/logo.png" class="card-img-top" alt="Logo">
  </li>
  <li class="nav-item">
    <router-link class="nav-link active" to="/">Lista Pokémon</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/list">Lista Pokémon</router-link>
  </li>
</ul>
  <router-view />
</template>
<script>
export default {
  
}
</script>