<template>
  <v-card ref="form">
    <v-card-title
      class="justify-center navy--text"
      style="text-transform: none !important; font-weight: bolder"
    >
      <h3 class="">Detalhes do Paciente</h3>
    </v-card-title>
    <v-card-text class="">
      <div>
        <v-row no-gutters class="justify-start mt-2 mb-1">
          <v-col cols="2" align="start">
            <div class="justify-center navy--text">Nome do Paciente:</div>
          </v-col>
          <v-col cols="10" align="start">
            <v-text-field
              ref="nomeCompleto"
              :error-messages="errorMessages"
              v-model="nomeCompleto"
              outlined
              dense
              :placeholder="agendado.nomeCompleto || 'Nome do Paciente'"
              solo
              flat
              required
              :rules="[rules.name]"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row no-gutters class="justify-start mt-2 mb-1">
          <v-col cols="2" align="start">
            <div class="justify-center navy--text">Status do Paciente:</div>
          </v-col>
          <v-col cols="10" align="start">
            <v-text-field
              ref="statusPaciente"
              :error-messages="errorMessages"
              v-model="statusPaciente"
              outlined
              dense
              :placeholder="agendado.status || 'Status do Paciente'"
              solo
              flat
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters class="justify-start mt-2 mb-1">
          <v-col cols="2" align="start">
            <div class="justify-center navy--text">Contato:</div>
          </v-col>
          <v-col cols="4" align="start">
            <v-text-field
              ref="statusPaciente"
              :error-messages="errorMessages"
              v-model="statusPaciente"
              outlined
              dense
              :placeholder="agendado.contato || '(XX) XXXXX-XXXX'"
              solo
              flat
              required
            ></v-text-field>
          </v-col>
          <v-col cols="2" align="start">
            <div class="justify-center navy--text">Cep:</div>
          </v-col>
          <v-col cols="4" align="start">
            <v-text-field
              ref="statusPaciente"
              :error-messages="errorMessages"
              v-model="statusPaciente"
              outlined
              dense
              :placeholder="agendado.contato || 'XXXXX-XXX'"
              solo
              flat
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-col class="align-self-center" cols="4">
        <v-hover v-slot="{ hover }">
          <v-btn
            rounded
            :loading="isLoadingBtn"
            :color="hover ? 'secondary' : 'primary'"
            x-large
            block
            class="text--text"
            style="text-transform: none !important; font-weight: bolder"
            max-width="220px"
            @click="startConsulta()"
            >Iniciar</v-btn
          >
        </v-hover>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  components: {},
  name: "EditDriversModal",
  data: () => ({
    formHasErrors: false,
    isLoadingBtn: false,
    errorMessages: "",
    nomeCompleto: "",
    transportadoraId: null,
    // cpf: "",
    editDriver: {
      motoristaId: Number,
      nomeCompleto: "",
      transportadoraId: "",
      cpf: "",
    },
    rules: {
      name: (value) => !!value || "O campo nome n??o pode ser vazio.",
      company: (value) =>
        !!value || "O campo transportadora n??o pode ser vazio.",
      cpf: (value) => !!value || "O campo cpf n??o pode ser vazio.",
    },
  }),
  props: {
    agendado: { Object },
  },
  mounted() {
    this.driverLoad();
  },
  computed: {
    ...mapGetters("drivers", ["getListingCompanys"]),
    ...mapState("drivers", ["isLoading"]),
    form() {
      return {
        nomeCompleto: this.editDriver.nomeCompleto,
        transportadoraId: this.editDriver.transportadoraId,
      };
    },
  },
  methods: {
    ...mapActions("drivers", ["editDrivers"]),
    startConsulta() {},

    driverLoad() {
      this.nomeCompleto = this.agendado.nomeCompleto;
      // this.cpf = this.driver.cpf;
    },
  },
  watch: {
    name() {
      this.errorMessages = "";
    },
  },
};
</script>
<style scoped>
.h {
  font-weight: bolder;
}
.list-header {
  background-color: #0f2733;
  color: white;
  font-weight: bolder;
  min-height: 30px;
}
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
