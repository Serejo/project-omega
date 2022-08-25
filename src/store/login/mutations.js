export default {
  setLogin(state) {
    state.isLogged = true;
  },

  setLogout(state) {
    state.isLogged = false;
  },

  setToken(state, token) {
    state.token = token;
  },

  setUserData(state, response) {
    state.userData = response;
  },

  setMeRole(state, response) {
    state.meRole = response;
  },

  setAdministrator(state) {
    state.isAdministrator = true;
  },

  setMyPermissions(state, response) {
    state.myPermissions = response;
  },

  setIsLoading(state, response){
    state.isLoading = response;
  }
};
