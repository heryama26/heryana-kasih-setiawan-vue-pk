import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";
import pokemon from "./pokemon";
import news from "./news";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    pokemon: {
      namespaced: true,
      ...pokemon,
    },
    news: {
      namespaced: true,
      ...news,
    },
  }
})
