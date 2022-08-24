import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/store";

import HomeLogin from "../views/HomeLogin.vue";
import Dashboard from "../views/Dashboard.vue";
import Agenda from "../views/Agenda.vue";
import Pacientes from "../views/Pacientes.vue";
import Prontuario from "../views/Prontuario.vue";
import Perfis from "../views/Perfis.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "",
  routes: [
    {
      name: "Login",
      path: "/",
      component: HomeLogin,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      component: Dashboard,
    },
    {
      name: "Pacientes",
      path: "/pacientes",
      component: Pacientes,
    },
    {
      name: "Agenda",
      path: "/agenda",
      component: Agenda,
    },
    {
      name: "Prontuario",
      path: "/prontuario",
      component: Prontuario,
    },
    {
      name: "Perfis",
      path: "/perfis",
      component: Perfis,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters["login/getLogin"]) {
      next({
        path: "/",
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
