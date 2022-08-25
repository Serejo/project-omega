export default {
  isLogged: !!localStorage.getItem("token"),
  isAdministrator: false,
  token: "",
  userData: [],
  meRole: [],
  myPermissions: [],
  isLoading: false,
};
