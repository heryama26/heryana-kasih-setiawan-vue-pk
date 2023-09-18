import axios from "axios";

const state = () => ({
  list: [],
  info: "",
});

const mutations = {
  setList(state, param) {
    state.list = param;
    console.log(state.list);
  },
  setInfo(state, param) {
    state.info = param;
  },
};

const actions = {
  fetchList(store) {
    axios
      .get(`https://newsapi.org/v2/everything?q=apple&from=2023-09-17&to=2023-09-17&sortBy=popularity&apiKey=6c76391df0124547995bcecc735459c7`)
      .then((response) => {
        store.commit("setList", response.data.articles);
        store.commit("setInfo", "");
      })
      .catch((error) => {
        store.commit("setInfo", error);
      });
  },
};

export default {
  state,
  mutations,
  actions,
};