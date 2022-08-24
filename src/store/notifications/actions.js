export default {
  dismissErrorNotification({ commit }) {
    let payload = {
      errorStatus: false,
      errorMessage: "",
    };
    commit("setErrorNotification", payload);
    return;
  },

  dismissSuccessNotification({ commit }) {
    let payload = {
      errorStatus: false,
      errorMessage: "",
    };
    commit("setSuccessNotification", payload);
    return;
  },
};
