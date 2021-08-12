<template>
  <div class="card mx-auto" style="width: 18rem">
    <img
      :src="pokemon.thumbnail"
      class="card-img-top m-auto w-75 p-3"
      alt="Pokemon"
    />
    <div class="card-body">
      <h5 class="card-title">{{ pokemon.name.english }}</h5>
      <p class="card-text">{{ pokemon.description }}</p>
    </div>
    <div v-if="isList" class="card-body d-flex justify-content-center">
      <button @click="onRemove(index)" class="btn btn-danger">Eliminar</button>
    </div>
    <div v-else class="card-body d-flex justify-content-between">
      <button @click="onSave" class="btn btn-success">Guardar</button>
      <button @click="onOtherPokemon" class="btn btn-primary">Siguiente</button>
    </div>
  </div>
</template>

<script>
import { toRefs } from "vue";
export default {
  props: {
    pokemon: Object,
    onSave: Function,
    onOtherPokemon: Function,
    index: Number,
    isList: Boolean,
    onRemove: Function,
  },
  setup(props) {
    const { pokemon } = toRefs(props);
    console.log(pokemon.value);
  },
};
</script>
