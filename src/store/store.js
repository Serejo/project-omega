import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import notifications from "./notifications";
import login from "./login";


Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  modules: {
    namespaced: true,
    notifications,
    login,
  },
  plugins: [vuexLocal.plugin],
});
