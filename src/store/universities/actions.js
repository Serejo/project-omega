import { UniversitiesRepository } from "../../repositories/UniversitiesRepository";

export default {
  async universities({ commit }, urlParams) {
    commit("setIsLoading", true);
    commit("setListingUniversities", []);
    let errorObj = {
      errorStatus: true,
      errorMessage: "Ocorreu um erro na listagem",
    };
    let url = `search?`;
    if (urlParams.name) {
      url = url.concat(`name=${urlParams.name}`);
    }
    if (urlParams.search) {
      url = url.concat(`country=${urlParams.search}`);
    }
    const response = await UniversitiesRepository.universities(url);
    if (response.status >= 200 && response.status < 300) {
      commit("setIsLoading", false);
      commit("setListingUniversities", response.data);
      // commit("setUniversitiesPagination", response.data.data.pagination);
      return;
    }
    commit("notifications/setErrorNotification", errorObj, { root: true });
  },

  setIsLoading({ commit }, value) {
    commit("setIsLoading", value);
  },
};
