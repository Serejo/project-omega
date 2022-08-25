<template>
  <div class="mt-3 background rounded-t-xl pt-3">
    <v-row no gutters class="mt-3">
      <v-col cols="8" sm="5" md="5" lg="5" xl="5" class="ml-4">
        <v-row no-gutters>
          <v-text-field
            class="rounded-xl"
            :append-icon="searchIcon"
            placeholder="Nome"
            v-model="urlParams.search"
            outlined
            clearable
            dense
            solo
            flat
          >
          </v-text-field>
        </v-row>
      </v-col>
      <v-col cols="12" sm="5" md="4" lg="4" xl="4" class="">
        <v-row no gutters align="">
          <v-col class="mr-6 ml-4" cols="1">
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
          </v-col>
          <v-col class="mx-4" cols="6" sm="6" md="3" lg="3" xl="3">
            <v-hover v-slot="{ hover }">
              <v-btn
                rounded
                block
                :color="hover ? 'secondary' : 'primary'"
                class="text--text text-truncate"
                @click="openCreateDrivers"
                style="text-transform: none !important; font-weight: bolder"
                >Cadastrar Usuário</v-btn
              >
            </v-hover>
          </v-col>
        </v-row>
      </v-col>

      <!-- <v-col cols="12" sm="6" md="3" lg="3" xl="3">
        <v-row no-gutters>
         
        </v-row>
      </v-col> -->
    </v-row>
    <v-dialog v-model="dialogCreateDrivers" max-width="600" :key="reRender">
      <create-drivers-modal @closeCreateDrivers="closeCreateDrivers" />
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

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
  computed: {
    ...mapGetters("drivers", ["getDriversPagination"]),
    isCurrentPage() {
      return this.$store.getters["drivers/getDriversPagination"].currentPage;
    },
  },
  methods: {
    ...mapActions("drivers", ["drivers", "shippingsCompany", "setIsLoading"]),
    openCreateDrivers() {
      this.shippingsCompany();
      this.reRender += 1;
      this.dialogCreateDrivers = true;
    },
    closeCreateDrivers() {
      this.dialogCreateDrivers = false;
    },
    async search() {
      this.searchIcon = "mdi-loading mdi-spin";
      this.setIsLoading(true);
      const urlParams = {
        page: this.isCurrentPage,
        search: this.urlParams.search,
      };
      await this.drivers(urlParams);
      this.setIsLoading(false);
      this.searchIcon = "mdi-magnify";
    },
  },
};
</script>

<style scoped>
</style>
