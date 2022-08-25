<template>
  <div class="background rounded-xl">
    <v-row class="mx-auto my-auto mt-3">
      <v-col align="start" cols="3">
        <div class="pa-2 text-truncate font-weight-bold">Nome</div>
      </v-col>
      <v-col align="start" cols="2">
        <div class="pa-2 text-truncate font-weight-bold">Confirmado</div>
      </v-col>
      <v-col align="start" cols="1">
        <div class="pa-2 text-truncate font-weight-bold">Status</div>
      </v-col>
      <v-col align="center" cols="1">
        <div class="pa-2 text-truncate font-weight-bold">Data</div>
      </v-col>

      <v-col align="center" cols="3">
        <div class="pa-2 text-truncate font-weight-bold">Convênio</div>
      </v-col>
      <v-col align="start" cols="2"> </v-col>
    </v-row>
    <div v-if="!getIsLoading">
      <v-row
        class="list-card background text--text mx-auto my-auto mt-2"
        v-for="(agendado, i) in getListAgendamentos"
        :key="i"
        align="center"
      >
        <v-col cols="12" sm="4" md="3" lg="3" xl="3" align="start">
          <span class="d-md-none d-lg-none d-xl-none">
            <b>Nome:</b>
          </span>
          <div class="pa-2 text-truncate">
            {{ agendado.nomeCompleto }}
          </div>
        </v-col>
        <v-col cols="12" sm="4" md="2" lg="2" xl="2" align="start">
          <span class="d-md-none d-lg-none d-xl-none">
            <b>Confirmado:</b>
          </span>

          <div
            v-if="agendado.confirmado"
            class="pa-2 text-wrap green--text font-weight-bold"
          >
            {{ agendado.confirmado ? "Sim" : "Não" }}
          </div>
          <div v-else class="pa-2 text-wrap red--text font-weight-bold">
            {{ agendado.confirmado ? "Sim" : "Não" }}
          </div>
        </v-col>
        <v-col cols="12" sm="4" md="1" lg="1" xl="1" align="start">
          <span class="d-md-none d-lg-none d-xl-none">
            <b>Status:</b>
          </span>
          <v-chip
            class="pa-2 text-wrap"
            text-color="white"
            :color="agendado.corStatus"
          >
            {{ agendado.status }}
          </v-chip>
        </v-col>
        <v-col cols="12" sm="4" md="1" lg="1" xl="1" align="start">
          <span class="d-md-none d-lg-none d-xl-none">
            <b>Data/Hora:</b>
          </span>
          <div class="pa-2 text-wrap">
            {{ agendado.dataHora }}
          </div>
        </v-col>

        <v-col cols="12" sm="4" md="3" lg="3" xl="3" align="center">
          <span class="d-md-none d-lg-none d-xl-none">
            <b>Convenio:</b>
          </span>
          <div class="pa-2 text-wrap">
            {{ agendado.convenio }}
          </div>
        </v-col>
        <v-col cols="12" sm="4" md="2" lg="2" xl="2">
          <v-hover v-slot="{ hover }">
            <v-btn
              block
              rounded
              class="text-truncate"
              :color="hover ? 'secondary' : 'primary'"
              :class="hover ? 'background--text' : 'background--text'"
              max-width="160px"
              style="text-transform: none !important; font-weight: bolder"
              @click="openStartAtendimento(agendado)"
            >
              Consulta
              <v-icon class="background--text ml-2"
                >mdi-arrow-top-right-bold-box</v-icon
              >
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
import StartAtendimentoModal from "./DetalhesPacienteModal.vue";

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
    getListAgendamentos: [
      {
        nomeCompleto: "Fernando",
        status: "ativo",
        corStatus: "green",
        confirmado: true,
        dataHora: "01/01/2020",
        convenio: "Unimed",
      },
      {
        nomeCompleto: "Ricardo",
        status: "ativo",
        corStatus: "green",
        confirmado: true,
        dataHora: "01/01/2020",
        convenio: "Hapvida",
      },
      {
        nomeCompleto: "Patricia",
        status: "ativo",
        corStatus: "green",
        confirmado: false,
        dataHora: "01/01/2020",
        convenio: "Hapvida",
      },
      {
        nomeCompleto: "José",
        status: "ativo",
        corStatus: "green",
        confirmado: false,
        dataHora: "01/01/2020",
        convenio: "Unimed",
      },
      {
        nomeCompleto: "Elder",
        status: "inativo",
        corStatus: "red",
        confirmado: true,
        dataHora: "01/01/2020",
        convenio: "Unimed",
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
