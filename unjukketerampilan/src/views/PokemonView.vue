<template>
  <div class="pokemon">
    <h1 class="primary--text">List Pokemon:</h1>
    <v-layout wrap>
      <v-flex
        v-for="pokemon in listPokemon"
        :key="pokemon.name"
        class="pa-2"
        xs12
        sm6
        md4
        lg2
      >
        <v-card
          color="cyan"
          class="d-flex align-center justify-center"
          dark
          elevation="7"
          >
          {{ pokemon.name }} 
        </v-card>
      </v-flex>
    </v-layout>
    <p>{{ infoPokemon }}</p>
    <v-btn class="primary" @click="fetchMorePokemon">Muat Lebih banyak</v-btn>
  </div>
</template>

<script>
export default {
  name: "PokemonView",
  computed: {
    listPokemon() {
      return this.$store.state.pokemon.list;
    },
    infoPokemon() {
      return this.$store.state.pokemon.info;
    },
  },
  methods: {
    fetchPokemon() {
      this.$store.dispatch("pokemon/fetchList");
    },
    fetchMorePokemon() {
      this.$store.dispatch("pokemon/fetchMore");
    },
  },
  mounted() {
    this.fetchPokemon();
  },
};
</script>