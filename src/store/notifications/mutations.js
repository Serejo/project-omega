export default {
  setErrorNotification(state, payload) {
    state.errorNotification.errorStatus = payload.errorStatus;
    state.errorNotification.errorMessage = payload.errorMessage;
  },

  setSuccessNotification(state, payload) {
    state.successNotification.successStatus = payload.successStatus;
    state.successNotification.successMessage = payload.successMessage;
  },
};
