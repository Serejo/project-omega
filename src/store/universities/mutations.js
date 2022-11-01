export default {
  setListingUniversities(state, response) {
    state.listingUniversities = response;
  },
  setUniversitiesPagination(state, response) {
    state.universitiesPagination.total = response.total;
    state.universitiesPagination.perPage = response.perPage;
    state.universitiesPagination.currentPage = response.currentPage;
    state.universitiesPagination.lastPage = response.lastPage;
    state.universitiesPagination.nextPage = response.nextPage;
  },
  setIsLoading(state, response) {
    state.isLoading = response;
  },
};
