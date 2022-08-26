export default {
  setListingAgendamentos(state, response) {
    state.listingAgendamentos = response;
  },
  setAgendamentosPagination(state, response) {
    state.agendamentosPagination.total = response.total;
    state.agendamentosPagination.perPage = response.perPage;
    state.agendamentosPagination.currentPage = response.currentPage;
    state.agendamentosPagination.lastPage = response.lastPage;
    state.agendamentosPagination.nextPage = response.nextPage;
  },
  setIsLoading(state, response) {
    state.isLoading = response;
  },
};
