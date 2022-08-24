export default {
  getLogin(state) {
    return state.isLogged;
  },

  getToken(state) {
    return state.token;
  },

  getUserName(state) {
    return state.userData.name;
  },

  getUserUuid(state) {
    return state.userData.uuid;
  },

  getRoleName(state) {
    return state.meRole.name;
  },

  getRoleUuid(state) {
    return state.meRole.uuid;
  },

  getMyPermissions(state) {
    return state.myPermissions;
  },

  getAdministrator(state) {
    return state.isAdministrator;
  },
};
