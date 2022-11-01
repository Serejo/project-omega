<template>
  <div class="background rounded-xl">
    <v-row class="mx-auto my-auto mt-3">
      <v-col align="start" cols="5">
        <div
          class="
            pa-2
            d-none d-sm-none d-md-block d-lg-block d-xl-block
            text-truncate
            navy--text
            font-weight-bold
          "
        >
          Universities
        </div>
      </v-col>
      <v-col align="start" cols="1">
        <div
          class="
            pa-2
            d-none d-sm-none d-md-block d-lg-block d-xl-block
            text-truncate
            navy--text
            font-weight-bold
          "
        >
          Code
        </div>
      </v-col>
      <v-col align="center" cols="2">
        <div
          class="
            pa-2
            d-none d-sm-none d-md-block d-lg-block d-xl-block
            text-truncate
            navy--text
            font-weight-bold
          "
        >
          Country
        </div>
      </v-col>

      <v-col align="center" cols="2">
        <div
          class="
            pa-2
            d-none d-sm-none d-md-block d-lg-block d-xl-block
            text-truncate
            navy--text
            font-weight-bold
          "
        >
          Link
        </div>
      </v-col>
      <v-col align="start" cols="3"> </v-col>
    </v-row>
    <div v-if="!getIsLoading">
      <v-row
        class="list-card background navy--text mx-auto my-auto mt-2"
        v-for="(universities, i) in getListingUniversities"
        :key="i"
        align="center"
      >
        <v-col cols="5" align="start">
          <span class="d-md-none d-lg-none d-xl-none">
            <b>Nome:</b>
          </span>
          <div class="pa-2 text-truncate">
            {{ universities.name }}
          </div>
        </v-col>
        <v-col cols="2" sm="2" md="1" lg="1" xl="1" align="center">
          <span class="d-md-none d-lg-none d-xl-none">
            <b>Status:</b>
          </span>
          <v-chip class="pa-2 text-wrap" text-color="white" color="pink">
            {{ universities.alpha_two_code }}
          </v-chip>
        </v-col>
        <v-col cols="3" sm="3" md="2" lg="2" xl="2" align="center">
          <span class="d-md-none d-lg-none d-xl-none">
            <b>País:</b>
          </span>
          <div class="pa-2 text-wrap">
            {{ universities.country }}
          </div>
        </v-col>

        <v-col cols="3" sm="3" md="2" lg="2" xl="2" align="center">
          <span class="d-md-none d-lg-none d-xl-none">
            <b>Site:</b>
          </span>

          <div class="pa-2 text-wrap green--text font-weight-bold">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-icon class="" color="primary" v-bind="attrs" v-on="on"
                  >mdi-link</v-icon
                >
              </template>
              <span>{{ universities.domains[0] }}</span>
            </v-tooltip>
          </div>
        </v-col>
        <!-- <v-col cols="6" sm="6" md="1" lg="1" xl="1">
          <v-hover v-slot="{ hover }">
            <v-btn
              fab
              elevation="0"
              small
              class="text-truncate"
              :color="hover ? 'secondary' : 'primary'"
              :class="hover ? 'text--text' : 'text--text'"
              style="text-transform: none !important; font-weight: bolder"
              @click="openSiteUniversity(universities)"
            >
              <v-icon class="text--text">mdi-book-account</v-icon>
            </v-btn>
          </v-hover>
        </v-col> -->
        <v-col cols="2" sm="2" md="2" lg="2" xl="2">
          <v-hover v-slot="{ hover }">
            <v-btn
              block
              rounded
              class="text-truncate"
              :color="hover ? 'secondary' : 'primary'"
              :class="hover ? 'text--text' : 'text--text'"
              max-width="160px"
              style="text-transform: none !important; font-weight: bolder"
              @click="openSiteUniversity(universities)"
            >
              Access Link
            </v-btn>
          </v-hover>
        </v-col>
      </v-row>
      <!-- <v-dialog v-model="startAtendimentoDialog" max-width="720">
        <start-atendimento-modal
          :key="reRender"
          :agendado="agendado"
          @closeButton="closeButton"
          @drivers="getUniversities"
        />
      </v-dialog> -->
      <v-row class="justify-center my-3">
        <v-pagination
          v-model="getAgendamentoPagination.currentPage"
          :length="getAgendamentoPagination.lastPage"
          @input="proxPage(getAgendamentoPagination.currentPage)"
          :total-visible="7"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        >
        </v-pagination>
      </v-row>
    </div>
    <v-col v-else>
      <v-progress-circular
        color="primary"
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-col>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  components: {},
  data: () => ({
    reRender: 0,
    agendado: {},
    startAtendimentoDialog: false,
    isLoading: false,
    urlParams: {
      search: "Brazil",
      page: 1,
    },
    getAgendamentoPagination: {
      currentPage: 1,
      lastPage: 1,
    },
  }),
  mounted() {
    this.getUniversities(this.urlParams);
  },
  computed: {
    ...mapGetters("universities", [
      "getListingUniversities",
      "getUniversitiesPagination",
      "getIsLoading",
    ]),
  },
  methods: {
    ...mapActions("universities", ["universities", "setIsLoading"]),
    async proxPage(page) {
      this.setIsLoading(true);
      this.urlParams = {
        search: "Brazil",
      };
      await this.universities(this.urlParams);
      this.setIsLoading(false);
    },

    openSiteUniversity(university) {
      window.open(university.web_pages[0], "_blank");
    },

    closeButton() {
      this.editDialog = false;
    },

    async getUniversities() {
      await this.universities(this.urlParams);
    },
  },
};
</script>

<style scoped>
.border-right {
  border-right: 0.063rem solid rgba(223, 223, 223, 0.308);
}
.list-card {
  color: black;
  font-weight: normal;
}
.list-card:hover {
  background-color: #ffdfcc;
  color: black;
}
</style>
