export default {
  async agendamentos({ commit }, urlParams) {
    commit("setIsLoading", true);
    commit("setListingagendamentos", []);
    let errorObj = {
      errorStatus: true,
      errorMessage: "Ocorreu um erro na listagem",
    };
    let url = `/motorista/listar?page=${urlParams.page}&perPage=${10}`;
    if (urlParams.search) {
      url = url.concat(`&search=${urlParams.search}`);
    }
    const response = await agendamentosRepository.requestAgendamentos(url);
    if (response.status >= 200 && response.status < 300) {
      commit("setIsLoading", false);
      commit("setListingAgendamentos", response.data.data.list);
      commit("setAgendamentosPagination", response.data.data.pagination);
      return;
    }
    commit("notifications/setErrorNotification", errorObj, { root: true });
  },

  setIsLoading({ commit }, value) {
    commit("setIsLoading", value);
  },
};
