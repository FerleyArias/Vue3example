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
      <router-link class="nav-link bg-danger text-white" to="/"
        >Pokémon</router-link
      >
    </li>
    <li class="nav-item">
      <router-link class="nav-link bg-light text-danger ml-10" to="/list"
        >Lista Pokémon</router-link
      >
    </li>
  </ul>
  <div class="m-0 vh-100 row justify-content-center align-items-center">
    <router-view class="col-auto p-5" />
  </div>
</template>
<script>
export default {};
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