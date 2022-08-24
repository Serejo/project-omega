import router from "@/router";
import { AuthRepository } from "../../repositories/AuthRepository";

export default {
  async login({ commit }, payload) {
    commit("setIsLoading", true);
    let successObj = {
      successStatus: true,
      successMessage: "Usuário logado com sucesso",
    };
    try {
      const response = await AuthRepository.login(payload);
      console.log({ response });
      if (response === undefined) {
        let errorObj = {
          errorStatus: true,
          errorMessage: response.data.message,
        };
        commit("setIsLoading", false);
        commit("notifications/setErrorNotification", errorObj, { root: true });
        return;
      }
      if (response.status >= 200 && response.status < 300) {
        commit("notifications/setSuccessNotification", successObj, {
          root: true,
        });
        commit("setIsLoading", false);
        commit("setLogin");
        commit("setMyPermissions", response.data.data.permissions);
        localStorage.setItem("token", response.data.data.token);
        router.push("/dashboard");
        return;
      } else {
        let errorObj = {
          errorStatus: true,
          errorMessage: "Ocorreu um erro ao logar",
        };
        commit("setIsLoading", false);
        commit("notifications/setErrorNotification", errorObj, { root: true });
      }
    } catch (e) {
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
