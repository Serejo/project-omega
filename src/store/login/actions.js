import router from "@/router";
import { AuthRepository } from "../../repositories/AuthRepository";

export default {
  async login({ commit }, payload) {
    commit("setIsLoading", true);
    // const response = await AuthRepository.login(payload);
    const response = { status: 200, data: { token: "12345" } };
    if (response.status >= 200 && response.status < 300) {
      let successObj = {
        successStatus: true,
        successMessage: "Usuário logado com sucesso",
      };
      commit("notifications/setSuccessNotification", successObj, {
        root: true,
      });
      commit("setIsLoading", false);
      commit("setLogin");
      // commit("setMyPermissions", response.data.data.permissions);
      localStorage.setItem("token", response.data.token);
      router.push("/Universities");
      return;
    } else {
      let errorObj = {
        errorStatus: true,
        errorMessage: "Ocorreu um erro ao logar",
      };
      commit("setIsLoading", false);
      commit("notifications/setErrorNotification", errorObj, { root: true });
    }
  },

  async logout({ commit }) {
    let errorObj = {
      errorStatus: true,
      errorMessage: "Ocorreu um erro no logout",
    };
    let successObj = {
      successStatus: true,
      successMessage: "Usuário deslogado com sucesso",
    };
    AuthRepository.logout().then((response) => {
      if (response.status === 200) {
        commit("notifications/setSuccessNotification", successObj, {
          root: true,
        });
        Object.keys(JSON.parse(JSON.stringify(localStorage))).forEach((l) =>
          localStorage.removeItem(l)
        );
        return;
      }
      commit("notifications/setErrorNotification", errorObj, { root: true });
    });
    commit("setLogout");
    router.replace("/");
  },
};
