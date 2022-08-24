import { AuthRepository } from "../../repositories/AuthRepository";

export default {
  async whoami({ commit }) {
    // const response = await AuthRepository.whoami();
    const response = { status: 200, data: { empr: { NOME: "Erick" } } };
    if (response.status >= 200 && response.status < 300) {
      commit("setWhoami", response.data.empr);
      return;
    }
    let errorObj = {
      errorStatus: true,
      errorMessage: response.data.message,
    };
    commit("notifications/setErrorNotification", errorObj, { root: true });
  },
};
