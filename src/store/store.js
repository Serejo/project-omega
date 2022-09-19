import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import notifications from "./notifications";
import login from "./login";
import whoami from "./whoami";
import menu from "./menu";
import agendamentos from "./agendamentos";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  modules: {
    namespaced: true,
    notifications,
    login,
    whoami,
    menu,
    agendamentos,
  },
  plugins: [vuexLocal.plugin],
});
