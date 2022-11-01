<template>
  <div class="mt-3">
    <v-row no gutters class="justify-center mt-3">
      <v-col cols="6" sm="6" md="4" lg="4" xl="4">
        <v-row no-gutters>
          <v-text-field
            placeholder="Name of the Country"
            v-model="urlParams.search"
            @keyup.enter="search"
            clearable
            dense
            solo
            flat
          >
          </v-text-field>
        </v-row>
      </v-col>
      <v-col cols="6" sm="6" md="4" lg="4" xl="4">
        <v-row no-gutters>
          <v-text-field
            placeholder="Name of the University"
            v-model="urlParams.name"
            @keyup.enter="search"
            clearable
            dense
            solo
            flat
          >
          </v-text-field>
        </v-row>
      </v-col>
      <v-col cols="1">
        <v-row no-gutters>
          <v-hover v-slot="{ hover }">
            <v-btn
              rounded
              block
              @click="search"
              :color="hover ? 'secondary' : 'primary'"
              class="text--text text-truncate"
              style="text-transform: none !important; font-weight: bolder"
              ><v-icon>mdi-filter-outline</v-icon></v-btn
            >
          </v-hover>
        </v-row>
      </v-col>
      <!-- <v-col cols="6" sm="6" md="3" lg="3" xl="3">
        <v-row no-gutters>
          <v-hover v-slot="{ hover }">
            <v-btn
              rounded
              block
              :color="hover ? 'secondary' : 'primary'"
              class="text--text text-truncate"
              @click="openCreateDrivers"
              style="text-transform: none !important; font-weight: bolder"
              >Cadastrar Agendamento</v-btn
            >
          </v-hover>
        </v-row>
      </v-col> -->
    </v-row>
    <!-- <v-dialog v-model="dialogCreateDrivers" max-width="600" :key="reRender">
      <create-drivers-modal @closeCreateDrivers="closeCreateDrivers" />
    </v-dialog> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AgendaListHeader",
  components: {},
  data: () => ({
    reRender: 0,
    searchIcon: "mdi-magnify",
    dialogCreateDrivers: false,
    hover: true,
    urlParams: {
      page: 1,
    },
  }),
  computed: {},
  methods: {
    ...mapActions("universities", ["universities", "setIsLoading"]),
    async search() {
      this.searchIcon = "mdi-loading mdi-spin";
      this.setIsLoading(true);
      const urlParams = {
        page: this.isCurrentPage,
        search: this.urlParams.search,
      };
      await this.universities(urlParams);
      this.setIsLoading(false);
      this.searchIcon = "mdi-magnify";
    },
  },
};
</script>

<style scoped>
</style>
