import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/store";

import HomeLogin from "../views/HomeLogin.vue";
import Universities from "../views/Universities.vue";

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
      name: "Universities",
      path: "/Universities",
      component: Universities,
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
