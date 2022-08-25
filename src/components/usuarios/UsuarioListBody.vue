<template>
  <div class="background rounded-b-xl">
    <v-row class="mx-auto my-auto mt-3">
      <v-col align="start" cols="4">
        <div
          class="
            d-none d-sm-none d-md-block d-lg-block d-xl-block
            pa-2
            text-truncate
            font-weight-bold
          "
        >
          Usuário
        </div>
      </v-col>
      <v-col align="start" cols="1">
        <div
          class="
            d-none d-sm-none d-md-block d-lg-block d-xl-block
            pa-2
            text-truncate
            font-weight-bold
          "
        >
          Status
        </div>
      </v-col>
      <v-col align="center" cols="2">
        <div
          class="
            d-none d-sm-none d-md-block d-lg-block d-xl-block
            pa-2
            text-truncate
            font-weight-bold
          "
        >
          Perfil
        </div>
      </v-col>
      <v-col align="center" cols="2">
        <div
          class="
            d-none d-sm-none d-md-block d-lg-block d-xl-block
            pa-2
            text-truncate
            font-weight-bold
          "
        >
          Confirmado
        </div>
      </v-col>
      <v-col align="center" cols="2">
        <div
          class="
            d-none d-sm-none d-md-block d-lg-block d-xl-block
            pa-2
            text-truncate
            font-weight-bold
          "
        >
          Empresa
        </div>
      </v-col>
      <v-col align="start" cols="3"> </v-col>
    </v-row>
    <div v-if="!getIsLoading">
      <v-row
        class="list-card background text--text mx-auto my-auto mt-2"
        v-for="(paciente, i) in getListPacientes"
        :key="i"
        align="center"
      >
        <v-col cols="4" sm="4" md="4" lg="4" xl="4" align="start">
          <span class="d-md-none d-lg-none d-xl-none">
            <b>Nome:</b>
          </span>
          <div class="pa-2 text-truncate">
            {{ paciente.nomeCompleto }}
          </div>
        </v-col>
        <v-col cols="4" sm="4" md="1" lg="1" xl="1" align="center">
          <span class="d-md-none d-lg-none d-xl-none">
            <b>Status:</b>
          </span>
          <v-chip
            class="pa-2 text-wrap"
            text-color="white"
            :color="paciente.corStatus"
          >
            {{ paciente.status }}
          </v-chip>
        </v-col>
        <v-col cols="4" sm="4" md="2" lg="2" xl="2" align="center">
          <span class="d-md-none d-lg-none d-xl-none">
            <b>Perfil:</b>
          </span>
          <div class="pa-2 text-wrap">
            {{ paciente.perfil }}
          </div>
        </v-col>
        <v-col cols="6" sm="4" md="2" lg="2" xl="2" align="center">
          <span class="d-md-none d-lg-none d-xl-none">
            <b>Confirmado:</b>
          </span>
          <div
            v-if="paciente.confirmado"
            class="pa-2 text-wrap green--text font-weight-bold"
          >
            {{ paciente.confirmado ? "Sim" : "Não" }}
          </div>
          <div v-else class="pa-2 text-wrap red--text font-weight-bold">
            {{ paciente.confirmado ? "Sim" : "Não" }}
          </div>
        </v-col>
        <v-col cols="6" sm="4" md="2" lg="2" xl="2">
          <span class="d-md-none d-lg-none d-xl-none">
            <b>Empresa:</b>
          </span>
          <div class="pa-2 text-wrap">
            {{ paciente.empresa }}
          </div>
        </v-col>
        <v-col cols="12" sm="4" md="1" lg="1" xl="1">
          <v-hover v-slot="{ hover }">
            <v-btn
              fab
              elevation="0"
              small
              class="text-truncate"
              :color="hover ? 'secondary' : 'primary'"
              :class="hover ? 'background--text' : 'background--text'"
              style="text-transform: none !important; font-weight: bolder"
              @click="openStartAtendimento(paciente)"
            >
              <v-icon class="background--text">mdi-book-account</v-icon>
            </v-btn>
          </v-hover>
        </v-col>
      </v-row>
      <v-dialog v-model="startAtendimentoDialog" max-width="720">
        <start-atendimento-modal
          :key="reRender"
          :agendado="agendado"
          @closeButton="closeButton"
          @drivers="listDrivers"
        />
      </v-dialog>
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
import StartAtendimentoModal from "./DetalhesUsuarioModal.vue";

export default {
  components: {
    StartAtendimentoModal,
  },
  data: () => ({
    reRender: 0,
    agendado: {},
    startAtendimentoDialog: false,
    isLoading: false,
    urlParams: {
      page: 1,
    },
    getListPacientes: [
      {
        nomeCompleto: "Fernando",
        status: "ativo",
        corStatus: "green",
        confirmado: true,
        data: "01/01/2020",
        perfil: "Cirurgião",
        empresa: "XPtO",
      },
      {
        nomeCompleto: "Ricardo",
        status: "ativo",
        corStatus: "green",
        confirmado: true,
        data: "01/01/2020",
        perfil: "Psicólogo",
        empresa: "XPtO",
      },
      {
        nomeCompleto: "Patricia",
        status: "ativo",
        corStatus: "green",
        confirmado: false,
        data: "01/01/2020",
        perfil: "Médico Pediatra",
        empresa: "XPtO",
      },
      {
        nomeCompleto: "José",
        status: "ativo",
        corStatus: "green",
        confirmado: false,
        data: "01/01/2020",
        perfil: "Médico Pediatra",
        empresa: "XPtO",
      },
      {
        nomeCompleto: "Elder",
        status: "inativo",
        corStatus: "red",
        confirmado: true,
        data: "01/01/2020",
        perfil: "Médico Especialista",
        empresa: "XPtO",
      },
    ],
    getIsLoading: false, //TODO: remover
    getAgendamentoPagination: {
      currentPage: 1,
      lastPage: 1,
    },
  }),
  mounted() {
    // this.listDrivers(this.urlParams);
  },
  computed: {
    // ...mapGetters("drivers", [
    //   "getListingDrivers",
    //   "getDriversPagination",
    //   "getListingCompanys",
    //   "getIsLoading",
    // ]),
  },
  methods: {
    // ...mapActions("drivers", ["drivers", "shippingsCompany", "setIsLoading"]),
    async proxPage(page) {
      this.setIsLoading(true);
      this.urlParams = {
        page: page,
        initialDate: "",
        finalDate: "",
        status: "",
      };
      await this.drivers(this.urlParams);
      this.setIsLoading(false);
    },

    openStartAtendimento(agendado) {
      this.reRender += 1;
      this.startAtendimentoDialog = true;
      this.agendado = agendado;
    },

    closeButton() {
      this.editDialog = false;
    },

    async listDrivers() {
      await this.drivers(this.urlParams);
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
